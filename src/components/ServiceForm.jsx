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
import { useState, useEffect } from 'react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const services = [
  { 
    id: 'sweeping',
    name: "Sweeping", 
    icon: "🧹",
    basePrice4Plus: 20,
    prices: {
      1: 60,
      2: 80,
      3: 90,
      4: 110
    }
  },
  { 
    id: 'mopping',
    name: "Mopping", 
    icon: "🧽",
    basePrice4Plus: 20,
    prices: {
      1: 70,
      2: 90,
      3: 100,
      4: 120
    }
  },
  { 
    id: 'dusting',
    name: "Dusting", 
    icon: "✨",
    basePrice4Plus: 20,
    prices: {
      1: 60,
      2: 80,
      3: 90,
      4: 110
    }
  },
  { 
    id: 'utensils',
    name: "Utensils", 
    icon: "🍽️",
    basePrice4Plus: 10,
    prices: {
      1: 60,
      2: 80,
      3: 90,
      4: 100
    }
  },
  { 
    id: 'bathroom',
    name: "Bathroom", 
    icon: "🚿",
    basePrice4Plus: 70,
    prices: {
      1: 130,
      2: 210,
      3: 280,
      4: 350
    }
  }
]

function ServiceForm({ isOpen, onClose, initialAddress = '' }) {
  const [formData, setFormData] = useState({
    address: '',
    name: '',
    phone: '',
    bhk: 1,
    services: [],
    scheduledDate: '',
    scheduledTime: '',
    specialInstructions: '',
  })

  const [showSchedulePicker, setShowSchedulePicker] = useState(false)

  const toast = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [showAppTip, setShowAppTip] = useState(true)

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
    setFormData(prev => ({
      ...prev,
      address: initialAddress
    }))
  }, [initialAddress])

  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
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
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    
    try {
      console.log('Submitting form data:', formData); // Debug log
      
      const requestData = {
        ...formData,
        isScheduled: showSchedulePicker,
        status: 'pending',
        totalPrice: calculateTotal(),
        timestamp: new Date(),
        createdAt: new Date(),
        lastUpdated: new Date(),
      }

      console.log('Prepared request data:', requestData); // Debug log
      
      const docRef = await addDoc(collection(db, 'serviceRequests'), requestData);
      console.log('Successfully added document with ID:', docRef.id);
      
      // Close the modal and reset form
      onClose();
      setFormData({
        address: '',
        name: '',
        phone: '',
        bhk: 1,
        services: [],
        scheduledDate: '',
        scheduledTime: '',
        specialInstructions: '',
      });
      setShowSchedulePicker(false);
      
      toast({
        title: 'Request Submitted',
        description: 'We will contact you shortly to confirm your booking.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
    } catch (error) {
      console.error('Detailed error:', error); // Detailed error logging
      toast({
        title: 'Error',
        description: `Submission failed: ${error.message}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Request Service</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} pb={6}>
              {showAppTip && (
                <Alert 
                  status="info" 
                  variant="solid" 
                  borderRadius="full"
                  bg="#0097B1"
                  color="white"
                >
                  Download the app to save an address and view your past requests
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
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Enter your address"
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
                {services.filter(service => service.id !== 'bathroom').map((service) => (
                  <Box
                    key={service.id}
                    bg={formData.services.includes(service.id) ? 'brand.50' : 'gray.50'}
                    p={4}
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => toggleService(service.id)}
                    border="1px solid"
                    borderColor={formData.services.includes(service.id) ? 'brand.200' : 'gray.200'}
                    _hover={{ borderColor: 'brand.200' }}
                  >
                    <VStack spacing={1} align="center">
                      <Text fontSize="2xl">{service.icon}</Text>
                      <Text>{service.name}</Text>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>

              <Box 
                width="100%" 
                display="flex" 
                justifyContent="center"
                mt={-2}
              >
                <Box
                  width="calc(50% - 8px)"
                  bg={formData.services.includes('bathroom') ? 'brand.50' : 'gray.50'}
                  p={4}
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => toggleService('bathroom')}
                  border="1px solid"
                  borderColor={formData.services.includes('bathroom') ? 'brand.200' : 'gray.200'}
                  _hover={{ borderColor: 'brand.200' }}
                >
                  <VStack spacing={1} align="center">
                    <Text fontSize="2xl">🚿</Text>
                    <Text>Bathroom</Text>
                  </VStack>
                </Box>
              </Box>

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
                type="submit" 
                colorScheme="brand" 
                width="full"
                isDisabled={showSchedulePicker || isSubmitting}
                isLoading={isSubmitting}
              >
                Request Now
              </Button>

              <VStack width="full" spacing={4}>
                <Button
                  variant="outline"
                  colorScheme="brand"
                  width="full"
                  onClick={() => setShowSchedulePicker(!showSchedulePicker)}
                >
                  Schedule Ahead
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

                    <Button 
                      type="submit" 
                      colorScheme="brand" 
                      width="full"
                      isDisabled={!formData.scheduledDate || !formData.scheduledTime || isSubmitting}
                      isLoading={isSubmitting}
                    >
                      Confirm Request
                    </Button>
                  </VStack>
                </Collapse>
              </VStack>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ServiceForm 