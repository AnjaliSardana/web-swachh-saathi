import { 
  Box, 
  Container, 
  VStack, 
  Text, 
  Button,
  SimpleGrid,
  HStack,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import ServiceForm from './ServiceForm'

function PricingTable() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedServices, setSelectedServices] = useState([])
  const [bhk, setBhk] = useState(1)
  const [showPricing, setShowPricing] = useState(false)

  const services = [
    { id: 'sweeping', name: 'Sweeping', icon: '🧹', prices: { 1: 60, 2: 80, 3: 90, 4: 110 }, basePrice4Plus: 20 },
    { id: 'mopping', name: 'Mopping', icon: '🪣', prices: { 1: 70, 2: 90, 3: 100, 4: 120 }, basePrice4Plus: 20 },
    { id: 'dusting', name: 'Dusting', icon: '✨', prices: { 1: 60, 2: 80, 3: 90, 4: 110 }, basePrice4Plus: 20 },
    { id: 'utensils', name: 'Utensils', icon: '🍽️', prices: { 1: 60, 2: 80, 3: 90, 4: 100 }, basePrice4Plus: 10 },
    { id: 'bathroom', name: 'Bathroom', icon: '🚽', prices: { 1: 130, 2: 210, 3: 280, 4: 350 }, basePrice4Plus: 70 }
  ]

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const adjustBHK = (increment) => {
    setBhk(prev => Math.max(1, prev + increment))
  }

  const calculateServicePrice = (service, currentBhk) => {
    if (currentBhk <= 4) {
      return service.prices[currentBhk]
    }
    const extraBHKs = currentBhk - 4
    return service.prices[4] + (extraBHKs * service.basePrice4Plus)
  }

  const calculateTotal = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId)
      return total + calculateServicePrice(service, bhk)
    }, 0)
  }

  return (
    <>
      <Box py={{ base: 6, md: 10 }} bg="gray.50">
        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          <VStack spacing={8}>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              textAlign="center"
            >
              Transparent Pricing
            </Text>
            <Text textAlign="center" color="gray.600">
              No long term commitments. Only pay for what you need.
            </Text>

            {/* Service Selection */}
            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4} width="100%">
              {services.map((service) => (
                <Box
                  key={service.id}
                  bg={selectedServices.includes(service.id) ? 'brand.50' : 'white'}
                  p={4}
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => toggleService(service.id)}
                  border="1px solid"
                  borderColor={selectedServices.includes(service.id) ? 'brand.200' : 'gray.200'}
                  _hover={{ borderColor: 'brand.200' }}
                >
                  <VStack spacing={1}>
                    <Text fontSize="2xl">{service.icon}</Text>
                    <Text>{service.name}</Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>

            {/* BHK Selection */}
            <Box width="100%" textAlign="center">
              <Text mb={2}>Number of BHK</Text>
              <HStack justify="center" spacing={4}>
                <IconButton
                  icon={<MinusIcon />}
                  onClick={() => adjustBHK(-1)}
                  isDisabled={bhk <= 1}
                  size="sm"
                  rounded="full"
                />
                <Text fontSize="xl" fontWeight="bold">{bhk} BHK</Text>
                <IconButton
                  icon={<AddIcon />}
                  onClick={() => adjustBHK(1)}
                  size="sm"
                  rounded="full"
                />
              </HStack>
            </Box>

            {/* See Price Button */}
            <Button
              colorScheme="brand"
              size="lg"
              width={{ base: "full", md: "auto" }}
              onClick={() => setShowPricing(true)}
              isDisabled={selectedServices.length === 0}
            >
              See Price
            </Button>

            {/* Display Price */}
            {showPricing && selectedServices.length > 0 && (
              <VStack spacing={2} width="100%" bg="white" p={6} borderRadius="md" border="1px solid" borderColor="gray.200">
                <Text fontSize="xl" fontWeight="bold">
                  Total Price: ₹{calculateTotal()}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Price breakdown:
                </Text>
                {selectedServices.map(serviceId => {
                  const service = services.find(s => s.id === serviceId)
                  return (
                    <Text key={serviceId} fontSize="sm">
                      {service.name}: ₹{calculateServicePrice(service, bhk)}
                    </Text>
                  )
                })}
              </VStack>
            )}
                {/* Add Request Service Button */}
                <Button
                  colorScheme="brand"
                  size="lg"
                  width={{ base: "full", md: "auto" }}
                  onClick={onOpen}
                >
                  Request a Service
                </Button>
          </VStack>
        </Container>
      </Box>

      <ServiceForm 
        isOpen={isOpen} 
        onClose={onClose}
        initialAddress=""
      />
    </>
  )
}

export default PricingTable 