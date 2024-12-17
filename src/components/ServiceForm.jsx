import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack,
  Box,
  Text,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  IconButton,
  Collapse,
  Select,
  Textarea,
  useToast,
  Alert,
  CloseButton,
} from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];

const services = [
  { 
    id: 'sweeping',
    name: "Sweeping", 
    icon: "🧹",
    basePrice4Plus: 50,
    prices: {
      1: 60,
      2: 115,
      3: 170,
      4: 220
    }
  },
  { 
    id: 'mopping',
    name: "Mopping", 
    icon: "🧽",
    basePrice4Plus: 60,
    prices: {
      1: 70,
      2: 135,
      3: 200,
      4: 260
    }
  },
  { 
    id: 'dusting',
    name: "Dusting", 
    icon: "✨",
    basePrice4Plus: 50,
    prices: {
      1: 60,
      2: 115,
      3: 170,
      4: 220
    }
  },
  { 
    id: 'utensils',
    name: "Utensils", 
    icon: "🍽️",
    basePrice4Plus: 50,
    prices: {
      1: 60,
      2: 115,
      3: 170,
      4: 220
    }
  },
  { 
    id: 'bathroom',
    name: "Bathroom", 
    icon: "🚿",
    basePrice4Plus: 110,
    prices: {
      1: 130,
      2: 250,
      3: 370,
      4: 480
    }
  },
  { 
    id: 'bathroom-deep-clean',
    name: "Deep Clean Bathroom", 
    icon: "🧼",
    basePrice4Plus: 750,
    prices: {
      1: 750,
      2: 1500,
      3: 2250,
      4: 3000
    }
  },
  { 
    id: 'stairs',
    name: "Stairs", 
    icon: "🪜",
    basePrice4Plus: 50,
    prices: {
      1: 50,
      2: 100,
      3: 150,
      4: 200
    }
  },
  { 
    id: 'balcony',
    name: "Balcony", 
    icon: "🪴",
    basePrice4Plus: 50,
    prices: {
      1: 50,
      2: 100,
      3: 150,
      4: 200
    }
  }
]

function ServiceForm({ 
  isOpen, 
  onClose, 
  initialAddress = '',
  initialServices = [],
  initialBhk = 1,
  initialDate = '',
  initialTime = '',
  isNow = false
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const addressInputRef = useRef(null);
  const autocompleteRef = useRef(null);

  const [formData, setFormData] = useState({
    address: initialAddress,
    name: '',
    phone: '',
    bhk: initialBhk,
    services: initialServices,
    scheduledDate: initialDate,
    scheduledTime: initialTime,
    specialInstructions: '',
  })

  const [showSchedulePicker, setShowSchedulePicker] = useState(!isNow)

  const toast = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [showAppTip, setShowAppTip] = useState(true)

  const [showUnavailableMessage, setShowUnavailableMessage] = useState(false);

  const calculateServicePrice = (service, bhk) => {
    if (bhk <= 4) {
      return service.prices[bhk]
    }
    const extraBHKs = bhk - 4
    return service.prices[4] + (extraBHKs * service.basePrice4Plus)
  }

  const calculateTotal = () => {
    return formData.services.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId)
      return total + (service ? calculateServicePrice(service, formData.bhk) : 0)
    }, 0)
  }

  const toggleService = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const adjustBHK = (increment) => {
    setFormData(prev => ({
      ...prev,
      bhk: Math.max(1, prev.bhk + increment)
    }))
  }

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        address: initialAddress,
        services: initialServices,
        bhk: initialBhk,
        scheduledDate: initialDate,
        scheduledTime: initialTime,
      }))
    }
  }, [isOpen, initialAddress, initialServices, initialBhk, initialDate, initialTime])

  const generateTimeSlots = () => {
    const slots = []
    const now = new Date()
    const today = now.toLocaleDateString('en-CA') // Format: YYYY-MM-DD in local time
    const thirtyMinsFromNow = new Date(now.getTime() + 30 * 60000)
    
    // Create a date object for the selected date in local time
    const [year, month, day] = formData.scheduledDate.split('-')
    const selectedDateObj = new Date(year, month - 1, day)
    selectedDateObj.setHours(0, 0, 0, 0)
    
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        // Create a new date object for this time slot in local time
        const slotTime = new Date(selectedDateObj)
        slotTime.setHours(hour, minute, 0, 0)

        // Skip times in the past (including buffer) for today
        if (formData.scheduledDate === today && slotTime.getTime() <= thirtyMinsFromNow.getTime()) {
          continue
        }

        const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
        const period = hour < 12 ? 'AM' : 'PM'
        const time24 = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        const time12 = `${hour12}:${minute.toString().padStart(2, '0')} ${period}`
        slots.push({ value: time24, label: time12 })
      }
    }
    return slots
  }

  const timeSlots = generateTimeSlots()

  const getTomorrowDate = () => {
    const now = new Date()
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
    return tomorrow.toLocaleDateString('en-CA') // Format: YYYY-MM-DD in local time
  }

  useEffect(() => {
    if (isOpen) {
      // Ensure we're using the date as-is without timezone conversion
      setFormData(prev => ({
        ...prev,
        address: initialAddress,
        services: initialServices,
        bhk: initialBhk,
        scheduledDate: initialDate,
        scheduledTime: initialTime,
      }))
    }
  }, [isOpen, initialAddress, initialServices, initialBhk, initialDate, initialTime])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.address || !formData.name || !formData.phone || formData.services.length === 0) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields and select at least one service.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    // Validate phone number
    if (formData.phone.length !== 10) {
      toast({
        title: 'Invalid Phone Number',
        description: 'Please enter a valid 10-digit phone number',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Create request data matching exact Firebase structure
      const requestData = {
        address: formData.address,
        bhk: formData.bhk,
        createdAt: serverTimestamp(),
        isScheduled: showSchedulePicker,
        lastUpdated: serverTimestamp(),
        name: formData.name,
        phone: formData.phone,
        scheduledDate: formData.scheduledDate || "",
        scheduledTime: formData.scheduledTime || "",
        services: formData.services,
        specialInstructions: formData.specialInstructions || "",
        status: "pending",
        timestamp: serverTimestamp(),
        totalPrice: calculateTotal()
      }

      // Add to Firestore
      await addDoc(collection(db, 'serviceRequests'), requestData)
      
      // Reset form and close modal
      onClose()
      setFormData({
        address: '',
        name: '',
        phone: '',
        bhk: 1,
        services: [],
        scheduledDate: '',
        scheduledTime: '',
        specialInstructions: '',
      })
      setShowSchedulePicker(false)
      setShowAppTip(true)
      
      toast({
        title: 'Request Submitted',
        description: 'We will contact you shortly to confirm your booking.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      
    } catch (error) {
      console.error('Error submitting request:', error)
      toast({
        title: 'Error',
        description: 'Failed to submit request. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAppDownload = () => {
    window.open('https://apps.apple.com/us/app/swachh-saathi/id6738629953', '_blank')
  }

  useEffect(() => {
    // Initialize autocomplete when modal opens
    if (isLoaded && addressInputRef.current && isOpen) {
      // Clear any existing instance
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }

      // Create new instance
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        addressInputRef.current,
        { 
          componentRestrictions: { country: 'IN' },
          fields: ['formatted_address'],
          types: ['address']
        }
      );

      // Add listener
      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current.getPlace();
        if (place.formatted_address) {
          setFormData(prev => ({
            ...prev,
            address: place.formatted_address
          }));
        }
      });
    }

    // Cleanup function
    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
    };
  }, [isLoaded, isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Request Service</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={6} pb={6}>
            {showAppTip && (
              <Alert 
                status="info" 
                variant="solid" 
                borderRadius="full"
                bg="#0097B1"
                color="white"
              >
                <p
                  onClick={handleAppDownload}
                  style={{ 
                    cursor: "pointer",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                  onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                >
                  Download the app to save an address and view your past requests
                </p>
                <CloseButton 
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => setShowAppTip(false)}
                />
              </Alert>
            )}

            <FormControl isRequired>
              <FormLabel>Service Address</FormLabel>
              <Input
                ref={addressInputRef}
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="Enter your address"
                disabled={!isLoaded}
                bg="white"
                border="1px solid"
                borderColor="gray.300"
                _hover={{ borderColor: "gray.400" }}
                _focus={{ 
                  borderColor: "brand.400",
                  boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)"
                }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your name"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.500"
                  fontSize="sm"
                  h="full"
                >
                  +91
                </InputLeftElement>
                <Input
                  type="tel"
                  pl="12"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Enter your phone number"
                />
              </InputGroup>
            </FormControl>

            <SimpleGrid 
              columns={2} 
              spacing={4} 
              width="100%"
              alignItems="center"
            >
              {[
                ['sweeping', 'mopping'],
                ['dusting', 'utensils'],
                ['bathroom', 'bathroom-deep-clean'],
                ['stairs', 'balcony']
              ].map(row => (
                row.map(serviceId => {
                  const service = services.find(s => s.id === serviceId);
                  return (
                    <Box
                      key={service.id}
                      bg={formData.services.includes(service.id) ? '#EBF8FF' : 'gray.50'}
                      p={4}
                      borderRadius="md"
                      cursor="pointer"
                      onClick={() => toggleService(service.id)}
                      border="1px solid"
                      borderColor={formData.services.includes(service.id) ? '#90CDF4' : 'gray.200'}
                      _hover={{ borderColor: '#90CDF4' }}
                    >
                      <VStack spacing={1} align="center">
                        <Text fontSize="2xl">{service.icon}</Text>
                        <Text whiteSpace="pre-wrap" textAlign="center">{service.name}</Text>
                      </VStack>
                    </Box>
                  );
                })
              ))}
            </SimpleGrid>

            <Box width="100%" textAlign="center">
              <Text mb={2}>Number of BHK</Text>
              <HStack justify="center" spacing={4}>
                <IconButton
                  icon={<MinusIcon />}
                  onClick={() => adjustBHK(-1)}
                  isDisabled={formData.bhk <= 1}
                  size="sm"
                  rounded="full"
                />
                <Text fontSize="xl" fontWeight="bold">{formData.bhk} BHK</Text>
                <IconButton
                  icon={<AddIcon />}
                  onClick={() => adjustBHK(1)}
                  size="sm"
                  rounded="full"
                />
              </HStack>
            </Box>

            <Box width="100%" textAlign="center" pt={4}>
              <Text color="brand.500" fontSize="lg" fontWeight="bold">
                Total Price: ₹{calculateTotal()}
              </Text>
              <Text fontSize="sm" color="gray.500">
                You won't be charged until after your service is complete
              </Text>
            </Box>

            <FormControl>
              <FormLabel>Special Instructions (Optional)</FormLabel>
              <Textarea
                value={formData.specialInstructions}
                onChange={(e) => setFormData({
                  ...formData,
                  specialInstructions: e.target.value
                })}
                placeholder="Add any special instructions for the service provider including society or building access information"
                size="sm"
                resize="vertical"
                minH="100px"
              />
            </FormControl>

            <Button 
              onClick={handleSubmit}
              colorScheme="brand" 
              width="full"
              isDisabled={!formData.address || !formData.name || !formData.phone || formData.services.length === 0 || (showSchedulePicker && (!formData.scheduledDate || !formData.scheduledTime)) || isSubmitting}
              isLoading={isSubmitting}
            >
              {showSchedulePicker ? 'Confirm Request' : 'Request Now'}
            </Button>

            <VStack width="full" spacing={4}>
              <Button
                variant="outline"
                colorScheme="brand"
                width="full"
                onClick={() => setShowSchedulePicker(!showSchedulePicker)}
              >
                {showSchedulePicker ? 'Request Now Instead' : 'Schedule Ahead'}
              </Button>

              <Collapse in={showSchedulePicker} style={{ width: '100%' }}>
                <VStack spacing={4} width="full" p={4} bg="gray.50" borderRadius="md">
                  <FormControl isRequired={showSchedulePicker}>
                    <FormLabel>Select Date</FormLabel>
                    <Input
                      type="date"
                      value={formData.scheduledDate}
                      min={getTomorrowDate()}
                      onChange={(e) => setFormData({
                        ...formData,
                        scheduledDate: e.target.value
                      })}
                    />
                  </FormControl>

                  <FormControl isRequired={showSchedulePicker}>
                    <FormLabel>Select Time</FormLabel>
                    <Select
                      value={formData.scheduledTime}
                      onChange={(e) => setFormData({
                        ...formData,
                        scheduledTime: e.target.value
                      })}
                      placeholder="Select time slot"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </VStack>
              </Collapse>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ServiceForm 