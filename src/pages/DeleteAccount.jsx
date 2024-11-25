import { useState } from 'react'
import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text, 
  Input, 
  Button, 
  useToast, 
  InputGroup, 
  InputLeftElement,
  Link
} from '@chakra-ui/react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

function DeleteAccount() {
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e) => {
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

    setIsSubmitting(true)

    try {
      const deleteRequest = {
        phone: phone,
        status: 'pending',
        type: 'account_deletion',
        timestamp: new Date(),
      }

      await addDoc(collection(db, 'deletionRequests'), deleteRequest)

      setPhone('')
      toast({
        title: 'Request Received',
        description: 'We will process your account deletion request shortly.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

    } catch (error) {
      console.error('Error submitting deletion request:', error)
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

  return (
    <Box py={12}>
      <Container maxW="container.md">
        <VStack spacing={8} align="start">
          <Heading as="h1" size="2xl">Delete Account</Heading>
          
          <Text>
            To delete your account, please submit your phone number associated with your Swachh Saathi 
            mobile appaccount below or email{' '}
            <Link href="mailto:help@swachhsaathi.com" color="brand.500">
              help@swachhsaathi.com
            </Link>
            {' '}with your request for account deletion. We will respond promptly. User data including name, phone number, and address will be deleted from our database.
          </Text>

          <Box width={{ base: "100%", sm: "400px" }}>
            <form onSubmit={handleSubmit}>
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
                      borderColor: "brand.400",
                      boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)"
                    }}
                  />
                </InputGroup>
                <Button
                  type="submit"
                  colorScheme="brand"
                  width="full"
                  height="12"
                  fontSize="lg"
                  isLoading={isSubmitting}
                >
                  Submit Request
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default DeleteAccount 