import { MapPin, Clock, Calendar, ArrowRight, BrushIcon as Broom, Droplet, Wind, Utensils, ShowerHeadIcon as Shower } from 'lucide-react'
import { 
  Button, 
  Input,
  Box,
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  InputGroup,
  InputLeftElement,
  HStack,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Select,
  IconButton,
  Divider,
  Image,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import ServiceForm from '../components/ServiceForm'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import Map from '../components/GoogleMap'
import { Link as RouterLink } from 'react-router-dom'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { useLoadScript } from '@react-google-maps/api'

// Move libraries array outside component to prevent reloads
const GOOGLE_MAPS_LIBRARIES = ['places']

export default function Component() {
  const [address, setAddress] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-CA'))
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedServices, setSelectedServices] = useState([])
  const [bhk, setBhk] = useState(1)
  const [showPricing, setShowPricing] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isPricingOpen,
    onOpen: onPricingOpen,
    onClose: onPricingClose
  } = useDisclosure()
  const {
    isOpen: isHiringModalOpen,
    onOpen: onHiringModalOpen,
    onClose: onHiringModalClose
  } = useDisclosure()
  const toast = useToast()
  const [phone, setPhone] = useState('')

  const services = [
    { 
      id: 'dusting', 
      name: 'Dusting', 
      icon: '✨', 
      prices: { 1: 60, 2: 115, 3: 170 },
      basePrice4Plus: 50
    },
    { 
      id: 'mopping', 
      name: 'Mopping', 
      icon: '🪣', 
      prices: { 1: 70, 2: 135, 3: 200 },
      basePrice4Plus: 60
    },
    { 
      id: 'sweeping', 
      name: 'Sweeping', 
      icon: '🧹', 
      prices: { 1: 60, 2: 115, 3: 170 },
      basePrice4Plus: 50
    },
    { 
      id: 'utensils', 
      name: 'Utensils', 
      icon: '🍽️', 
      prices: { 1: 60, 2: 115, 3: 170 },
      basePrice4Plus: 50
    },
    { 
      id: 'bathroom', 
      name: 'Bathroom', 
      icon: '🚽', 
      prices: { 1: 130, 2: 250, 3: 370 },
      basePrice4Plus: 100
    },
    { 
      id: 'bathroom-deep-clean', 
      name: 'Deep Clean\nBathroom', 
      icon: '🧼', 
      prices: { 1: 750, 2: 1500, 3: 2250 },
      basePrice4Plus: 750
    },
    { 
      id: 'stairs', 
      name: 'Stairs', 
      icon: '🪜', 
      prices: { 1: 50, 2: 100, 3: 150 },
      basePrice4Plus: 50
    },
    { 
      id: 'balcony', 
      name: 'Balcony', 
      icon: '🪴', 
      prices: { 1: 50, 2: 100, 3: 150 },
      basePrice4Plus: 50
    }
  ]

  const calculatePrice = (service, bhk) => {
    if (bhk <= 3) {
      return service.prices[bhk]
    } else {
      // For 4+ BHK, use the 3 BHK price as base and add the additional per BHK charge
      const additionalBhks = bhk - 3
      return service.prices[3] + (additionalBhks * service.basePrice4Plus)
    }
  }

  // Update useLoadScript to use static libraries array
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: GOOGLE_MAPS_LIBRARIES
  })

  // Initialize Autocomplete
  const initAutocomplete = (input) => {
    if (input && isLoaded) {
      const autocomplete = new window.google.maps.places.Autocomplete(input, {
        componentRestrictions: { country: 'in' },
        fields: ['formatted_address', 'geometry']
      })

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        if (place.formatted_address) {
          setAddress(place.formatted_address)
        }
      })
    }
  }

  const calculateTotalPrice = () => {
    if (selectedServices.length === 0) {
      toast({
        title: "Please Select Services",
        description: "Select at least one service to see prices",
        status: "warning",
        duration: 3000,
        isClosable: true,
      })
      return
    }

    onPricingOpen()
  }

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  // Generate time slots in 15-minute increments
  const generateTimeSlots = () => {
    const slots = []
    const now = new Date()
    const today = now.toLocaleDateString('en-CA') // Format: YYYY-MM-DD in local time
    const thirtyMinsFromNow = new Date(now.getTime() + 30 * 60000)
    
    // Only add "Now" option if today is selected
    if (selectedDate === today) {
      slots.push({ value: "now", label: "Now" })
    }

    // Create a date object for the selected date in local time
    const [year, month, day] = selectedDate.split('-')
    const selectedDateObj = new Date(year, month - 1, day)
    selectedDateObj.setHours(0, 0, 0, 0)

    // Add regular time slots
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        // Create a new date object for this time slot in local time
        const slotTime = new Date(selectedDateObj)
        slotTime.setHours(hour, minute, 0, 0)

        // Skip times in the past (including buffer) for today
        if (selectedDate === today && slotTime.getTime() <= thirtyMinsFromNow.getTime()) {
          continue
        }

        const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
        const period = hour < 12 ? 'AM' : 'PM'
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        const time12 = `${hour12}:${minute.toString().padStart(2, '0')} ${period}`
        slots.push({ value: timeString, label: time12 })
      }
    }
    return slots
  }

  // Generate dates for next 30 days
  const generateDates = () => {
    const dates = []
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push({
        date: date,
        value: date.toLocaleDateString('en-CA'), // Format: YYYY-MM-DD in local time
        label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      })
    }
    return dates
  }

  // Handle date change
  const handleDateChange = (e) => {
    const newDate = e.target.value
    setSelectedDate(newDate)
    
    // If changing from today to another day, and "now" was selected,
    // reset the time selection
    const today = new Date().toISOString().split('T')[0]
    if (selectedTime === 'now' && newDate !== today) {
      setSelectedTime('')
    }
  }

  // Handle time change
  const handleTimeChange = (e) => {
    const newTime = e.target.value
    setSelectedTime(newTime)
  }

  // Format date for service form
  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr)
    date.setHours(12, 0, 0, 0)  // Set to noon to avoid timezone issues
    return date.toISOString().split('T')[0]
  }

  const adjustBhk = (increment) => {
    setBhk(prev => Math.max(1, prev + increment))
  }

  const handleCallbackRequest = async (e) => {
    e.preventDefault()

    // Validate phone number
    if (phone.length !== 10) {
      toast({
        title: 'Invalid Phone Number',
        description: 'Please enter a valid 10-digit phone number',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    try {
      const callbackData = {
        phone: phone,
        status: 'pending',
        timestamp: serverTimestamp(),
      }

      // Add to 'callbackRequests' collection
      const docRef = await addDoc(collection(db, 'callbackRequests'), callbackData)
      
      // Reset form and show success message
      setPhone('')
      toast({
        title: 'Request Received',
        description: 'We will call you back shortly!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit request. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const handleAppDownload = () => {
    window.open('https://apps.apple.com/us/app/swachh-saathi/id6738629953', '_blank')
  }

  const handleBookNow = () => {
    onPricingClose(); // Close the pricing modal
    onOpen(); // Open the service form
  };

  return (
    <Box minH="100vh" bg="white" display="flex" flexDirection="column">
      <Box flex="1">
        <Container maxW="container.xl" pt={8}>
          <Flex direction={{ base: 'column', lg: 'row' }} gap={8}>
            {/* Left Side - Form */}
            <Box flex="1">
              <VStack spacing={8} align="stretch">
                {/* Hero Section */}
                <Box>
                  <Heading
                    fontSize={{ base: "4xl", md: "5xl" }}
                    fontWeight="bold"
                    mb={6}
                    fontFamily="Inter, sans-serif"
                  >
                    Get house help anytime with Swachh Saathi
                  </Heading>

                  {/* Service Selection */}
                  <SimpleGrid columns={{ base: 2, md: 5 }} spacing={4} mb={8}>
                    {services.map((service) => (
                      <Button
                        key={service.id}
                        height="auto"
                        minHeight="100px"
                        py={4}
                        bg={selectedServices.includes(service.id) ? 'blue.50' : 'white'}
                        border="1px solid"
                        borderColor={selectedServices.includes(service.id) ? 'blue.500' : 'gray.200'}
                        borderRadius="md"
                        onClick={() => toggleService(service.id)}
                        _hover={{ bg: selectedServices.includes(service.id) ? 'blue.50' : 'gray.50' }}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        gap={2}
                        transition="all 0.2s"
                        color={selectedServices.includes(service.id) ? 'blue.500' : 'inherit'}
                        whiteSpace="pre-wrap"
                        textAlign="center"
                      >
                        <Text fontSize="2xl">{service.icon}</Text>
                        <Text fontSize="sm" lineHeight="short">{service.name}</Text>
                      </Button>
                    ))}
                  </SimpleGrid>

                  {/* BHK Selector */}
                  <Box mb={8}>
                    <Text mb={2} textAlign="center" fontSize="md" color="gray.600">
                      Number of BHK
                    </Text>
                    <Flex justify="center" align="center" gap={4}>
                      <IconButton
                        icon={<MinusIcon />}
                        onClick={() => adjustBhk(-1)}
                        isDisabled={bhk <= 1}
                        variant="outline"
                        borderRadius="full"
                        borderColor="gray.300"
                        size="lg"
                        aria-label="Decrease BHK"
                      />
                      <Text fontSize="xl" fontWeight="medium">
                        {bhk} BHK
                      </Text>
                      <IconButton
                        icon={<AddIcon />}
                        onClick={() => adjustBhk(1)}
                        variant="outline"
                        borderRadius="full"
                        borderColor="gray.300"
                        size="lg"
                        aria-label="Increase BHK"
                      />
                    </Flex>
                  </Box>

                  {/* Address Input */}
                  <InputGroup size="lg" mb={4}>
                    <InputLeftElement pointerEvents="none">
                      <Icon as={MapPin} color="gray.500" />
                    </InputLeftElement>
                    <Input
                      pl={10}
                      placeholder="Enter your address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      bg="gray.50"
                      border="1px solid"
                      borderColor="gray.300"
                      _focus={{ borderColor: 'black', boxShadow: 'none' }}
                      ref={initAutocomplete}
                    />
                  </InputGroup>

                  {/* Date and Time Selection */}
                  <Flex gap={4} mb={6}>
                    <Select
                      size="lg"
                      placeholder="Select date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      flex={1}
                      bg="gray.50"
                      border="1px solid"
                      borderColor="gray.300"
                      _focus={{ borderColor: 'black', boxShadow: 'none' }}
                    >
                      {generateDates().map((dateObj) => (
                        <option key={dateObj.value} value={dateObj.value}>
                          {dateObj.label}
                        </option>
                      ))}
                    </Select>

                    <Select
                      size="lg"
                      placeholder="Select time"
                      value={selectedTime}
                      onChange={handleTimeChange}
                      flex={1}
                      bg="gray.50"
                      border="1px solid"
                      borderColor="gray.300"
                      _focus={{ borderColor: 'black', boxShadow: 'none' }}
                    >
                      {generateTimeSlots().map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </Select>
                  </Flex>

                  {/* Action Buttons */}
                  <VStack spacing={4} align="stretch">
                    <Button
                      size="lg"
                      width="100%"
                      colorScheme="black"
                      bg="black"
                      color="white"
                      _hover={{ bg: 'gray.800' }}
                      onClick={calculateTotalPrice}
                    >
                      See prices
                    </Button>

                    <Text 
                      fontSize="sm" 
                      color="gray.600"
                      textAlign="center"
                    >
                      Get the app to save an address and view past requests
                    </Text>

                    <Button 
                      variant="unstyled" 
                      h="12"
                      onClick={handleAppDownload}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      bg="transparent"
                    >
                      <Image 
                        src="/store-badges/App Store Badge.svg"
                        alt="Download on the App Store"
                        height="44px"
                        width="auto"
                        _hover={{ 
                          filter: "brightness(1.1)"
                        }}
                      />
                    </Button>

                    {/* Mobile Map */}
                    <Box 
                      display={{ base: 'block', lg: 'none' }}
                      height="300px"
                      width="100%"
                      aspectRatio="1/1"
                      mt={4}
                    >
                      <Map isLoaded={isLoaded} />
                    </Box>
                  </VStack>

                  {/* Suggestions Section */}
                  <Box mt={8}>
                    <Heading 
                      fontSize="2xl" 
                      mb={6}
                      fontFamily="Inter, sans-serif"
                    >
                      Suggestions
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                      {/* Immediate Service */}
                      <Box
                        bg="gray.50"
                        p={6}
                        borderRadius="xl"
                        position="relative"
                        cursor="pointer"
                        onClick={() => {
                          setSelectedTime('now')
                          calculateTotalPrice()
                        }}
                        _hover={{ bg: 'gray.100' }}
                        transition="all 0.2s"
                      >
                        <HStack spacing={4}>
                          <VStack align="start" flex={1} spacing={2}>
                            <Text fontWeight="semibold" fontSize="lg">Immediate</Text>
                            <Text color="gray.600" fontSize="sm" lineHeight="tall">
                              Get maid services in 30 minutes or less 24/7. Currently only available in Dwarka, Delhi.
                            </Text>
                          </VStack>
                          <Box 
                            boxSize="60px" 
                            bg="white" 
                            borderRadius="xl" 
                            p={3}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            boxShadow="sm"
                          >
                            <Icon as={Clock} boxSize={6} />
                          </Box>
                        </HStack>
                      </Box>

                      {/* Reserve Service */}
                      <Box
                        bg="gray.50"
                        p={6}
                        borderRadius="xl"
                        position="relative"
                        cursor="pointer"
                        onClick={() => {
                          setSelectedTime('')
                          calculateTotalPrice()
                        }}
                        _hover={{ bg: 'gray.100' }}
                        transition="all 0.2s"
                      >
                        <HStack spacing={4}>
                          <VStack align="start" flex={1} spacing={2}>
                            <Text fontWeight="semibold" fontSize="lg">Reserve</Text>
                            <Text color="gray.600" fontSize="sm" lineHeight="tall">
                              Schedule your cleaning in advance. Available 24/7, so you never have to plan around us. Currently available in Delhi.
                            </Text>
                          </VStack>
                          <Box 
                            boxSize="60px" 
                            bg="white" 
                            borderRadius="xl" 
                            p={3}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            boxShadow="sm"
                          >
                            <Icon as={Calendar} boxSize={6} />
                          </Box>
                        </HStack>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Box>
              </VStack>
            </Box>

            {/* Desktop Map */}
            <Box 
              flex="1" 
              height={{ lg: "600px" }} 
              maxWidth={{ lg: "600px" }}
              position="sticky" 
              top="24px"
              display={{ base: 'none', lg: 'block' }}
            >
              <Map isLoaded={isLoaded} />
            </Box>
          </Flex>
        </Container>

        {/* Safety Section */}
        <Box 
          borderTop="1px" 
          borderColor="gray.200" 
          bg="gray.50"
          py={12}
          mt={8}
        >
          <Container maxW="container.xl">
            <VStack maxW="800px" mx="auto" spacing={4}>
              <Heading 
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold" 
                textAlign="center"
              >
                Safety is our #1 priority
              </Heading>
              <Text 
                color="gray.600"
                textAlign="center"
                fontSize="lg"
              >
                All our maids go through background checks, have police verification, and are personally
                vetted by our team. If you experience any incident with any of our maids, please call us
                as soon as possible. We will take action immediately to resolve the issue.
              </Text>
              <Button 
                variant="outline" 
                mt={4}
                onClick={onHiringModalOpen}
                size="lg"
              >
                Learn about our hiring process
              </Button>
            </VStack>
          </Container>
        </Box>

        {/* Questions Section */}
        <Box bg="white" py={12}>
          <Container maxW="container.xl">
            <VStack maxW="800px" mx="auto" spacing={6}>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="medium"
                color="black"
                textAlign="center"
              >
                Questions? Call or message us anytime or leave your phone number below for a call back
              </Text>
              
              {/* Phone Input Form */}
              <Box width={{ base: "100%", sm: "400px" }}>
                <form onSubmit={handleCallbackRequest}>
                  <VStack spacing={4}>
                    <InputGroup size="lg">
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.500"
                        fontSize="lg"
                        h="12"
                      >
                        +91
                      </InputLeftElement>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        h="12"
                        pl="12"
                        bg="white"
                        border="1px solid"
                        borderColor="gray.300"
                        _hover={{ borderColor: "gray.400" }}
                        _focus={{ 
                          borderColor: "black",
                          boxShadow: "none"
                        }}
                      />
                    </InputGroup>
                    <Button
                      type="submit"
                      colorScheme="brand"
                      width="full"
                      height="12"
                      fontSize="lg"
                      bg="black"
                      color="white"
                      _hover={{ bg: "gray.800" }}
                    >
                      Request Callback
                    </Button>
                  </VStack>
                </form>
              </Box>
            </VStack>
          </Container>
        </Box>

        {/* App Download Section */}
        <Box bg="gray.50" py={12}>
          <Container maxW="container.xl">
            <VStack maxW="800px" mx="auto" spacing={6}>
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                textAlign="center"
                fontFamily="Inter, sans-serif"
              >
                It's easier in the app
              </Heading>
              
              <Box
                bg="white"
                p={6}
                borderRadius="md"
                width={{ base: "100%", sm: "400px" }}
                cursor="pointer"
                onClick={handleAppDownload}
                _hover={{ bg: 'gray.50' }}
                transition="all 0.2s"
              >
                <HStack spacing={6} align="center">
                  <Image
                    src="/logo.png"
                    alt="Swachh Saathi Logo"
                    boxSize="80px"
                    borderRadius="xl"
                  />
                  <Text fontSize="lg" fontWeight="medium" flex={1}>
                    Download the Swachh Saathi app
                  </Text>
                  <Icon as={ArrowRight} boxSize={6} />
                </HStack>
              </Box>

              <Button 
                variant="unstyled" 
                h="12"
                onClick={handleAppDownload}
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="transparent"
              >
                <Image 
                  src="/store-badges/App Store Badge.svg"
                  alt="Download on the App Store"
                  height="44px"
                  width="auto"
                  _hover={{ 
                    filter: "brightness(1.1)"
                  }}
                />
              </Button>
            </VStack>
          </Container>
        </Box>

        {/* Footer */}
        <Box 
          as="footer" 
          borderTop="1px" 
          borderColor="gray.200" 
          bg="white" 
          py="6"
          mt="8"
        >
          <Container maxW="container.xl">
            <HStack 
              spacing={{ base: 4, md: 8 }} 
              justify="center"
              flexWrap="wrap"
            >
              <Button
                variant="ghost"
                color="gray.600"
                fontSize="sm"
                fontWeight="medium"
                as="a"
                href="https://wa.me/917428421373"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </Button>
              <Button
                variant="ghost"
                color="gray.600"
                fontSize="sm"
                fontWeight="medium"
                as={RouterLink}
                to="/privacy-policy"
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                color="gray.600"
                fontSize="sm"
                fontWeight="medium"
                as={RouterLink}
                to="/terms"
              >
                Terms and Conditions
              </Button>
              <Button
                variant="ghost"
                color="gray.600"
                fontSize="sm"
                fontWeight="medium"
                as={RouterLink}
                to="/delete-account"
              >
                Delete Account
              </Button>
              <Button
                variant="ghost"
                color="gray.600"
                fontSize="sm"
                fontWeight="medium"
                as={RouterLink}
                to="/support"
              >
                Support
              </Button>
            </HStack>
          </Container>
        </Box>

        {/* Pricing Modal */}
        <Modal isOpen={isPricingOpen} onClose={onPricingClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Service Pricing</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack spacing={4} align="stretch">
                {selectedServices.map(serviceId => {
                  const service = services.find(s => s.id === serviceId)
                  return (
                    <Box key={serviceId} p={4} bg="gray.50" borderRadius="md">
                      <Flex justify="space-between" align="center">
                        <Text>
                          {service.icon} {service.name}
                        </Text>
                        <Text fontWeight="bold">
                          ₹{calculatePrice(service, bhk)}
                        </Text>
                      </Flex>
                    </Box>
                  )
                })}
                
                <Divider />
                
                <Flex justify="space-between" align="center" fontWeight="bold">
                  <Text>Total</Text>
                  <Text>
                    ₹{selectedServices.reduce((total, serviceId) => {
                      const service = services.find(s => s.id === serviceId)
                      return total + calculatePrice(service, bhk)
                    }, 0)}
                  </Text>
                </Flex>

                <Button 
                  colorScheme="brand" 
                  size="lg" 
                  width="full"
                  onClick={handleBookNow}
                  mt={4}
                >
                  Book Now
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Service Form */}
        <ServiceForm 
          isOpen={isOpen} 
          onClose={onClose}
          initialServices={selectedServices}
          initialBhk={bhk}
        />

        {/* Hiring Process Modal */}
        <Modal isOpen={isHiringModalOpen} onClose={onHiringModalClose} size="lg">
          <ModalOverlay />
          <ModalContent mx={4}>
            <ModalHeader>Our Hiring Process</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <VStack align="start" spacing={4}>
                <Text>
                  <Text as="span" fontWeight="bold">1.</Text> Our team personally recruits all maids that provide service on our platform. We meet with them in person in order to judge their character and fit for our service. We wouldn't hire a maid we wouldn't trust to clean our own homes.
                </Text>
                <Text>
                  <Text as="span" fontWeight="bold">2.</Text> Maids then submit to us their documentation which we keep on record in case of any incident.
                </Text>
                <Text>
                  <Text as="span" fontWeight="bold">3.</Text> Maids must also submit to us proof of police verification before they are able to join our platform.
                </Text>
                <Text mt={4} fontWeight="medium">
                  Safety is our #1 priority and we take it extremely seriously. Please call us if you have any concerns regarding an experience with any of our maids. We will work to resolve it immediately.
                </Text>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  )
}