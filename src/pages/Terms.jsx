import { Box, Container, Heading, Text, VStack, UnorderedList, ListItem, Link } from '@chakra-ui/react'

function Terms() {
  return (
    <Box py={12}>
      <Container maxW="container.md">
        <VStack spacing={8} align="start">
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h1" size="2xl">Terms and Conditions</Heading>
            <Text color="gray.600">Last updated: 9th November, 2024</Text>
          </VStack>

          {/* Introduction Section */}
          <VStack spacing={4} align="start">
            <Text>
              A. These terms and conditions ("Terms") govern the use of services made available on or through 
              https://www.swachhsaathi.com and/or the Swachh Saathi mobile app (collectively, the "Platform", 
              and together with the services made available on or through the Platform, the "Services"). These 
              Terms also include our privacy policy, available at{' '}
              <Link href="/#/privacy-policy" color="brand.500">https://www.swachhsaathi.com/privacy-policy</Link>
              {' '}("Privacy Policy"), and any guidelines, additional, or supplemental terms, policies, and 
              disclaimers made available or issued by us from time to time ("Supplemental Terms"). The Privacy 
              Policy and the Supplemental Terms form an integral part of these Terms. In the event of a conflict 
              between these Terms and the Supplemental Terms with respect to applicable Services, the Supplemental 
              Terms will prevail.
            </Text>

            <Text>
              B. The Terms constitute a binding and enforceable legal contract between Swachh Saathi Private 
              Limited (and its affiliates ("Swachh Saathi", "we", "us", or "our"), and you, a user of the 
              Services, or any legal entity that books Pro Services (defined below) on behalf of end-users 
              ("you" or "Customer"). By using the Services, you represent and warrant that you have full legal 
              capacity and authority to agree to and bind yourself to these Terms. If you represent any other 
              person, you confirm and represent that you have the necessary power and authority to bind such 
              person to these Terms.
            </Text>

            <Text>
              C. By using the Services, you agree that you have read, understood, and are bound by, these Terms, 
              as amended from time to time, and that you will comply with the requirements listed here. These 
              Terms expressly supersede any prior written agreements with you. If you do not agree to these Terms, 
              or comply with the requirements listed here, please do not use the Services.
            </Text>
          </VStack>

          {/* Services Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">1. Services</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) The Services include the provision of the Platform that enables you to arrange and schedule 
                different home-based services with independent third-party service providers of those services 
                ("Service Professionals"). As a part of the Services, Swachh Saathi facilitates the transfer 
                of payments to Service Professionals for the services they render to you and collects payments 
                on behalf of such Service Professionals.
              </Text>

              <Text>
                (b) The services rendered by Service Professionals are referred to as "Pro Services". The term 
                "Services" does not include the Pro Services. Swachh Saathi does not provide the Pro Services 
                and is not responsible their provision. Service Professionals are solely liable and responsible 
                for the Pro Services that they offer or otherwise provide through the Platform. Swachh Saathi 
                and its affiliates do not employ Service Professionals, nor are Service Professionals agents, 
                contractors, or partners of Swachh Saathi or its affiliates. Service Professionals do not have 
                the ability to bind or represent Swachh Saathi.
              </Text>

              <Text>
                (c) The Platform is for your personal and non-commercial use only, unless otherwise agreed upon 
                in accordance with the terms of a separate agreement. Please note that the Platform is intended 
                for use only within India. You agree that in the event you avail the Services or Pro Services 
                from a legal jurisdiction other than the territory of India, you will be deemed to have accepted 
                the Swachh Saathi terms and conditions applicable to that jurisdiction.
              </Text>

              <Text>
                (d) The Services are made available under various brands owned by or otherwise licensed to 
                Swachh Saathi and its affiliates.
              </Text>

              <Text>
                (e) A key part of the Services is Swachh Saathi's ability to send you text messages, electronic 
                mails, or WhatsApp messages, including in connection with your bookings, your utilisation of 
                the Services, or as a part of its promotional and marketing strategies. While you may opt out 
                of receiving these text messages by contacting Swachh Saathi at help@swachhsaathi.com or through 
                the in-Platform settings, you agree and acknowledge that this may impact Swachh Saathi's ability 
                to provide the Services (or a part of the Services) to you.
              </Text>

              <Text>
                (f) In certain instances, you may be required to furnish identification proof to avail the 
                Services or the Pro Services, and hereby agree to do so. A failure to comply with this request 
                may result in your inability to use the Services or Pro Services.
              </Text>

              <Text>
                (g) Swachh Saathi Credits:
              </Text>
              <VStack spacing={2} pl={4} align="start">
                <Text>
                  (i) Swachh Saathi may, in its sole discretion, offer promotional codes that may be redeemed 
                  for credits, other features or benefits related to the Services, and/or Pro Services, subject 
                  to any additional terms that may apply on a promotional code ("Swachh Saathi Credits").
                </Text>

                <Text>
                  (ii) You agree that (i) you shall use Swachh Saathi Credits in a lawful manner, and only for 
                  the purposes specified by such Swachh Saathi Credits, (ii) you shall not duplicate, sell, or 
                  transfer the Swachh Saathi Credits in any manner (including by posting such codes on a public 
                  forum) unless you have Swachh Saathi's express prior consent to do so, (iii) Swachh Saathi 
                  Credits may be disabled by Swachh Saathi at any time for any reason without any liability to 
                  you, (iv) Swachh Saathi Credits are not valid for cash, and (v) Swachh Saathi Credits may 
                  expire prior to your use.
                </Text>

                <Text>
                  (iii) Swachh Saathi may, at its sole discretion, provide only certain users with Swachh 
                  Saathi Credits that may result in different amounts charged for the same or similar services 
                  obtained by other users.
                </Text>

                <Text>
                  (iv) Swachh Saathi reserves the right to withhold or deduct credits or other features or 
                  benefits obtained through the use of Swachh Saathi Credits, by you or any other user, if 
                  Swachh Saathi reasonably determines or believes that the use or redemption of the Swachh 
                  Saathi Credits was in error, fraudulent, illegal, or in violation of the applicable Swachh 
                  Saathi Credit terms or these Terms.
                </Text>
              </VStack>
            </VStack>
          </VStack>

          {/* Account Creation Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">2. Account Creation</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) To avail the Services, you will be required to create an account on the Platform 
                ("Account"). For this Account, you may be required to furnish certain details, including 
                but not limited to your phone number. To create an Account, you must be at least 18 years 
                of age.
              </Text>

              <Text>
                (b) You warrant that all information furnished in connection with your Account is and shall 
                remain accurate and true. You agree to promptly update your details on the Platform in the 
                event of any change to or modification of this information.
              </Text>

              <Text>
                (c) You are solely responsible for maintaining the security and confidentiality of your 
                Account and agree to immediately notify us of any disclosure or unauthorised use of your 
                Account or any other breach of security with respect to your Account.
              </Text>

              <Text>
                (d) You are liable and accountable for all activities that take place through your Account, 
                including activities performed by persons other than you. We shall not be liable for any 
                unauthorised access to your Account.
              </Text>

              <Text>
                (e) You agree to receive communications from us regarding (i) requests for payments, (ii) 
                information about us and the Services, (iii) promotional offers and services from us and 
                our third party partners, and (iv) any other matter in relation to the Services.
              </Text>
            </VStack>
          </VStack>

          {/* User Content Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">3. User Content</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) Our Platform may contain interactive features or services that allow users who have 
                created an account with us to post, upload, publish, display, transmit, or submit comments, 
                reviews, suggestions, feedback, ideas, or other content on or through the Platform ("User Content").
              </Text>

              <Text>
                (b) As part of the effective provision of the Services and quality control purposes, we may 
                request reviews from you about Service Professionals and you agree and acknowledge that Service 
                Professionals may provide reviews about you to us. You must not knowingly provide false, 
                inaccurate, or misleading information in respect of the reviews. Reviews will be used by us 
                for quality control purposes and to determine whether Customers and Service Professionals are 
                appropriate users of the Platform. If we determine at our sole discretion that you are not 
                an appropriate user, we reserve the right to cancel your registration and remove you from 
                our Platform.
              </Text>

              <Text>
                (c) You grant us a non-exclusive, worldwide, perpetual, irrevocable, transferable, 
                sublicensable, and royalty-free licence to (i) use, publish, display, store, host, transfer, 
                process, communicate, distribute, make available, modify, adapt, translate, and create 
                derivative works of, the User Content, for the functioning of, and in connection with, the 
                Services and (ii) use User Content for the limited purposes of advertising and promoting the 
                Services, or furnishing evidence before a court or authority of competent jurisdiction under 
                applicable laws.
              </Text>

              <Text>
                (d) In connection with these Terms and the licences granted under this clause, you hereby 
                waive any claims arising out of any moral rights or other similar rights relating to the 
                User Content.
              </Text>

              <Text>
                (e) You agree and acknowledge that Swachh Saathi may, without notice to you, remove, or 
                otherwise restrict access to User Content that, in its sole discretion, violates these Terms.
              </Text>
            </VStack>
          </VStack>

          {/* Consent to Use Data Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">4. Consent to Use Data</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) You agree that we may, in accordance with our Privacy Policy, collect and use your 
                personal data. The Privacy Policy is available at{' '}
                <Link href="/#/privacy-policy" color="brand.500">
                  https://www.swachhsaathi.com/privacy-policy
                </Link>
                {' '}and it explains the categories of personal data that we collect or otherwise process 
                about you and the manner in which we process such data.
              </Text>

              <Text>
                (b) In addition to any consent you may provide pursuant to the Privacy Policy, you hereby 
                consent to us sharing your information with our affiliates or other third party service 
                providers. We may use information and data pertaining to your use of the Services for 
                provision of the Services, analytics, trend identification, and purposes of statistics to 
                further enhance the effectiveness and efficiency of our Services, and provision of beneficial 
                schemes, new offers, and for experience enhancement.
              </Text>

              <Text>
                (c) Subject to applicable laws, we may be directed by law enforcement agencies or the 
                government and related bodies to disclose data in relation to you in connection with criminal 
                or civil proceedings. You understand and agree that in such instances we shall have the right 
                to share such data with relevant agencies or bodies.
              </Text>
            </VStack>
          </VStack>

          {/* Bookings Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">5. Bookings</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) Orders: The Platform permits you to request various Pro Services at a time of your choosing 
                based on available slots. To make a booking, you should follow the instructions on the Platform 
                and provide necessary information. We use reasonable efforts to enable you to find a Service 
                Professional who is able to provide that service at the requested time. If, in the unlikely 
                event we cannot find a Service Professional for the specific timeslot, we will contact you to 
                find an alternative time.
              </Text>

              <Text>
                (b) Confirmation: Once you place a request either through our mobile application or website, 
                we will provide confirmation of the booking in the mobile application or on our website 
                respectively. Once your booking has been confirmed, you will be required to make the payment 
                in accordance with these Terms or as indicated on the Platform.
              </Text>

              <Text>
                (c) Cancellations: Swachh Saathi's cancellation policy sets out applicable cancellation fees.
              </Text>

              <Text>
                (d) Substitution: In case of the unavailability of, or cancellation by a selected Service 
                Professional, we will offer you a substitute of the Service Professional from among our 
                registered Service Professionals.
              </Text>
            </VStack>
          </VStack>

          {/* Pricing Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">6. Pricing, Fees, and Payment Terms</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) Swachh Saathi reserves the right to charge you for the different Services you may avail 
                and/or for any other facilities you may opt for, from time to time, on or via the Platform.
              </Text>

              <Text>
                (b) Charges and Fees in respect of Pro Services:
              </Text>
              <VStack spacing={2} pl={4} align="start">
                <Text>
                  (i) In respect of Pro Services that you seek to avail through the Platform, you shall be 
                  required to pay Service Professionals the amount indicated at the time of booking as well 
                  as amounts towards (a) any additional Pro Services you may avail, (b) out of pocket expenses 
                  incurred by the Service Professional, and (c) expenses arising out of the purchase of goods 
                  required or utilised for the performance of the Pro Service ("Charges"). In addition to the 
                  Charges payable to Service Professionals, Swachh Saathi reserves the right to charge you a 
                  convenience fee for facilitating the booking and transferring payments to the Service 
                  Professional (this fee is referred to as "Fees"). You acknowledge that the final bill you 
                  receive may include additional charges, including without limitation, a safety fee, warranty 
                  fee, insurance fee, or Service Professional welfare fee.
                </Text>

                <Text>
                  (ii) Swachh Saathi shall notify you of the applicable Charges, Fees, and payment methods at 
                  the time of booking. Generally, you may make payments for Pro Services through UPI or cash 
                  upon completion of the Pro Service. We have the right to modify and otherwise restrict the 
                  modes of payment available to you. You acknowledge that certain payment methods such as cash 
                  upon completion may not always be available to you as a payment method. For the avoidance of 
                  doubt, in the event you pay through the method of 'cash upon completion', you acknowledge 
                  that you will be required to pay both Charges and Fees to the Service Professional.
                </Text>

                <Text>
                  (iii) The Charges and Fees may be payable at the time of making a booking, or upon the 
                  completion of the Pro Service, as specified by Swachh Saathi.
                </Text>

                <Text>
                  (iv) For the avoidance of doubt, please note that the Charges are payable to Service 
                  Professionals, and Swachh Saathi acts as a limited collection agent on behalf of such 
                  Service Professionals to collect and transfer amounts due to them.
                </Text>

                <Text>
                  (v) Taxes: All Charges and Fees are inclusive of applicable taxes.
                </Text>

                <Text>
                  (vi) Swachh Saathi reserves the right to reasonably amend the Charges and Fees at any time 
                  at its sole discretion. A change in Fees shall not impact any bookings that have been 
                  confirmed before the publication of the revised Fees on the Platform.
                </Text>

                <Text>
                  (vii) Charges and Fees that you pay are final and non-refundable, unless otherwise 
                  determined by Swachh Saathi or required by the applicable laws. Under certain laws, you may 
                  be entitled to a refund or other remedies for a failure in the provision of the Services.
                </Text>

                <Text>
                  (viii) You acknowledge and agree that Charges and Fees applicable in certain geographical 
                  areas may increase substantially during times of high demand. Swachh Saathi will use 
                  reasonable efforts to inform you of the Charges and Fees that may apply. However, by using 
                  the Pro Services or Services, you will be responsible for the Charges and Fees incurred 
                  under your Account regardless of your awareness of such Charges or Fees.
                </Text>
              </VStack>

              <Text>
                (c) Payment Processors: We may use a third-party payment processor ("Payment Processor") to 
                bill you through your selected mode of payment. The processing of payments will be subject to 
                the terms and policies of such Payment Processor in addition to these Terms. We shall not be 
                liable for any error of the Payment Processor. In the event of any unsuccessful payment, the 
                money debited shall be credited in accordance with the terms of the Payment Processor.
              </Text>

              <Text>
                (d) Cancellation: You may elect to cancel your request for services from a Service Professional 
                at any time prior to such Service Professional's arrival, in which case you may be charged a 
                cancellation fee in accordance with Swachh Saathi's cancellation policy. Swachh Saathi reserves 
                the right to charge you, or otherwise deduct applicable taxes in respect of such cancellation fee.
              </Text>

              <Text>
                (e) Subscriptions: Swachh Saathi may from time to time offer subscription packages (howsoever 
                named) for monetary consideration. The packages shall provide Customers with additional benefits, 
                which may include the ability to avail discounted Pro Services. You agree that subscription 
                packages (howsoever named) shall be subject to additional terms and conditions. You acknowledge 
                that such subscription packages will be subject to additional terms and conditions that will be 
                deemed to be an integral part of these Terms.
              </Text>

              <Text>
                (f) Swachh Saathi does not designate any portion of your payment as a tip or gratuity to the 
                Service Professional. Any representation by Swachh Saathi to the effect that tipping is 
                "voluntary", "not required", and/or "included" in the payments you make for Pro Services is not 
                intended to suggest that Swachh Saathi provides any additional payments to Service Professionals. 
                You understand and agree that while you are free to provide additional payment as a gratuity to 
                any Service Professional who provides you with Pro Services, you are under no obligation to do 
                so. Gratuities are voluntary.
              </Text>
            </VStack>
          </VStack>

          {/* Customer Conduct Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">7. Customer Conduct</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) Swachh Saathi prohibits discrimination against Service Professionals, including on the 
                basis of race, religion, caste, national origin, disability, sexual orientation, sex, marital 
                status, gender identity, age, or any other characteristic that may be protected under 
                applicable law. Such discrimination includes, but is not limited to, refusing to provide or 
                accept services based on any of these characteristics.
              </Text>

              <Text>
                (b) You agree to treat Service Professionals with respect and not to engage in any unlawful, 
                discriminatory, harassing, or disruptive behavior.
              </Text>

              <Text>
                (c) You agree not to ask Service Professionals to undertake any tasks that could reasonably 
                be considered dangerous, harmful, or unlawful.
              </Text>

              <Text>
                (d) You agree to provide a safe and appropriate working environment for Service Professionals 
                that is free of harassment, discrimination, and unsafe conditions.
              </Text>
            </VStack>
          </VStack>

          {/* Your Responsibilities Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">8. Your Responsibilities</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) You represent and warrant that all information that you provide in relation to the 
                Services and Pro Services is complete, true, and correct on the date of agreeing to these 
                Terms and shall continue to be complete, true, and correct while you avail the Services 
                and/or the Pro Services. Should any information that you provide change during the existence 
                of these Terms, you undertake to immediately bring such change to our notice. We do not 
                accept any responsibility or liability for any loss or damage that you may suffer or incur 
                if any information, documentation, material, or data, provided to avail the Services is 
                incorrect, incomplete, inaccurate, or misleading or if you fail to disclose any material fact.
              </Text>

              <Text>
                (b) You shall extend all cooperation to us in our defence of any proceedings that may be 
                initiated against us due to a breach of your obligations or covenants under these Terms.
              </Text>

              <Text>
                (c) In respect of the User Content, you represent and warrant that:
              </Text>
              <VStack spacing={2} pl={4} align="start">
                <Text>
                  (i) you own all intellectual property rights (or have obtained all necessary permissions) 
                  to provide User Content and to grant the licences under these Terms;
                </Text>

                <Text>
                  (ii) you are solely responsible for all activities that occur on or through your account 
                  on the Platform and all User Content;
                </Text>

                <Text>
                  (iii) the User Content does not and shall not violate any of your obligations or 
                  responsibilities under other agreements;
                </Text>

                <Text>
                  (iv) the User Content does not and shall not violate, infringe, or misappropriate any 
                  intellectual property right or other proprietary right including the right of publicity 
                  or privacy of any person or entity;
                </Text>

                <Text>
                  (v) the User Content does not and shall not contain any viruses, corrupted data, or other 
                  harmful, disruptive, or destructive files or content;
                </Text>

                <Text>
                  (vi) the User Content does not and shall not violate any third party rights;
                </Text>

                <Text>
                  (vii) the User Content (A) does not belong to any other person to which you do not have 
                  any right, (B) does not threaten the unity, integrity, defence, security or sovereignty 
                  of India, friendly relations with foreign states, public order, cause incitement to the 
                  commission of any cognisable offence, prevents investigation of any offence, or is 
                  insulting another nation, (C) is not defamatory, grossly harmful, blasphemous, 
                  paedophilic, invasive of another's privacy, discriminatory based on gender, ethnically 
                  objectionable, disparaging, relating to, or encouraging money laundering or gambling, 
                  libellous, hateful, racist, violent, obscene, pornographic, unlawful, harmful to 
                  children, or (D) otherwise offensive, objectionable, or restricts, or inhibits, any 
                  other person from using or enjoying the Services.
                </Text>
              </VStack>

              <Text>
                (d) You shall not use the Services in any manner except as expressly permitted in these 
                Terms. Without limiting the generality of the preceding sentence, you shall not:
              </Text>
              <VStack spacing={2} pl={4} align="start">
                <Text>
                  (i) infringe any proprietary rights, including but not limited to copyrights, patents, 
                  trademarks, or trade secrets of any party;
                </Text>

                <Text>
                  (ii) except as may be provided hereunder, copy, display, distribute, modify, publish, 
                  reproduce, store, transmit, post, translate, create any derivative works from or license 
                  the Services;
                </Text>

                <Text>
                  (iii) use the Services to transmit any data, or send or upload any material that contains 
                  viruses, Trojan horses, worms, timebombs, keystroke loggers, spyware, adware, or any 
                  other harmful programmes, or similar computer code, designed to adversely affect the 
                  operation of any computer software or hardware;
                </Text>

                <Text>
                  (iv) use any robot, spider, other automated device, or manual process to monitor or copy 
                  the Services or any portion thereof;
                </Text>

                <Text>
                  (v) engage in the systematic retrieval of content from the Services to create or compile, 
                  directly or indirectly, a collection, compilation, database, or directory;
                </Text>

                <Text>
                  (vi) use the Services in (A) any unlawful manner, (B) for fraudulent or malicious 
                  activities or (C) in any manner inconsistent with these Terms;
                </Text>

                <Text>
                  (vii) decompile, reverse engineer, or disassemble the Services;
                </Text>

                <Text>
                  (viii) link to, mirror, or frame, any portion of all or any of the Services; or
                </Text>

                <Text>
                  (ix) violate applicable laws in any manner.
                </Text>
              </VStack>

              <Text>
                (e) You warrant that you shall not engage in any activity that interferes with or disrupts 
                the Services.
              </Text>

              <Text>
                (f) You shall not attempt to gain unauthorised access to any portion or feature of the 
                Services, any other systems or networks connected to the Services, to any of our servers, 
                or through the Platform by hacking, password mining, or any other illegitimate means.
              </Text>

              <Text>
                (g) You shall not directly or indirectly, in any capacity, solicit, attempt to influence, 
                engage, approach, or accept or encourage the solicitations or approach of, a Service 
                Professional from whom you have availed Pro Services, to either terminate or otherwise 
                cease their registration on or engagement with the Platform, or avail services the same 
                as or similar to the Pro Services independently, without booking the Pro Services through 
                your Account. You agree that this limitation is reasonable and fair and is necessary for 
                the protection of the privacy and security of Service Professionals and that this will not 
                preclude you from obtaining services the same as or similar to the Pro Services through 
                the Platform or other means. You further agree that any potential harm to Service 
                Professionals from the non-enforcement of this clause far outweighs any potential harm to you.
              </Text>
            </VStack>
          </VStack>

          {/* Intellectual Property Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">9. Our Intellectual Property</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) All rights, titles, and interest in, and to the Services, including all intellectual 
                property rights arising out of the Services, are owned by or otherwise licensed to us. 
                Subject to compliance with these Terms, we grant you a non-exclusive, non-transferable, 
                non-sub licensable, revocable, and limited licence to use the Services in accordance with 
                these Terms and our written instructions issued from time to time. Any rights not expressly 
                granted herein are reserved by Swachh Saathi or Swachh Saathi's licensors.
              </Text>

              <Text>
                (b) We may request you to submit suggestions and other feedback, including bug reports, 
                relating to the Services from time to time ("Feedback"). We may freely use, copy, disclose, 
                publish, display, distribute, and exploit the Feedback we receive from you without any 
                payment of royalty, acknowledgement, prior consent, or any other form of restriction 
                arising out of your intellectual property rights.
              </Text>

              <Text>
                (c) Except as expressly stated in these Terms, nothing in these Terms should be construed 
                as conferring any right in, or licence to, our or any third party's intellectual property 
                rights.
              </Text>
            </VStack>
          </VStack>

          {/* Term and Termination Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">10. Term and Termination</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) These Terms shall remain in effect unless terminated in accordance with the terms 
                hereunder.
              </Text>

              <Text>
                (b) We may restrict, deactivate, or terminate your access to, or use of, the Services, 
                or any portion thereof, (i) immediately and at any point at our sole discretion, (A) if 
                you violate or breach any of the obligations, responsibilities, or covenants under these 
                Terms, (B) when you cease to become a user of our Services, (C) you do not, or are likely 
                not to qualify under applicable law, or the standards and policies of Swachh Saathi or its 
                affiliates, to access and use the Services, or (D) violate or breach the Community 
                Guidelines, (ii) upon 30 (Thirty) days' prior written notice to you, or (iii) immediately 
                for any legitimate business, legal, or regulatory reason.
              </Text>

              <Text>
                (c) You may terminate these Terms, at any time, for any reason by sending a notice to 
                Swachh Saathi at help@swachhsaathi.com
              </Text>

              <Text>
                (d) Upon termination of these Terms:
              </Text>
              <VStack spacing={2} pl={4} align="start">
                <Text>
                  (i) the Account will expire;
                </Text>

                <Text>
                  (ii) the Services will "time-out"; and
                </Text>

                <Text>
                  (iii) these Terms shall terminate, except for those clauses that are expressly, or by 
                  implication, intended to survive termination or expiry.
                </Text>
              </VStack>
            </VStack>
          </VStack>

          {/* Disclaimers and Warranties Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">11. Disclaimers and Warranties</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) The Services are provided on an "as is" basis without warranty of any kind, express, 
                implied, statutory or otherwise, including without limitation the implied warranties of 
                title, non-infringement, merchantability, or fitness for a particular purpose. Without 
                limiting the foregoing, we make no warranty that the Services will meet your requirements 
                or expectations.
              </Text>

              <Text>
                (b) No advice or information, whether oral or written, obtained by you from us shall 
                create any warranty that is not expressly stated in the Terms.
              </Text>

              <Text>
                (c) While Swachh Saathi strives to provide accurate information about Pro Services and 
                Charges, pricing errors may occur from time to time.
              </Text>

              <Text>
                (d) You agree and acknowledge that we are merely a Platform that connects you with Service 
                Professionals, and we shall not be liable in any manner for any obligations that have not 
                been explicitly stated in these Terms. We are not liable or responsible for fulfilment of 
                any bookings, for the performance of the Pro Services by any Service Professional, or for 
                any acts or omissions of the Service Professionals during their provision of the Pro 
                Services including any damage they may cause to property. By booking Pro Services through 
                the Platform, you are entering into a contract with the relevant Service Provider for the 
                provision of those services, and we accept no responsibility or liability, nor do we make 
                any warranty, representation, or guarantee in respect of the Service Professional's 
                performance under that contract.
              </Text>

              <Text>
                (e) You agree and acknowledge that soliciting or receiving services from any Service 
                Professional independently is solely at your own risk, and in such an event, you waive 
                any rights that you may have under these Terms.
              </Text>

              <Text>
                (f) We do not guarantee or warrant and we make no representation whatsoever regarding 
                the reliability, quality, or suitability of the Service Professionals.
              </Text>

              <Text>
                (g) You hereby accept full responsibility for any consequences that may arise from your 
                use of the Services and Pro Services, and expressly agree and acknowledge that we shall 
                have absolutely no liability in this regard.
              </Text>

              <Text>
                (h) Swachh Saathi will maintain a complaints management framework and will manage this 
                framework on behalf of Service Professionals in a reasonable manner and in accordance 
                with the non-excludable requirements of relevant applicable laws.
              </Text>

              <Text>
                (i) To the fullest extent permissible by law, we, our affiliates, and our related 
                parties, each disclaim all liability for any loss or damage arising out of, or due to:
              </Text>
              <VStack spacing={2} pl={4} align="start">
                <Text>
                  (i) your use of, inability to use, or availability or unavailability of the Services 
                  or the Pro Services;
                </Text>

                <Text>
                  (ii) the occurrence or existence of any defect, interruption, or delays, in the 
                  operation or transmission of information to, from, or through the Services, 
                  communications failure, theft, destruction, or unauthorised access to our records, 
                  programmes, services, servers, or other infrastructure relating to the Services;
                </Text>

                <Text>
                  (iii) the failure of the Services to remain operational for any period of time; and
                </Text>

                <Text>
                  (iv) the loss of any User Content and any other data in connection with your use of 
                  the Services.
                </Text>
              </VStack>

              <Text>
                (j) In no event shall Swachh Saathi, its officers, directors, and employees, or its 
                contractors, agents, licensors, partners, or suppliers, be liable to you for any direct, 
                special, indirect, incidental, consequential, punitive, reliance, or exemplary damages 
                (including without limitation, lost business opportunities, lost revenues, or loss of 
                anticipated profits or any other pecuniary or non-pecuniary loss or damage of any nature 
                whatsoever, including but not limited to any abuse or breach of data), even if Swachh 
                Saathi or an authorised representative had been advised of the possibility of such 
                damages, arising out of, or relating to (A) these Terms, (B) the Services or the Pro 
                Services, (C) your use or inability to use the Services or the Pro Services, or (D) any 
                other interactions with another user of the Services.
              </Text>

              <Text>
                (k) To the maximum extent permitted by law, our liability shall be limited to the amount 
                of commission we receive in respect of a particular booking made on the Platform. In no 
                event shall our total liability to you in connection with these Terms exceed INR 10,000 
                (Rupees Ten Thousand).
              </Text>

              <Text>
                (l) Nothing in these Terms will exclude or limit any warranty implied by law that it 
                would be unlawful to exclude or limit.
              </Text>
            </VStack>
          </VStack>

          {/* Indemnity Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">12. Indemnity</Heading>

            <Text>
              You shall indemnify, defend at our option, and hold us, our parent companies, subsidiaries, 
              affiliates, and our officers, employees, directors, agents, and representatives, harmless 
              from and against any claim, demand, lawsuits, judicial proceeding, losses, liabilities, 
              damages, and costs (including, without limitation, all damages, liabilities, settlements, 
              and attorneys' fees), due to or arising out of your access to the Services or Pro Services, 
              use of the Services or Pro Services, violation of these Terms, or any violation of these 
              Terms by any third party who may use your Account.
            </Text>
          </VStack>

          {/* Jurisdiction Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">13. Jurisdiction, Governing Laws, and Dispute Resolution</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) These Terms shall be governed by and construed and enforced in accordance with the 
                laws of India. Subject to other provisions in this clause, courts in New Delhi shall 
                have exclusive jurisdiction over all issues arising out of these Terms or the use of 
                the Services.
              </Text>

              <Text>
                (b) Any controversies, conflicts, disputes, or differences, arising out of these Terms 
                shall be resolved by arbitration in New Delhi in accordance with the Arbitration and 
                Conciliation Act, 1996 for the time being in force, which is deemed to be incorporated 
                by reference in this clause. The tribunal shall consist of 1 (One) arbitrator appointed 
                by Swachh Saathi. The language of the arbitration shall be English. The parties to the 
                arbitration shall keep the arbitration confidential, and not disclose to any person, 
                other than on a need to know basis, or to legal advisors, unless required to do so by 
                law. The decision of the arbitrator shall be final and binding on all the parties 
                thereto. Each party to the arbitration shall bear its own costs with respect to any 
                dispute.
              </Text>
            </VStack>
          </VStack>

          {/* Grievance Redressal Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">14. Grievance Redressal</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) You may contact our designated Grievance Redressal Officer with any complaints or 
                queries relating to the Services or these Terms through registered post or through 
                email, details of which are provided below:
              </Text>

              <VStack spacing={2} pl={4} align="start">
                <Text>Name: Anjali Sardana</Text>
                <Text>Designation: Chief Executive Officer</Text>
                <Text>Email Address: help@swachhsaathi.com</Text>
              </VStack>

              <Text>
                (b) We shall ensure that your complaint is resolved within timelines prescribed by 
                applicable laws.
              </Text>
            </VStack>
          </VStack>

          {/* Miscellaneous Provisions Section */}
          <VStack spacing={4} align="start" width="100%">
            <Heading as="h2" size="lg">15. Miscellaneous Provisions</Heading>

            <VStack spacing={3} align="start">
              <Text>
                (a) Changes to Terms: The Terms are subject to revisions at any time, as determined by 
                us, and all changes are effective immediately upon being posted on the Platform. It is 
                your responsibility to review these Terms periodically for any updates or changes. You 
                will be deemed to have accepted the changes made to these Terms if you continue to use 
                the Platform once it has been posted.
              </Text>

              <Text>
                (b) Modification to the Services: We reserve the right at any time to add, modify, or 
                discontinue, temporarily or permanently, the Services (or any part thereof), with or 
                without cause. We shall not be liable for any such addition, modification, suspension, 
                or discontinuation of the Services.
              </Text>

              <Text>
                (c) Severability: If any provision of these Terms is determined by any court or other 
                competent authority to be unlawful or unenforceable, the other provisions of these 
                Terms will continue to be in effect. If any unlawful or unenforceable provision would 
                be lawful or enforceable if a part of it were deleted, that part will be deemed to be 
                deleted, and the rest of the provision will continue in effect (unless that would 
                contradict the clear intention of the clause, in which case the entirety of the 
                relevant provision will be deemed to be deleted).
              </Text>

              <Text>
                (d) Assignment: You shall not license, sell, transfer, or assign your rights, obligations, 
                or covenants under these Terms, or your Account in any manner without our prior written 
                consent. We may grant or withhold this consent at our sole discretion, subject to any 
                conditions we deem appropriate. We may assign our rights to any of our affiliates, 
                subsidiaries, or parent companies, any successor in interest of any business associated 
                with the Services, or any third party without any prior notice to you.
              </Text>

              <Text>
                (e) Notices: All notices, requests, demands, and determinations for us under these Terms 
                (other than routine operational communications) shall be sent to help@swachhsaathi.com.
              </Text>

              <Text>
                (f) Third Party Rights: No third party shall have any rights to enforce any terms 
                contained herein.
              </Text>

              <Text>
                (g) Force Majeure: We shall have no liability to you if we are prevented from or delayed 
                in performing our obligations, or from carrying on our business, by acts, events, 
                omissions, or accidents beyond our reasonable control, including without limitation, 
                strikes, failure of a utility service or telecommunications network, act of God, war, 
                riot, civil commotion, malicious damage, or compliance with any law or governmental 
                order, rule, regulation, or direction.
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Terms 