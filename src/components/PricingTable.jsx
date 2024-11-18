import { Box, Container, Heading, Table, Thead, Tbody, Tr, Th, Td, Text, VStack, SimpleGrid, Image, HStack } from '@chakra-ui/react'

function PricingTable() {
  const services = [
    { name: 'Sweeping', icon: '🧹' },
    { name: 'Mopping', icon: '🪣' },
    { name: 'Dusting', icon: '🪮' },
    { name: 'Utensils', icon: '🍽️' },
    { name: 'Bathroom', icon: '🚽' },
  ]

  const pricing = [
    { service: 'Mopping', bhk1: '₹70', bhk2: '₹90', bhk3: '₹100', bhk4: '₹20 +' },
    { service: 'Sweeping', bhk1: '₹60', bhk2: '₹80', bhk3: '₹90', bhk4: '₹20 +' },
    { service: 'Dusting', bhk1: '₹60', bhk2: '₹80', bhk3: '₹90', bhk4: '₹20 +' },
    { service: 'Utensils', bhk1: '₹60', bhk2: '₹80', bhk3: '₹90', bhk4: '₹10 +' },
    { service: 'Bathroom', bhk1: '₹130', bhk2: '₹210', bhk3: '₹280', bhk4: '₹70 +' },
  ]

  return (
    <Box py={{ base: 6, md: 10 }} bg="gray.50">
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <VStack spacing={{ base: 6, md: 8 }}>
          {/* HOW IT WORKS heading with question mark */}
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={{ base: 4, md: 6 }}
          >
            <HStack 
              spacing={{ base: 1, md: 2 }}
              align="flex-end"
              width="fit-content"
            >
              <Text
                color="#000"
                textAlign="center"
                fontFamily="Istok Web"
                fontSize={{ base: "32px", sm: "40px", md: "60px", lg: "80px" }}
                fontStyle="normal"
                fontWeight={700}
                lineHeight="90%"
                whiteSpace="nowrap"
              >
                HOW IT WORKS
              </Text>
              <Box
                width={{ base: "30px", md: "56.488px" }}
                height={{ base: "36px", md: "67.394px" }}
                transform="rotate(10.146deg)"
                flexShrink={0}
                display="inline-flex"
                mb={{ base: "2px", md: "4px" }}
              >
                <Image
                  src="/question mark.png"
                  alt="Question Mark"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </Box>
            </HStack>
          </Box>
          
          {/* Services Icons */}
          <Box width="100%">
            <Heading 
              as="h3" 
              size={{ base: "md", md: "lg" }} 
              mb={{ base: 4, md: 6 }} 
              color="brand.600"
              textAlign="center"
            >
              1. Choose Your Tasks
            </Heading>
            <SimpleGrid 
              columns={{ base: 3, md: 5 }} 
              spacing={{ base: 4, md: 8 }}
              width="100%"
              justifyItems="center"
            >
              {services.map((service) => (
                <VStack key={service.name} spacing={2}>
                  <Text fontSize={{ base: "2xl", md: "3xl" }}>{service.icon}</Text>
                  <Text fontSize={{ base: "sm", md: "md" }}>{service.name}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Box>

          {/* Pricing Table */}
          <Box width="100%">
            <Heading 
              as="h3" 
              size={{ base: "md", md: "lg" }} 
              mb={4} 
              color="brand.600"
              textAlign="center"
            >
              2. Tell Us How Many BHKs?
            </Heading>
            <Text 
              mb={4} 
              color="gray.600" 
              fontSize={{ base: "sm", md: "md" }}
              textAlign="center"
            >
              (Transparent pricing and no long term commitments. Only pay for what you need.)
            </Text>
            <Box overflowX="auto" mx="-16px" px="16px">
              <Table variant="simple" bg="white" boxShadow="sm" size={{ base: "sm", md: "md" }}>
                <Thead bg="brand.600">
                  <Tr>
                    <Th color="white" whiteSpace="nowrap">Task</Th>
                    <Th color="white" whiteSpace="nowrap">1 BHK</Th>
                    <Th color="white" whiteSpace="nowrap">2 BHK</Th>
                    <Th color="white" whiteSpace="nowrap">3 BHK</Th>
                    <Th color="white" whiteSpace="nowrap">4+ ₹/BHK</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pricing.map((row) => (
                    <Tr key={row.service}>
                      <Td whiteSpace="nowrap">{row.service}</Td>
                      <Td>{row.bhk1}</Td>
                      <Td>{row.bhk2}</Td>
                      <Td>{row.bhk3}</Td>
                      <Td>{row.bhk4}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default PricingTable 