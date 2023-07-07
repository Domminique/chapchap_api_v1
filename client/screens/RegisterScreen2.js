import {
    StyleSheet,
    Text,
    View,
    Platform,
    ScrollView,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    ToastAndroid,
    StatusBar,
  } from 'react-native'
  import React, { useState, useEffect, useRef } from 'react'
  import tw from 'tailwind-react-native-classnames'
  import {
    Icon,
    Item,
    Label,
    Input,
    Stack,
    FormControl,
    Button,
    Center,
    NativeBaseProvider,
    Checkbox,
    HStack,
    Spinner,
    AlertDialog,
  } from 'native-base'
  import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'
  import { useNavigation } from '@react-navigation/native'
  import { useDispatch, useSelector } from 'react-redux'
  import { loginUser, registerUser } from '../features/user/userSlice'
  import Toast from 'react-native-root-toast'
  import { I18n } from 'i18n-js'
  import { translations } from '../translations/translations'
  import { addItem } from '../features/translation/translationSlice'
  import PhoneInput from 'react-native-phone-number-input';
  import { SafeAreaView } from 'react-native'
  import AsyncStorage from '@react-native-async-storage/async-storage'
  import * as WebBrowser from "expo-web-browser";
  import * as Google from "expo-auth-session/providers/google";
  
  const initialState = {
    name: '',
    email: '',
    password: '',
    phonenumber: '',
    isMember: true,
    language: '',
  }
  
  const RegisterScreen = () => {
  
    let [locale, SetLocale] = useState('en')
    const [language, setLanguage] = useState('English')
    const i18n = new I18n(translations)
    i18n.locale = locale
    i18n.enableFallback = true
   
    const [isOpen, setIsOpen] = React.useState(false)
    const [verifyOpen, setVerifyOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const onClosed = () => setVerifyOpen(false)
    const cancelRef = React.useRef(null)
    const [show, setShow] = useState(false)
    const navigation = useNavigation()
    const [values, setValues] = useState(initialState)
    const [SpinnerIsOpen, setSpinnerIsOpen] = useState(false)
    const [userInfo, setUserInfo] = useState(null);
    const [value, setValue] = useState("")
    const phoneInput = useRef(null);
    const { user, msg, isLoading } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const [isPressed, setIsPressed] = useState(false)

    const [token, setToken] = useState("");
    // 1070976752482-tfucikkoiu9hn881j30f70iqor7ck69g.apps.googleusercontent.com

    // 1070976752482-nc2cneor6bqt0gpd3nkhqn0muvmhlrtd.apps.googleusercontent.com


  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "1070976752482-nc2cneor6bqt0gpd3nkhqn0muvmhlrtd.apps.googleusercontent.com",
    iosClientId: "",
    webClientId: "",
    expoClientId:"1070976752482-tfucikkoiu9hn881j30f70iqor7ck69g.apps.googleusercontent.com"
  });
    
    const toggleMember = () => {
      setValues({ ...values, isMember: !values.isMember })
    }
    const handleEmail = (text) => {
      setValues({ ...values, email: text })
    }
    const handleName = (text) => {
      setValues({ ...values, name: text })
    }
    const handlePhone = (text) => {
      setValues({ ...values, phonenumber: text })
    }
    const handlePassword = (text) => {
      setValues({ ...values, password: text })
      console.log(values)
    }
    
    useEffect(() => {
      getLocalUser();
    }, []);
  
  
  
    // const getLocalUser = async () => {
    //   const data = await AsyncStorage.getItem("@user");
    //   if (!data) return null;
    //   // return JSON.parse(data);
    //   setUserInfo(JSON.parse(data));
    // };
    const { height } = Dimensions.get('window');
  
    console.log(userInfo, "userinfo")
  
    
  
    useEffect(() => {
      handleEffect();
    }, [response, token]);
    
    async function handleEffect() {
      const user = await getLocalUser();
      console.log("user", user);
      if (!user) {
        if (response?.type === "success") {
          // setToken(response.authentication.accessToken);
          getUserInfo(response.authentication.accessToken);
        }
      } else {
        setUserInfo(user);
        console.log("loaded locally");
      }
    }
    
    const getLocalUser = async () => {
      const data = await AsyncStorage.getItem("@user");
      if (!data) return null;
      return JSON.parse(data);
    };
    
    const getUserInfo = async (token) => {
      if (!token) return;
      try {
        const response = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
    
        const user = await response.json();
        await AsyncStorage.setItem("@user", JSON.stringify(user));
        setUserInfo(user);
        if (isMember) {
          dispatch(loginUser(user))
          dispatch(addItem(locale))
          return
        }
        dispatch(registerUser(user))
        dispatch(addItem(locale))
        setSpinnerIsOpen(SpinnerIsOpen)
        const { } = values
       
    
      } catch (error) {
        // Add your own error handler here
      }
    };


    useEffect(() => {
      setValues({ ...values, language: 'English' })
         console.log('verificationMsg', msg)
  
      // if(msg==="Please verify your email"){
      //    // setIsOpen(!isOpen)
      //     setVerifyOpen(!verifyOpen)
      //     return;
      // }   
      if (userInfo) {
        navigation.navigate("MainReminder")
      }
    }, [user,msg,userInfo, navigation])
  
    const onSubmit = (e) => {
      e.preventDefault()
      const { name, email, password, language, phonenumber, isMember } = values
      if (!email || !password || (!isMember && !name)) {
        Toast.show('Please fill out all fields', {
          duration: Toast.durations.LONG,
        })
        return
      }
      setSpinnerIsOpen(!SpinnerIsOpen)
      if (isMember) {
        dispatch(loginUser({ email: email, password: password, language }))
        dispatch(addItem(locale))
        return
      }
      dispatch(registerUser({ name, email, phonenumber, password, language }))
      dispatch(addItem(locale))
      setSpinnerIsOpen(SpinnerIsOpen)
      const { } = values
    }
  
  
     console.log('Msg', msg)
  
  
    // Verify Password alerbox
  
    function AlertDialogComponent() {
      const [isOpen, setIsOpen] = React.useState(true);
      const onClose = () => setIsOpen(false);
      const cancelRef = React.useRef();
      return <Center>
          <AlertDialog 
          motionPreset="fade" 
          leastDestructiveRef={cancelRef} 
          onClose={onClose} 
          isOpen={isOpen} 
          isCentered>
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Success! Confirm email</AlertDialog.Header>
              <AlertDialog.Body className="text-lg">
              A verification link has been sent to your email.Please verify your email and proceed to login.
              </AlertDialog.Body>
              <AlertDialog.Footer>
                {/* <Button ref={cancelRef} >
                  No
                </Button> */}
                <Button onPress={onClose} className="bg-[#00AA13] w-24" ml={6}>
                  Login
  
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
          {/* <Button onPress={() => setIsOpen(!isOpen)}>Discard</Button> */}
        </Center>;
    }
    
    function Example() {
      return <Center flex={1}>
          <AlertDialogComponent />
        </Center>;
    }
  
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#ffffff' }}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
              
              onPress={() => 
                setIsPressed(!isPressed)}
              // onPress={() => setVerifyOpen(!verifyOpen)}
              
              style={[
                tw`absolute top-10  right-5 z-50 p-3
       rounded-full shadow-lg `,
                { backgroundColor: '#00AA13' },
              ]}
              //  style={tw`bg-red-900 absolute top-10 right-5 z-50 p-3
              //   rounded-full shadow-lg`}
            >
              <Text style={tw`text-white uppercase`}>{locale}</Text>
              {/* <Text style={tw`text-white`}>{language}</Text> */}
            </TouchableOpacity>
  
  
            
        <ImageBackground
          source={require('../assets/chapchap4.png')}
          // source={require('../components/images/oro1.png')}
          style={{ height: Dimensions.get('window').height / 2.2 }}
        >
          
          
            <TouchableOpacity
              
              onPress={() => 
                setIsPressed(!isPressed)}
              // onPress={() => setVerifyOpen(!verifyOpen)}
              
              style={[
                tw`absolute top-10 right-5 z-50 p-3
       rounded-full shadow-lg `,
                { backgroundColor: '#00AA13' },
              ]}
              //  style={tw`bg-red-900 absolute top-10 right-5 z-50 p-3
              //   rounded-full shadow-lg`}
            >
              <Text style={tw`text-white uppercase`}>{locale}</Text>
              {/* <Text style={tw`text-white`}>{language}</Text> */}
            </TouchableOpacity>
  
            {isPressed && (
              <View
                className='bg-white px-4 absolute top-24 space-y-1 right-2 z-50 p-3
       shadow-lg rounded-sm'
              >
                <View className='flex-row items-left space-x-2 '>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(addItem(locale))
                      setLanguage('Swahili')
                      setValues({ ...values, language: 'Swahili' })
                      SetLocale('sw')
                      setIsPressed(!isPressed)
                    }}
  
                    // english, kiswahil, french, portuguese, arabic, amharic
                  >
                    <Text className='font-extrabold  text-lg'>Swahili</Text>
                  </TouchableOpacity>
                </View>
                <View className='flex-row items-center space-x-2'>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(addItem(locale))
                      setLanguage('French')
                      setValues({ ...values, language: 'French' })
                      SetLocale('fr')
                      setIsPressed(!isPressed)
                    }}
                    // onPress={removeItemFromBasket}
                  >
                    <Text className='font-extrabold  text-lg'>French</Text>
                  </TouchableOpacity>
                </View>
                <View className='flex-row items-center space-x-2'>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(addItem(locale))
                      setLanguage('Portuguese')
                      setValues({ ...values, language: 'Portuguese' })
                      SetLocale('pt')
                      setIsPressed(!isPressed)
                    }}
                  >
                    <Text className='font-extrabold  text-lg'>Portuguese</Text>
                  </TouchableOpacity>
                </View>
                <View className='flex-row items-center space-x-2'>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(addItem(locale))
                      setLanguage('Arabic')
                      setValues({ ...values, language: 'Arabic' })
                      SetLocale('ar')
                      setIsPressed(!isPressed)
                    }}
                  >
                    <Text className='font-extrabold  text-lg'>Arabic</Text>
                  </TouchableOpacity>
                </View>
                <View className='flex-row items-center space-x-2'>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(addItem(locale))
                      setLanguage('Amharic')
                      setValues({ ...values, language: 'Amharic' })
                      SetLocale('am')
                      setIsPressed(!isPressed)
                    }}
                  >
                    <Text className='font-extrabold  text-lg'>Amharic</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          
          <View style={styles.brandView}>
            
          
            <Text  className="text-3xl font-extrabold text-white"> chapchap</Text>
          </View>
        </ImageBackground>
  
        
  
        {/* setVerifyOpen */}
        
  
        {/* Terms of service */}
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>
              Please read these terms and conditions carefully before using Our
              Service
            </AlertDialog.Header>
            <AlertDialog.Body>
              <Text>
                Interpretation and Definitions{' '}
                <Text
                  style={{ color: '#00AA13', fontStyle: 'italic', padding: 20 }}
                >
                  Interpretation The words of which the initial letter is
                  capitalized have meanings defined under the following
                  conditions.
                </Text>{' '}
                <Text style={{ color: '#00AA13', fontStyle: 'italic' }}>
                  The following definitions shall have the same meaning regardless
                  of whether they appear in singular or in the plural.{' '}
                </Text>
              </Text>
              <View style={tw`pt-2`}></View>
              Definitions : For the purposes of these Terms and Conditions:
              Application means the software program provided by the Company
              downloaded by You on any electronic device, named ongata Rongai
              online Application Store means the digital distribution service
              operated and developed by Apple Inc. (Apple App Store) of Google
              Inc. (Google Play Store) in which the Application has been
              downloaded.
              <View style={tw`pt-2`}></View>
              Affiliate means an entity that controls, is controlled by or is
              under common control with a party, whereas &quot;control&quot; means
              ownership of 50% or more of the shares, equity interest or other
              securities entitled to vote for the election of directors or other
              managing authority.
              <View style={tw`pt-2`}></View>
              Country refers to Kenya: Company (referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in
              this Agreement) refers to chapchap. Device means any device that
              can access the Service such as a computer, a cellphone or a digital
              tablet. Service refers to the Application. Terms and Conditions
              (also referred to as &quot;Terms&quot;) mean these Terms and
              Conditions that form the entire agreement between You and the
              Company regarding the use of the Service.
              <View style={tw`pt-2`}></View>
              Third-party Social Media Service means any services or content
              (including data, information, products or services) provided by a
              third party that may be displayed, included or made available by the
              Service. You means the individual accessing or using the Service, or
              the company, or other legal entity on behalf of which such
              individual is accessing or using the Service, as applicable.
              <View style={tw`pt-2`}></View>
              Acknowledgment: These are the Terms and Conditions governing the use
              of this Service and the agreement that operates between You and the
              Company. These Terms and Conditions set out the rights and
              obligations of all users regarding the use of the Service. Your
              access to and use of the Service is conditioned on Your acceptance
              of and compliance with these Terms and Conditions. These Terms and
              Conditions apply to all visitors, users and others who access or use
              the Service.
              <View style={tw`pt-2`}></View>
              By accessing or using the Service You agree to be bound by these
              Terms and Conditions. If You disagree with any part of these Terms
              and Conditions then You may not access the Service. You represent
              that you are over the age of 10. The Company does not permit those
              under 10 to use the Service. Your access to and use of the Service
              is also conditioned on Your acceptance of and compliance with the
              Privacy Policy of the Company. Our Privacy Policy describes Our
              policies and procedures on the collection, use, and disclosure of
              Your personal information when You use the Application or the
              Website and tells You about Your privacy rights and how the law
              protects You. Please read Our Privacy Policy carefully before using
              Our Service. Links to Other Websites
              <View style={tw`pt-2`}></View>
              Our Service may contain links to third-party websites or services
              that are not owned or controlled by the Company. The Company has no
              control over and assumes no responsibility for, the content, privacy
              policies, or practices of any third-party websites or services. You
              further acknowledge and agree that the Company shall not be
              responsible or liable, directly or indirectly, for any damage or
              loss caused or alleged to be caused by or in connection with the use
              of or reliance on any such content, goods, or services available on
              or through any such web sites or services. We strongly advise You to
              read the terms and conditions and privacy policies of any third-
              party websites or services that You visit.
              <View style={tw`pt-2`}></View>
              Termination We may terminate or suspend Your access immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if You breach these Terms and
              Conditions. Upon termination, Your right to use the Service will
              cease immediately. Limitation of Liability Notwithstanding any
              damages that You might incur, the entire liability of the Company
              and any of its suppliers under any provision of this Terms and Your
              exclusive remedy for all of the foregoing shall be limited to the
              amount actually paid by You. To the maximum extent permitted by
              applicable law, in no event shall the Company or its suppliers be
              liable for any special, incidental, indirect, or consequential
              damages whatsoever (including, but not limited to, damages for loss
              of profits, loss of data or other information, for business
              interruption, for personal injury, loss of privacy arising out of or
              in any way related to the use of or inability to use the Service,
              third-party software and/or third-party hardware used with the
              Service, or otherwise in connection with any provision of this
              Terms), even if the Company or any supplier has been advised of the
              possibility of such damages and even if the remedy fails of its
              essential purpose. Some states do not allow the exclusion of implied
              warranties or limitation of liability for incidental or
              consequential damages, which means that some of the above
              limitations may not apply. In these states, each party&#39;s
              liability will be limited to the greatest extent permitted by law.
              <View style={tw`pt-2`}></View>
              &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer The
              Service is provided to You &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; and with all faults and defects without warranty of
              any kind. To the maximum extent permitted under applicable law, the
              Company, on its own behalf and on behalf of its Affiliates and its
              and their respective licensors and service providers, expressly
              disclaims all warranties, whether express, implied, statutory or
              otherwise, with respect to the Service, including all implied
              warranties of merchantability, fitness for a particular purpose,
              title and non-infringement, and warranties that may arise out of the
              course of dealing, course of performance, usage or trade practice.
              Without limitation to the foregoing, the Company provides no
              warranty or undertaking, and makes no representation of any kind
              that the Service will meet Your requirements, achieve any intended
              results, be compatible or work with any other software,
              <View style={tw`pt-2`}></View>
              applications, systems or services, operate without interruption,
              meet any performance or reliability standards or be error-free or
              that any errors or defects can or will be corrected. Without
              limiting the foregoing, neither the Company nor any of the
              company&#39;s provider makes any representation or warranty of any
              kind, express or implied: (i) as to the operation or availability of
              the Service, or the information, content, and materials or products
              included thereon; (ii) that the Service will be uninterrupted or
              error-free; (iii) as to the accuracy, reliability, or currency of
              any information or content provided through the Service; or (iv)
              that the Service, its servers, the content, or e-mails sent from or
              on behalf of the Company are free of viruses, scripts, trojan
              horses, worms, malware, timebombs or other harmful components.
              <View style={tw`pt-2`}></View>
              Some jurisdictions do not allow the exclusion of certain types of
              warranties or limitations on applicable statutory rights of a
              consumer, so some or all of the above exclusions and limitations may
              not apply to You. But in such a case the exclusions and limitations
              set forth in this section shall be applied to the greatest extent
              enforceable under applicable law.
              <View style={tw`pt-2`}></View>
              Governing Law The laws of the Country, excluding its conflicts of
              law rules, shall govern this Terms and Your use of the Service. Your
              use of the Application may also be subject to other local, state,
              national, or international laws. Disputes Resolution
              <View style={tw`pt-2`}></View>
              If You have any concerns or disputes about the Service, you agree to
              first try to resolve the dispute informally by contacting the
              Company. For European Union (EU) Users If You are a European Union
              consumer, you will benefit from any mandatory provisions of the law
              of the country in which you are resident.
              <View style={tw`pt-2`}></View>
              Severability and Waiver Severability If any provision of these Terms
              is held to be unenforceable or invalid, such provision will be
              changed and interpreted to accomplish the objectives of such
              provision to the greatest
              <View style={tw`pt-2`}></View>
              extent possible under applicable law and the remaining provisions
              will continue in full force and effect.
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
              do not agree to the new terms, in whole or in part, please stop
              using the website and the Service. Contact Us If you have any
              questions about these Terms and Conditions, You can contact us:
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant='unstyled'
                  colorScheme='coolGray'
                  onPress={onClose}
                  ref={cancelRef}
                >
                  Cancel
                </Button>
                <Button className="bg-[#00AA13]"   onPress={onClose}>
                  I agree
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
  
  
        <AlertDialog
          leastDestructiveRef={cancelRef}
          verifyOpen={verifyOpen}
          onClosed={onClosed}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>
             Verify email
            </AlertDialog.Header>
            <AlertDialog.Body>
              <Text>
                Interpretation and Definitions{' '}
                <Text
                  style={{ color: '#00AA13', fontStyle: 'italic', padding: 20 }}
                >
                  Interpretation The words of which the initial letter is
                  capitalized have meanings defined under the following
                  conditions.
                </Text>{' '}
                <Text style={{ color: '#00AA13', fontStyle: 'italic' }}>
                  The following definitions shall have the same meaning regardless
                  of whether they appear in singular or in the plural.{' '}
                </Text>
              </Text>
             
              <View style={tw`pt-2`}></View>
              By continuing to access or use Our Service after those revisions
              become effective, You agree to be bound by the revised terms. If You
              do not agree to the new terms, in whole or in part, please stop
              using the website and the Service. Contact Us If you have any
              questions about these Terms and Conditions, You can contact us:
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button.Group space={2}>
                <Button
                  variant='unstyled'
                  colorScheme='coolGray'
                  onPress={onClose}
                  ref={cancelRef}
                >
                  Cancel
                </Button>
                <Button className="bg-[#00AA13] w-24" onPress={onClose}>
                  I agree
                </Button>
              </Button.Group>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
  
  
  
  
  
        <SafeAreaView  style={styles.buttonView}>
          <View style={{ padding: 40 }}>
            <Text className='text-center font-extrabold text-2xl text-[#00AA13] pb-16'>
              {i18n.t('welcome')}
            </Text>
            
            <View>
              
  
              
            <TouchableOpacity
              onPress={() => {
                promptAsync();
              }}
              disabled={!request}
              className='rounded-lg bg-[#FBBC05] p-4'
            >
                <Text className='text-center text-white text-l font-bold'>
               {values.isMember
                 ? `Sign in with Google`
                 : `Sign up with Google`}  
             </Text>
             
           
             
 
            </TouchableOpacity>  

              {/* <TouchableOpacity
                onPress={onSubmit}
                className='rounded-lg bg-[#00AA13] p-4'
              >
                 {SpinnerIsOpen ? 
                  <Spinner className="items-center " color={"#fff"} />: 
                 ( 
                  <Text className='text-center text-white text-l font-bold'>
                 {values.isMember
                   ? `${i18n.t('login')}`
                   : `${i18n.t('register')}`}
                    
               </Text>) 
               }
               
              
              
              </TouchableOpacity>
  
              <Text 
              onPress={() => 

              navigation.navigate("HomeScreen")
                // setVerifyOpen(!verifyOpen)
                //setIsOpen(!isOpen)
              }
              className='text-center text-[#00AA13] text-xl font-bold pt-4 pb-4'>SKIP </Text> */}
  
              <Text className='pt-2 text-gray-600'>
                {i18n.t('terms')}
                <Text
                  onPress={() => 
                    // setVerifyOpen(!verifyOpen)
                    setIsOpen(!isOpen)
                  }
                  style={{ color: '#00AA13', fontStyle: 'italic', padding: 20 }}
                >
                  {i18n.t('termsOfService')}
                </Text>{' '}
                {i18n.t('and')}
                <Text
                  onPress={() => 
                    // setVerifyOpen(!verifyOpen)
                   setIsOpen(!isOpen)
                  }
  
  
                  
                  style={{ color: '#00AA13', fontStyle: 'italic'}}
                >
                  {' '}
                  {i18n.t('privacyPolicy')}
                </Text>
              </Text>
            </View>
          </View>
        </SafeAreaView>
  
  
      </ScrollView>
    )
  }
  
  export default RegisterScreen
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,
      backgroundColor: '#6638f0',
      padding: 8,
    },
    brandView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // paddingTop: 100,
  
      //paddingBottom:200
    },
    brandViewText: {
      color: '#ffffff',
      fontSize: 30,
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
      backgroundColor: '#00AA13',
      width: Dimensions.get('window').width / 2,
      justifyContent: 'center',
      borderRadius: 50,
      marginBottom: 20,
    },
  })
  