import { Box, Container, VStack, Heading, Button, Icon, Text, HStack } from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { BsWhatsapp } from 'react-icons/bs'

export default function Support() {
  return (
    <Box py={12}>
      <Container maxW="container.md">
        <VStack spacing={8} align="center">
          <Heading as="h1" size="2xl">Contact Support</Heading>
          
          <Text fontSize="lg" textAlign="center" color="gray.600">
            Need help? Our support team is available 24/7. Choose your preferred way to reach us:
          </Text>

          <VStack spacing={4} width="100%" maxW="400px">
            <Button
              as="a"
              href="mailto:help@swachhsaathi.com"
              width="100%"
              height="16"
              fontSize="lg"
              leftIcon={<EmailIcon boxSize={5} />}
              colorScheme="brand"
              variant="outline"
            >
              <VStack spacing={0} align="start">
                <Text>Email Us</Text>
                <Text fontSize="sm" fontWeight="normal">help@swachhsaathi.com</Text>
              </VStack>
            </Button>

            <Button
              as="a"
              href="tel:+917428421373"
              width="100%"
              height="16"
              fontSize="lg"
              leftIcon={<PhoneIcon boxSize={5} />}
              colorScheme="brand"
              variant="outline"
            >
              <VStack spacing={0} align="start">
                <Text>Call Us</Text>
                <Text fontSize="sm" fontWeight="normal">+91 74284 21373</Text>
              </VStack>
            </Button>

            <Button
              as="a"
              href="https://wa.me/917428421373"
              target="_blank"
              rel="noopener noreferrer"
              width="100%"
              height="16"
              fontSize="lg"
              leftIcon={<Icon as={BsWhatsapp} boxSize={5} />}
              colorScheme="brand"
              variant="outline"
            >
              <VStack spacing={0} align="start">
                <Text>WhatsApp</Text>
                <Text fontSize="sm" fontWeight="normal">+91 74284 21373</Text>
              </VStack>
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
} 