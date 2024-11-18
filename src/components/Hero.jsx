import { Box, Container, Heading, Text, VStack, Input, InputGroup, InputLeftElement, InputRightElement, Button, Icon } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { BsPin } from 'react-icons/bs'
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import ServiceForm from './ServiceForm'

function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [address, setAddress] = useState('')

  const handleAddressSubmit = () => {
    if (address.trim()) {
      onOpen()
    }
  }

  return (
    <Box 
      minHeight="100vh"
      pt={{ base: "6", md: "12" }}
      pb={{ base: "12", md: "16" }}
      position="relative"
    >
      <Container 
        maxW="container.xl" 
        height="100%"
        px={{ base: 4, md: 8 }}
      >
        <VStack 
          spacing={6}
          align="center"
          width="100%"
        >
          <Heading 
            as="h1" 
            color="white"
            textAlign="center"
            fontSize={{ base: "28px", sm: "36px", md: "48px", lg: "64px" }}
            fontStyle="normal"
            fontWeight={700}
            lineHeight={{ base: "110%", md: "90%" }}
            maxWidth="100%"
          >
            24/7 on-demand maid services
          </Heading>
          <Text 
            color="white"
            textAlign="center"
            fontSize={{ base: "20px", sm: "28px", md: "36px", lg: "48px" }}
            fontStyle="normal"
            fontWeight={700}
            lineHeight={{ base: "110%", md: "90%" }}
            mt={{ base: 2, md: 4 }}
          >
            in 30 minutes or less
          </Text>

          {/* Address Input Section - Updated */}
          <Box 
            width={{ base: "100%", sm: "400px", md: "500px" }}
            position="relative"
          >
            <InputGroup 
              size="lg"
              position="relative"
              zIndex="1"
            >
              <InputLeftElement 
                pointerEvents="none" 
                height="56px"
                zIndex="2"
              >
                <Icon as={BsPin} color="gray.400" boxSize={5} />
              </InputLeftElement>
              <Input
                placeholder="Enter service address"
                bg="white"
                border="1px solid"
                borderColor="gray.300"
                _hover={{ borderColor: "gray.400" }}
                _focus={{ 
                  borderColor: "brand.400",
                  boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)",
                  position: "relative"
                }}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                height="56px"
                fontSize="md"
                pr="4rem"
                borderRadius="full"
                position="relative"
              />
              <InputRightElement 
                width="4rem" 
                height="56px"
                zIndex="2"
              >
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleAddressSubmit}
                  bg="brand.400"
                  _hover={{ bg: "brand.500" }}
                  borderRadius="full"
                  width="32px"
                  height="32px"
                  minW="32px"
                  p={0}
                >
                  <ArrowForwardIcon color="white" boxSize={4} />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          {/* Download App Button */}
          <Button
            variant="outline"
            width="full"
            mt={3}
            height="36px"
            borderColor="white"
            color="white"
            _hover={{ bg: "whiteAlpha.200" }}
            fontSize="sm"
            borderRadius="full"
          >
            Download the app for saved address
          </Button>
        </VStack>
      </Container>

      <ServiceForm 
        isOpen={isOpen} 
        onClose={onClose} 
        initialAddress={address}
      />
    </Box>
  )
}

export default Hero 