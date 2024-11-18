import { MapPin, ArrowRight, BrushIcon as Broom, Droplet, Wind, Utensils, ShowerHeadIcon as Shower } from 'lucide-react'
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
  Image,
  HStack,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import ServiceForm from '../components/ServiceForm'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import PricingTable from '../components/PricingTable'

export default function Component() {
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [isHiringModalOpen, setIsHiringModalOpen] = useState(false)
  
  const handleCallbackRequest = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (phone.length !== 10) {
      toast({
        title: 'Invalid Phone Number',
        description: 'Please enter a valid 10-digit phone number',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const callbackData = {
        phone: phone,
        status: 'pending',
        timestamp: new Date(),
      };

      // Add to 'callbackRequests' collection
      const docRef = await addDoc(collection(db, 'callbackRequests'), callbackData);
      console.log('Callback request added with ID:', docRef.id);

      // Reset form and show success message
      setPhone('');
      toast({
        title: 'Request Received',
        description: 'We will call you back shortly!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

    } catch (error) {
      console.error('Error submitting callback request:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit request. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
  
  return (
    <Box minH="100vh" display="flex" flexDir="column">
      <Box as="main" flex="1">
        {/* Hero Section */}
        <Box 
          bgGradient="linear(to-b, gray.100, white)" 
          pt="24" 
          pb="12"
        >
          <Container px={{ base: 4, md: 6 }}>
            <VStack spacing="4" align="center" textAlign="center">
              <Heading
                size={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="bold"
                letterSpacing="tight"
              >
                24/7 on-demand maid services
              </Heading>
              <Text 
                maxW="700px" 
                color="gray.600"
                fontSize={{ base: "md", md: "xl" }}
              >
                Professional cleaning services at your doorstep in 30 minutes or less
              </Text>
              <VStack w="full" maxW="sm" spacing="2">
                <Box position="relative" w="full">
                  <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none" h="12">
                      <Icon as={MapPin} color="gray.500" boxSize="5" />
                    </InputLeftElement>
                    <Input 
                      pl="12"
                      h="12"
                      bg="white"
                      border="1px solid"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                      _focus={{ 
                        borderColor: "brand.400",
                        boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)"
                      }}
                      placeholder="Enter your service address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </InputGroup>
                </Box>
                <Button 
                  w="full" 
                  h="12"
                  colorScheme="brand"
                  rightIcon={<Icon as={ArrowRight} boxSize="4" />}
                  onClick={() => {
                    if (address.trim()) {
                      onOpen();
                    }
                  }}
                >
                  Get Started
                </Button>
                <Button w="full" variant="outline" h="12">
                  Download our app
                </Button>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* Features Section */}
        <Box as="section" py="12">
          <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
            <VStack maxW="800px" mx="auto" spacing="4">
              <Heading 
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold" 
                textAlign="center"
              >
                House help is sick? Friends coming over?
              </Heading>
              <Text 
                textAlign="center" 
                color="gray.600" 
                fontSize="xl"
              >
                NO STRESS, we've got you covered
              </Text>
              
              {/* Added Image */}
              <Box 
                width={{ base: "100%", md: "80%", lg: "60%" }}
                mx="auto"
                mt={{ base: 4, md: 8 }}
              >
                <Image
                  src="three guys image.png"
                  alt="Three team members"
                  width="100%"
                  height="auto"
                  objectFit="contain"
                />
              </Box>

              {/* How it works section */}
              <VStack spacing="8" mt="12" w="full" mb="0">
                <Heading 
                  fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  fontWeight="bold"
                  color="black"
                  mb="4"
                >
                  How it works:
                </Heading>
                <VStack spacing="8" w="full">
                  <HStack spacing="4" alignItems="center">
                    <Box 
                      display="flex" 
                      alignItems="center" 
                      justifyContent="center"
                      minWidth="48px"
                    >
                      <Image
                        src="1 icon.svg"
                        alt="Step 1"
                        width="48px"
                        height="48px"
                        objectFit="contain"
                        flexShrink={0}
                      />
                    </Box>
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="semibold"
                      color="brand.500"
                      lineHeight="1.2"
                    >
                      Select tasks
                    </Text>
                  </HStack>
                  
                  {/* Service icons grid */}
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8" w="full">
                    {[
                      { icon: Broom, label: "Sweeping" },
                      { icon: Droplet, label: "Mopping" },
                      { icon: Wind, label: "Dusting" },
                      { icon: Utensils, label: "Utensils" },
                      { icon: Shower, label: "Bathroom" },
                    ].map((service, index) => (
                      <VStack 
                        key={index} 
                        p="4" 
                        borderRadius="lg" 
                        border="1px"
                        borderColor="gray.200"
                        spacing="2"
                      >
                        <Icon as={service.icon} color="brand.500" boxSize="8" />
                        <Text fontWeight="medium">{service.label}</Text>
                      </VStack>
                    ))}
                  </SimpleGrid>

                  <HStack spacing="4" alignItems="center">
                    <Box 
                      display="flex" 
                      alignItems="center" 
                      justifyContent="center"
                      minWidth="48px"
                    >
                      <Image
                        src="2 icon.svg"
                        alt="Step 2"
                        width="48px"
                        height="48px"
                        objectFit="contain"
                        flexShrink={0}
                      />
                    </Box>
                    <Text
                      fontSize={{ base: "2xl", md: "3xl" }}
                      fontWeight="semibold"
                      color="brand.500"
                      lineHeight="1.2"
                    >
                      Tell us how many BHK
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* Pricing Section */}
        <PricingTable />

        {/* Safety Section */}
        <Box borderTop="1px" borderColor="gray.200" bg="gray.50">
          <Container 
            maxW="container.xl" 
            px={{ base: 4, md: 6 }} 
            py="12"
          >
            <VStack maxW="800px" mx="auto" spacing="4">
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
              >
                All our maids go through background checks, have police verification, and are personally
                vetted by our team. If you experience any incident with any of our maids, please call us as soon as possible. We will take action immediately to resolve the issue.
              </Text>
              <Button 
                variant="outline" 
                mt="4"
                onClick={() => setIsHiringModalOpen(true)}
              >
                Learn about our hiring process
              </Button>
            </VStack>
          </Container>
        </Box>

        {/* Hiring Process Modal */}
        <Modal isOpen={isHiringModalOpen} onClose={() => setIsHiringModalOpen(false)}>
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

        {/* Questions Section */}
        <Box bg="white" py="12">
          <Container 
            maxW="container.xl" 
            px={{ base: 4, md: 6 }} 
          >
            <VStack maxW="800px" mx="auto" spacing="6">
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
                  <VStack spacing="4">
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
                    >
                      Request Callback
                    </Button>
                  </VStack>
                </form>
              </Box>
            </VStack>
          </Container>
        </Box>
      </Box>
      <ServiceForm 
        isOpen={isOpen} 
        onClose={onClose} 
        initialAddress={address}
      />
      {/* Footer */}
      <Box 
        as="footer" 
        borderTop="1px" 
        borderColor="gray.200" 
        bg="white" 
        py="6"
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
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}