import { Box, Container, Heading, Text, VStack, UnorderedList, ListItem, Link } from '@chakra-ui/react'
import { useEffect } from 'react'

function PrivacyPolicy() {
  // Add useEffect to scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box py={12}>
      <Container maxW="container.md">
        <VStack spacing={8} align="start">
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h1" size="2xl">Privacy Policy</Heading>
            <Text color="gray.600">Last updated: 9th November, 2024</Text>
          </VStack>

          <Text>
            Welcome to Swachh Saathi's privacy policy ("Privacy Policy" or "Policy").
          </Text>

          <Text>
            Swachh Saathi Private Limited and its affiliates (collectively, "Swachh Saathi", "we" or "us") 
            are engaged in the business of providing web-based solutions to facilitate connections between 
            customers that seek specific services and service professionals that offer these services. This 
            Policy outlines our practices in relation to the collection, storage, usage, processing, and 
            disclosure of personal data that you have consented to share with us when you access, use, or 
            otherwise interact with our website available at https://www.swachhsaathi.com/ or mobile 
            application 'Swachh Saathi' (collectively, "Platform") or avail products or services that 
            Swachh Saathi offers you on or through the Platform (collectively, the "Services").
          </Text>

          <Text>
            At Swachh Saathi, we are committed to protecting your personal data and respecting your privacy. 
            In order to provide you with access to the Services or the Professional Services, we have to 
            collect and otherwise process certain data about you. This Policy explains how we process and 
            use personal data about you.
          </Text>

          <Text>
            Please note that unless specifically defined in this Policy, capitalised terms shall have the 
            same meaning ascribed to them in our Terms and Conditions, available at 
            https://www.swachhsaathi.com/terms ("Terms"). Please read this Policy in consonance with the Terms.
          </Text>

          <Text>
            By using the Services, you confirm that you have read and agree to be bound by this Policy and 
            consent to the processing activities described under this Policy.
          </Text>

          <Text>
            Please refer to Section 1 to understand how the terms of this Policy apply to you.
          </Text>

          {/* Background Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">1. Background and Key Information</Heading>
            
            <VStack spacing={3} align="start">
              <Heading as="h3" size="md">(a) How this Policy applies:</Heading>
              <Text>
                This Policy applies to individuals who access or use the Services or otherwise avail the 
                Professional Services. For the avoidance of doubt, references to "you" across this Policy 
                are to an end user that uses the Platform.
              </Text>
              <Text>
                By using the Platform, you consent to the collection, storage, usage, and disclosure of 
                your personal data, as described in and collected by us in accordance with this Policy.
              </Text>
            </VStack>

            <VStack spacing={3} align="start">
              <Heading as="h3" size="md">(b) Review and Updates:</Heading>
              <Text>
                We regularly review and update our Privacy Policy, and we request you to regularly review 
                this Policy. It is important that the personal data we hold about you is accurate and 
                current. Please let us know if your personal data changes during your relationship with us.
              </Text>
            </VStack>

            <VStack spacing={3} align="start">
              <Heading as="h3" size="md">(c) Third-Party Services:</Heading>
              <Text>
                The Platform may include links to third-party websites, plug-ins, services, and applications 
                ("Third-Party Services"). Clicking on those links or enabling those connections may allow 
                third parties to collect or share data about you. We neither control nor endorse these 
                Third-Party Services and are not responsible for their privacy statements. When you leave 
                the Platform or access third-party links through the Platform, we encourage you to read 
                the privacy policy of such third-party service providers.
              </Text>
            </VStack>
          </VStack>

          {/* Personal Data Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">2. Personal Data That We Collect</Heading>
            <Text>
              (a) We collect different types of personal data about you. This includes, but is not limited to:
            </Text>
            
            <UnorderedList spacing={2} pl={4}>
              <ListItem>
                <Text as="span" fontWeight="semibold">Contact Data:</Text> such as your mailing or home 
                address, location, email addresses, and mobile numbers.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="semibold">Identity and Profile Data:</Text> such as your name, 
                username or similar identifiers, photographs, and gender.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="semibold">Marketing and Communications Data:</Text> such as your 
                address, email address, information posted in service requests, offers, wants, feedback, 
                comments, pictures and discussions in our blog and chat boxes, responses to user surveys 
                and polls, your preferences in receiving marketing communications from us and our third 
                parties, and your communication preferences. We also collect your chat and call records 
                when you communicate with service professionals through the Platform.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="semibold">Technical Data:</Text> which includes your IP address, 
                browser type, internet service provider, details of operating system, access time, page views, 
                device ID, device type, frequency of visiting our website and use of the Platform, website 
                and mobile application activity, clicks, date and time stamps, location data, and other 
                technology on the devices that you use to access the Platform.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="semibold">Transaction Data:</Text> such as details of the 
                Services or Professional Services you have availed, a limited portion of your credit or 
                debit card details for tracking transactions that are provided to us by payment processors, 
                and UPI IDs for processing payments.
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="semibold">Usage Data:</Text> which includes information about 
                how you use the Services and Professional Services, your activity on the Platform, booking 
                history, user taps and clicks, user interests, time spent on the Platform, details about 
                user journey on the mobile application, and page views.
              </ListItem>
            </UnorderedList>

            <Text>
              (b) We also collect, use, and share aggregated data such as statistical or demographic data 
              for any purpose. Aggregated data could be derived from your personal data but is not 
              considered personal data under law as it does not directly or indirectly reveal your identity. 
              However, if we combine or connect aggregated data with your personal data so that it can 
              directly or indirectly identify you, we treat the combined data as personal data which will 
              be used in accordance with this Policy.
            </Text>

            <VStack spacing={3} align="start">
              <Heading as="h3" size="md">(c) What happens if I refuse to provide my personal data?</Heading>
              <Text>
                Where we need to collect personal data by law, or under the terms of a contract (such as 
                the Terms), and you fail to provide that data when requested, we may not be able to perform 
                the contract (for example, to provide you with the Services). In this case, we may have to 
                cancel or limit your access to the Services.
              </Text>
            </VStack>
          </VStack>

          {/* How We Collect Data Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">3. How Do We Collect Personal Data?</Heading>
            <Text>
              We use different methods to collect personal data from and about you including through:
            </Text>

            <VStack spacing={3} align="start">
              <Heading as="h3" size="md">(a) Direct Interactions.</Heading>
              <Text>
                You provide us your personal data when you interact with us. This includes personal data you provide when you:
              </Text>
              <UnorderedList spacing={2} pl={4}>
                <ListItem>create an account or profile with us;</ListItem>
                <ListItem>use our Services or carry out other activities in connection with the Services;</ListItem>
                <ListItem>enter a promotion, user poll, or online surveys;</ListItem>
                <ListItem>request marketing communications to be sent to you; or</ListItem>
                <ListItem>report a problem with the Platform and/or our Services, give us feedback or contact us.</ListItem>
              </UnorderedList>
            </VStack>

            <VStack spacing={3} align="start">
              <Heading as="h3" size="md">(b) Automated technologies or interactions.</Heading>
              <Text>
                Each time you visit the Platform or use the Services, we will automatically collect Technical 
                Data about your equipment, browsing actions, and patterns. We collect this personal data by 
                using cookies, web beacons, pixel tags, server logs, and other similar technologies. We may 
                also receive Technical Data about you if you visit other websites or apps that employ our cookies.
              </Text>
            </VStack>

            <VStack spacing={3} align="start">
              <Heading as="h3" size="md">(c) Third parties or publicly available sources.</Heading>
              <Text>
                We will receive personal data about you from various third parties:
              </Text>
              <UnorderedList spacing={2} pl={4}>
                <ListItem>Technical data from analytics providers such as Facebook and advertising networks;</ListItem>
                <ListItem>Identity and profile-related Data and Contact Data from service professionals, publicly available sources, etc.;</ListItem>
                <ListItem>Personal data about you from our affiliate entities.</ListItem>
              </UnorderedList>
            </VStack>
          </VStack>

          {/* How We Use Data Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">4. How Do We Use Your Personal Data?</Heading>
            
            <VStack spacing={3} align="start">
              <Text>
                (a) We will only use your personal data when the law allows us to. Most commonly, we will 
                use your personal data where we need to provide you with the Services, enable you to use 
                the Professional Services, or where we need to comply with a legal obligation. We use your 
                personal data for the following purposes:
              </Text>
              
              <UnorderedList spacing={2} pl={4}>
                <ListItem>to verify your identity to register you as a user, and create your user account with us on the Platform;</ListItem>
                <ListItem>to provide the Services to you;</ListItem>
                <ListItem>to enable the provision of Professional Services to you;</ListItem>
                <ListItem>to monitor trends and personalise your experience;</ListItem>
                <ListItem>to improve the functionality of our Services based on the information and feedback we receive from you;</ListItem>
                <ListItem>to improve customer service to effectively respond to your Service requests and support needs;</ListItem>
                <ListItem>to track transactions and process payments;</ListItem>
                <ListItem>to send periodic notifications to manage our relationship with you including to notify you of changes to the Services, send you information and updates pertaining to the Services you have availed, and to receive occasional company news and updates related to us or the Services;</ListItem>
                <ListItem>to assist with the facilitation of the Professional Services offered to you, including to send you information and updates about the Professional Services you have availed;</ListItem>
                <ListItem>to market and advertise the Services to you;</ListItem>
                <ListItem>to comply with legal obligations;</ListItem>
                <ListItem>to administer and protect our business and the Services, including for troubleshooting, data analysis, system testing, and performing internal operations;</ListItem>
                <ListItem>to improve our business and delivery models;</ListItem>
                <ListItem>to perform our obligations that arise out of the arrangement we are about to enter or have entered with you;</ListItem>
                <ListItem>to enforce our Terms; and</ListItem>
                <ListItem>to respond to court orders, establish or exercise our legal rights, or defend ourselves against legal claims.</ListItem>
              </UnorderedList>
            </VStack>

            <Text>
              (b) You agree and acknowledge that by using our Services and creating an account with us on 
              the Platform, you authorise us, our service professionals, associate partners, and affiliates 
              to contact you via email, phone, or otherwise. This is to provide the Services to you and 
              ensure that you are aware of all the features of the Services and for related purposes.
            </Text>

            <Text>
              (c) You agree and acknowledge that any and all information pertaining to you, whether or not 
              you directly provide it to us (via the Services or otherwise), including but not limited 
              to personal correspondence such as emails, instructions from you, etc., may be collected, compiled, 
              and shared by us in order to render the Services to you. This may include but not be limited 
              to service professionals who provide or seek to provide you with Professional Services, vendors, 
              social media companies, third-party service providers, storage providers, data analytics providers, 
              consultants, lawyers, and auditors. We may also share this information with other entities in 
              the Swachh Saathi group in connection with the above-mentioned purposes.
            </Text>

            <Text>
              (d) You agree and acknowledge that we may share data without your consent, when it is required 
              by law or by any court or government agency or authority to disclose such information. Such 
              disclosures are made in good faith and belief that it is reasonably necessary to do so for 
              enforcing this Policy or the Terms, or in order to comply with any applicable laws and regulations.
            </Text>
          </VStack>

          {/* Cookies Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">5. Cookies</Heading>
            
            <VStack spacing={3} align="start">
              <Text>
                (a) Cookies are small files that a site or its service provider transfers to your device's 
                hard drive through your web browser (if you permit it to) that enables the sites or service 
                providers' systems to recognise your browser and capture and remember certain information.
              </Text>

              <Text>
                (b) We use cookies to help us distinguish you from other users of the Platform, understand 
                and save your preferences for future visits, keep track of advertisements and compile 
                aggregate data about site traffic and site interaction so that we can offer you a seamless 
                user experience. We may contact third-party service providers to assist us in better 
                understanding our site visitors. These service providers are not permitted to use the 
                information collected on our behalf except to help us conduct and improve our business.
              </Text>

              <Text>
                (c) Additionally, you may encounter cookies or other similar devices on certain pages of 
                the Platform that are placed by third parties. We do not control the use of cookies by 
                third parties. If you send us personal correspondence, such as emails, or if other users 
                or third parties send us correspondence about your activities or postings on the Platform, 
                we may collect such information within a file specific to you.
              </Text>
            </VStack>
          </VStack>

          {/* Disclosures Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">6. Disclosures of Your Personal Data</Heading>
            
            <VStack spacing={3} align="start">
              <Text>
                (a) We may share your personal data with third parties set out below for the purposes set 
                out in Section 4:
              </Text>

              <UnorderedList spacing={2} pl={4}>
                <ListItem>
                  Service professionals to enable them to provide you with Professional Services;
                </ListItem>
                <ListItem>
                  Internal third parties, which are other companies within the Swachh Saathi group of companies.
                </ListItem>
                <ListItem>
                  External third parties such as:
                  <UnorderedList spacing={2} pl={4} mt={2}>
                    <ListItem>
                      trusted third parties such as our associate partners, and service providers that 
                      provide services for us or on our behalf. This includes hosting and operating our 
                      Platform, providing marketing assistance, conducting our business, processing payments 
                      and transaction-related processes, transmitting content, and providing our Services to you;
                    </ListItem>
                    <ListItem>
                      analytic service providers and advertising networks that conduct web analytics for us 
                      to help us improve the Platform. These analytics providers may use cookies and other 
                      technologies to perform their services;
                    </ListItem>
                    <ListItem>
                      other registered users on our Platform upon your request or where you explicitly 
                      consent to such disclosure; and
                    </ListItem>
                    <ListItem>
                      regulators and other bodies, as required by law or regulation.
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </UnorderedList>

              <Text>
                (b) We require all third parties to respect the security of your personal data and to treat 
                it in accordance with the law. We do not allow our third-party service providers to use 
                your personal data for their own purposes and only permit them to process your personal 
                data for specified purposes and in accordance with our instructions.
              </Text>
            </VStack>
          </VStack>

          {/* Rights Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">7. Your Rights in Relation to Your Personal Data</Heading>
            
            <VStack spacing={3} align="start">
              <Heading as="h3" size="md">(a) Access and Updating your Personal Data:</Heading>
              <Text>
                You hereby warrant that all personal data that you provide us with is accurate, up-to-date, 
                and true. When you use our Services, we make best efforts to provide you with the ability 
                to access and correct inaccurate or deficient data, subject to any legal requirements. You 
                can request Swachh Saathi for a copy of your personal data by sending an email to{' '}
                <Link href="mailto:help@swachhsaathi.com" color="brand.500">help@swachhsaathi.com</Link>. 
                Swachh Saathi may take up to 7 (seven) working days respond to such request.
              </Text>
            </VStack>

            <VStack spacing={3} align="start">
              <Heading as="h3" size="md">(b) Opting-out of Marketing and Promotional Communications:</Heading>
              <Text>
                When we send you marketing and promotional content through email, we make best efforts to 
                provide you with the ability to opt-out of such communications by using the opt-out 
                instructions provided in such emails. You understand and acknowledge that it may take us up 
                to 10 (Ten) business days to give effect to your opt-out request. Please note that we may 
                still send you emails about your user account or any Services you have requested or received 
                from us.
              </Text>
            </VStack>
          </VStack>

          {/* Account Deletion Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">8. Deletion of Account and Personal Data</Heading>
            
            <Text>
              (a) Notwithstanding anything contained in the Terms, you may delete your account as well as 
              your personal data stored with Swachh Saathi by sending an email to{' '}
              <Link href="mailto:help@swachhsaathi.com" color="brand.500">help@swachhsaathi.com</Link>. 
              Swachh Saathi may take up to 7 (seven) working days to process your request. Once your 
              account is deleted, you will lose access to all Services. For avoidance of doubt, it is 
              hereby clarified that all data with respect to transactions performed by you on the Platform 
              will be retained in accordance with applicable law.
            </Text>
          </VStack>

          {/* Data Transfer Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">9. Transfers of Your Personal Data</Heading>
            
            <VStack spacing={3} align="start">
              <Text>
                (a) We comply with applicable laws in respect of storage and transfers of personal data. 
                As a part of your use of the Services, the information and personal data you provide to us 
                may be transferred to and stored in countries other than the country you are based in. This 
                may happen if any of our servers are from time to time located in a country other than the 
                one you are based, or one of our vendors, partners, or service providers is located in a 
                country other than one you are based in.
              </Text>

              <Text>
                (b) By submitting your information and personal data to us, you agree to the transfer, 
                storage, and processing of such information and personal data in the manner described above.
              </Text>
            </VStack>
          </VStack>

          {/* Data Security Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">10. Data Security</Heading>
            
            <VStack spacing={3} align="start">
              <Text>
                (a) We implement appropriate security measures and privacy-protective features on our 
                Platform including encryption, password protection, call masking, and physical security 
                measures to protect your personal data from unauthorised access and disclosure, and follow 
                standards prescribed by applicable law.
              </Text>

              <Text>
                (b) Where you have chosen a password that enables you to access certain parts of the 
                Services or Professional Services, you are responsible for keeping this password secret 
                and confidential. We will not be responsible for any unauthorised use of your information, 
                or for any lost, stolen, or compromised passwords, or for any activity on your user 
                account due to such unauthorised disclosure of your password. In the event your password 
                has been compromised in any manner whatsoever, you should promptly notify us to enable us 
                to initiate a change of password.
              </Text>
            </VStack>
          </VStack>

          {/* Data Retention Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">11. Data Retention</Heading>
            
            <VStack spacing={3} align="start">
              <Text>
                (a) You agree and acknowledge that your personal data will continue to be stored and 
                retained by us for as long as necessary to fulfil our stated purpose(s) and for a 
                reasonable period after the termination of your account on the Platform or access to the 
                Services to comply with our legal rights and obligations.
              </Text>

              <Text>
                (b) In some circumstances, we may aggregate your personal data (so that it can no longer 
                be associated with you) for research or statistical purposes, in which case we may use 
                this information indefinitely without further notice to you.
              </Text>
            </VStack>
          </VStack>

          {/* Business Transitions Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">12. Business Transitions</Heading>
            
            <Text>
              You are aware that in the event we go through a business transition, such as a merger, 
              acquisition by another organisation, or sale of all or a portion of our assets, your 
              personal data might be among the assets transferred.
            </Text>
          </VStack>

          {/* User Generated Content Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">13. User Generated Content</Heading>
            
            <Text>
              We invite you to post content on our Platform, including your comments, feedback, pictures, 
              or any other information that you would like to be made available on our Platform. Please 
              note that such content will be available to all visitors to our Platform and may become 
              public. We cannot prevent such information from being used in a manner that is contrary to 
              this Policy, applicable laws, or your personal privacy, and we disclaim all liability 
              (express or implied) in this regard. Further, you agree to comply with all applicable laws 
              in relation to the content uploaded or otherwise shared by you on our Platform. You 
              understand and acknowledge that you will be solely responsible for any information published 
              by you on our Platform that violates applicable laws.
            </Text>
          </VStack>

          {/* Updates to Policy Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">14. Updates to This Policy</Heading>
            
            <VStack spacing={3} align="start">
              <Text>
                (a) We may occasionally update this Policy. If we make changes to this Policy, we will 
                upload the revised policy on the Platform or share it with you through other means, such 
                as email. To the extent permitted under applicable law, by using our Platform after such 
                notice, you consent to updates made to this Policy.
              </Text>

              <Text>
                (b) We encourage you to periodically review this Policy for the latest information on our 
                privacy practices.
              </Text>
            </VStack>
          </VStack>

          {/* Contact Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">15. Grievance Officer</Heading>
            <Text>
              If you have any questions about this Policy, how we process or handle your personal data, 
              or otherwise, you may reach out to us, with your queries, grievances, feedback, and 
              comments at <Link href="mailto:help@swachhsaathi.com" color="brand.500">help@swachhsaathi.com</Link> or 
              contact our grievance officer whose contact details are provided below:
            </Text>
            
            <VStack spacing={2} align="start" pl={4}>
              <Text fontWeight="bold">Grievance Officers</Text>
              <Text>Name: Anjali Sardana</Text>
              <Text>Designation: Chief Executive Officer</Text>
              <Text>Email: <Link href="mailto:help@swachhsaathi.com" color="brand.500">help@swachhsaathi.com</Link></Text>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default PrivacyPolicy 