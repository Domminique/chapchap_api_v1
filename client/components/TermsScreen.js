import React from 'react'
//import { Container, Text, Heading, Center, NativeBaseProvider } from "native-base";
import {
  Container,
  Input,
  FormControl,
  Fab,
  Stack,
  Button,
  IconButton,
  Checkbox,
  Text,
  Box,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  useToast,
  NativeBaseProvider,
  Modal,
  TextArea,
  Radio,
} from 'native-base'
import {
  StyleSheet,
  View,
  Platform,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function Example() {
  return (
    <ScrollView>
      <Center>
        <Container>
          <Heading>
            Please read these
            <Text color='#00AA13'> Terms and Conditions</Text> carefully before
            using Our Service
          </Heading>
          <Text>
            Interpretation and Definitions{' '}
            <Text
              style={{ color: '#00AA13', fontStyle: 'italic', padding: 20 }}
            >
              Interpretation The words of which the initial letter is
              capitalized have meanings defined under the following conditions.
            </Text>{' '}
            <Text style={{ color: '#00AA13', fontStyle: 'italic' }}>
              The following definitions shall have the same meaning regardless
              of whether they appear in singular or in the plural.{' '}
            </Text>
          </Text>
          <View style={tw`pt-2`}></View>
          Definitions : For the purposes of these Terms and Conditions:
          Application means the software program provided by the Company
          downloaded by You on any electronic device, named chapchap
          Application Store means the digital distribution service operated and
          developed by Apple Inc. (Apple App Store) of Google Inc. (Google Play
          Store) in which the Application has been downloaded.
          <View style={tw`pt-2`}></View>
          Affiliate means an entity that controls, is controlled by or is under
          common control with a party, whereas &quot;control&quot; means
          ownership of 50% or more of the shares, equity interest or other
          securities entitled to vote for the election of directors or other
          managing authority.
          <View style={tw`pt-2`}></View>
          Country refers to Kenya: Company (referred to as either &quot;the
          Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in
          this Agreement) refers to chapchap. Device means any device that can
          access the Service such as a computer, a cellphone or a digital
          tablet. Service refers to the Application. Terms and Conditions (also
          referred to as &quot;Terms&quot;) mean these Terms and Conditions that
          form the entire agreement between You and the Company regarding the
          use of the Service.
          <View style={tw`pt-2`}></View>
          Third-party Social Media Service means any services or content
          (including data, information, products or services) provided by a
          third party that may be displayed, included or made available by the
          Service. You means the individual accessing or using the Service, or
          the company, or other legal entity on behalf of which such individual
          is accessing or using the Service, as applicable.
          <View style={tw`pt-2`}></View>
          Acknowledgment: These are the Terms and Conditions governing the use
          of this Service and the agreement that operates between You and the
          Company. These Terms and Conditions set out the rights and obligations
          of all users regarding the use of the Service. Your access to and use
          of the Service is conditioned on Your acceptance of and compliance
          with these Terms and Conditions. These Terms and Conditions apply to
          all visitors, users and others who access or use the Service.
          <View style={tw`pt-2`}></View>
          By accessing or using the Service You agree to be bound by these Terms
          and Conditions. If You disagree with any part of these Terms and
          Conditions then You may not access the Service. You represent that you
          are over the age of 10. The Company does not permit those under 10 to
          use the Service. Your access to and use of the Service is also
          conditioned on Your acceptance of and compliance with the Privacy
          Policy of the Company. Our Privacy Policy describes Our policies and
          procedures on the collection, use, and disclosure of Your personal
          information when You use the Application or the Website and tells You
          about Your privacy rights and how the law protects You. Please read
          Our Privacy Policy carefully before using Our Service. Links to Other
          Websites
          <View style={tw`pt-2`}></View>
          Our Service may contain links to third-party websites or services that
          are not owned or controlled by the Company. The Company has no control
          over and assumes no responsibility for, the content, privacy policies,
          or practices of any third-party websites or services. You further
          acknowledge and agree that the Company shall not be responsible or
          liable, directly or indirectly, for any damage or loss caused or
          alleged to be caused by or in connection with the use of or reliance
          on any such content, goods, or services available on or through any
          such web sites or services. We strongly advise You to read the terms
          and conditions and privacy policies of any third- party websites or
          services that You visit.
          <View style={tw`pt-2`}></View>
          Termination We may terminate or suspend Your access immediately,
          without prior notice or liability, for any reason whatsoever,
          including without limitation if You breach these Terms and Conditions.
          Upon termination, Your right to use the Service will cease
          immediately. Limitation of Liability Notwithstanding any damages that
          You might incur, the entire liability of the Company and any of its
          suppliers under any provision of this Terms and Your exclusive remedy
          for all of the foregoing shall be limited to the amount actually paid
          by You. To the maximum extent permitted by applicable law, in no event
          shall the Company or its suppliers be liable for any special,
          incidental, indirect, or consequential damages whatsoever (including,
          but not limited to, damages for loss of profits, loss of data or other
          information, for business interruption, for personal injury, loss of
          privacy arising out of or in any way related to the use of or
          inability to use the Service, third-party software and/or third-party
          hardware used with the Service, or otherwise in connection with any
          provision of this Terms), even if the Company or any supplier has been
          advised of the possibility of such damages and even if the remedy
          fails of its essential purpose. Some states do not allow the exclusion
          of implied warranties or limitation of liability for incidental or
          consequential damages, which means that some of the above limitations
          may not apply. In these states, each party&#39;s liability will be
          limited to the greatest extent permitted by law.
          <View style={tw`pt-2`}></View>
          &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer The Service
          is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and
          with all faults and defects without warranty of any kind. To the
          maximum extent permitted under applicable law, the Company, on its own
          behalf and on behalf of its Affiliates and its and their respective
          licensors and service providers, expressly disclaims all warranties,
          whether express, implied, statutory or otherwise, with respect to the
          Service, including all implied warranties of merchantability, fitness
          for a particular purpose, title and non-infringement, and warranties
          that may arise out of the course of dealing, course of performance,
          usage or trade practice. Without limitation to the foregoing, the
          Company provides no warranty or undertaking, and makes no
          representation of any kind that the Service will meet Your
          requirements, achieve any intended results, be compatible or work with
          any other software,
          <View style={tw`pt-2`}></View>
          applications, systems or services, operate without interruption, meet
          any performance or reliability standards or be error-free or that any
          errors or defects can or will be corrected. Without limiting the
          foregoing, neither the Company nor any of the company&#39;s provider
          makes any representation or warranty of any kind, express or implied:
          (i) as to the operation or availability of the Service, or the
          information, content, and materials or products included thereon; (ii)
          that the Service will be uninterrupted or error-free; (iii) as to the
          accuracy, reliability, or currency of any information or content
          provided through the Service; or (iv) that the Service, its servers,
          the content, or e-mails sent from or on behalf of the Company are free
          of viruses, scripts, trojan horses, worms, malware, timebombs or other
          harmful components.
          <View style={tw`pt-2`}></View>
          Some jurisdictions do not allow the exclusion of certain types of
          warranties or limitations on applicable statutory rights of a
          consumer, so some or all of the above exclusions and limitations may
          not apply to You. But in such a case the exclusions and limitations
          set forth in this section shall be applied to the greatest extent
          enforceable under applicable law.
          <View style={tw`pt-2`}></View>
          Governing Law The laws of the Country, excluding its conflicts of law
          rules, shall govern this Terms and Your use of the Service. Your use
          of the Application may also be subject to other local, state,
          national, or international laws. Disputes Resolution
          <View style={tw`pt-2`}></View>
          If You have any concerns or disputes about the Service, you agree to
          first try to resolve the dispute informally by contacting the Company.
          For European Union (EU) Users If You are a European Union consumer,
          you will benefit from any mandatory provisions of the law of the
          country in which you are resident.
          <View style={tw`pt-2`}></View>
          Severability and Waiver Severability If any provision of these Terms
          is held to be unenforceable or invalid, such provision will be changed
          and interpreted to accomplish the objectives of such provision to the
          greatest
          <View style={tw`pt-2`}></View>
          extent possible under applicable law and the remaining provisions will
          continue in full force and effect.
          <View style={tw`pt-2`}></View>
          Waiver Except as provided herein, the failure to exercise a right or
          to require performance of an obligation under these Terms shall not
          effect a party&#39;s ability to exercise such right or require such
          performance at any time thereafter nor shall the waiver of a breach
          constitute a waiver of any subsequent breach.
          <View style={tw`pt-2`}></View>
          Translation Interpretation These Terms and Conditions may have been
          translated if We have made them available to You on our Service. You
          agree that the original English text shall prevail in the case of a
          dispute.
          <View style={tw`pt-2`}></View>
          Changes to These Terms and Conditions We reserve the right, at Our
          sole discretion, to modify or replace these Terms at any time. If a
          revision is a material We will make reasonable efforts to provide at
          least 30 days&#39; notice prior to any new terms taking effect. What
          constitutes a material change will be determined at Our sole
          discretion.
          <View style={tw`pt-2`}></View>
          By continuing to access or use Our Service after those revisions
          become effective, You agree to be bound by the revised terms. If You
          do not agree to the new terms, in whole or in part, please stop using
          the website and the Service. Contact Us If you have any questions
          about these Terms and Conditions, You can contact us:
        </Container>
      </Center>
    </ScrollView>
  )
}

export default () => {
  const navigation = useNavigation()
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require('../assets/medicine.png')}
        //source={require('../components/images/doctors.png')}
        style={{ height: Dimensions.get('window').height / 3.2 }}
      >
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`bg-white absolute top-10 left-5 z-50 p-3
       rounded-full shadow-lg`}
          >
            <ArrowLeftIcon size={20} color='#00AA13' />
            {/* <Icon
              
              name='arrowLeft'
              type='antdesign'
              color='white'
            /> */}
            {/* <Icon
      as={Ionicons} 
      // style={{color:'#ffffff', fontSize:20}}
      name={Platform.OS ? 'arrowLeft' : 'arrowLeft'}
      size="5"
      color="red"
    /> */}
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={()=> navigation.navigate("HomeScreen")}
            style={[
              tw`absolute top-10 right-6 z-50 p-3
      rounded-full shadow-lg`,
              { backgroundColor: '#00AA13' },
            ]}
          >
            <Text style={tw`text-white`}>EN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.brandView}>
          <Icon
            as={Ionicons}
            style={{ color: '#ffffff', fontSize: 80 }}
            name={Platform.OS ? 'location-sharp' : 'location-sharp'}
            size='20'
            color='red'
          />
        </View>
      </ImageBackground>
      <Example />
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,

    //paddingBottom:200
  },
  brandViewText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonView: {
    flex: 1,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgoPassView: {
    height: 50,
    marginTop: 20,
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#f4511e',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 40,
  },
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  center: {},
})
