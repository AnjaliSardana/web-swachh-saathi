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

function PricingTable({ selectedServices, bhk, showPricing, services }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
    <Box py={{ base: 2, md: 4 }} bg="white">
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <VStack spacing={8}>
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
              <Button
                colorScheme="brand"
                size="lg"
                width={{ base: "full", md: "auto" }}
                onClick={onOpen}
              >
                Request a Service
              </Button>
            </VStack>
          )}
        </VStack>
      </Container>

      <ServiceForm 
        isOpen={isOpen} 
        onClose={onClose}
        initialAddress=""
      />
    </Box>
  )
}

export default PricingTable 