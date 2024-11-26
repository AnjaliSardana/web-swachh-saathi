import { Box, Container, HStack, Image, Button, IconButton, Text, Link, Icon } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import ServiceForm from './ServiceForm'
import { BsWhatsapp } from 'react-icons/bs'
import { Link as RouterLink } from 'react-router-dom'

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box 
      as="nav" 
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      zIndex="sticky"
    >
      <Container maxW="container.xl" py="2">
        <HStack justify="space-between" align="center">
          {/* Left side - Brand name */}
          <Text
            as={RouterLink}
            to="/"
            fontSize="xl"
            fontWeight="bold"
            color="black"
            _hover={{ textDecoration: 'none' }}
          >
            Swachh Saathi
          </Text>

          {/* Right side - Contact icons */}
          <HStack spacing={4} align="center">
          <Button
              size="sm"
              colorScheme="brand"
              onClick={onOpen}
            >
              Request Services
            </Button>
            <Link 
              href="tel:+917428421373" 
              color="gray.800"
              _hover={{ color: "brand.500" }}
              display="flex"
              alignItems="center"
              height="24px"
            >
              <PhoneIcon boxSize={5} />
            </Link>
            
            <Link 
              href="https://wa.me/917428421373" 
              isExternal
              color="gray.800"
              _hover={{ color: "brand.500" }}
              display="flex"
              alignItems="center"
              height="24px"
            >
              <Icon as={BsWhatsapp} boxSize={5} />
            </Link>
          </HStack>
        </HStack>
      </Container>
      <ServiceForm isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Navbar 