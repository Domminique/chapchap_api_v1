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
import React, { useState, useEffect } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
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
  Radio,
} from 'native-base'
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'
import Toast from 'react-native-root-toast'


import { I18n } from 'i18n-js'
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused } from '@react-navigation/native';

import {
  handleChange,
  clearValues,
  createJob,
  editJob,
  deleteJob,
} from '../features/job/jobSlice'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import ModalDropdown from 'react-native-modal-dropdown'

// To allow scroll on dropdownpicker
DropDownPicker.setListMode("SCROLLVIEW");

const data= [
  'Lamps',
    'Carpets',
    'Mirrors',
    'Plants and Planters',
    'Wall & Minimalist Art',
    'Frames',
    'Candles Diffusers',
    'Home Fragrance',
    'Kitchen Ware',
    'Baskets and Fabrics',
  
]

const initialState = {
  name: '',
  email: '',
  password: '',
  phonenumber: '',
  isMember: true,
  language: '',
}

const EditServiceScreen = () => {
    const {
        // isLoading,
        // name,
        // email,
        // phonenumber,
        // position,
        // skills,
        // experience,
        // goals,
        // gender,
        // proximity,
        // language,
        // mentorLocation,
        // proximityOptions,
        // availability,
    
        // company,
        // jobLocation,
        // jobType,
        jobTypeOptions,
        status,
        statusOptions,
        isEditing,
        editJobId,
      } = useSelector((store) => store.job)
  const [items, setItems] = useState([
    { label: 'AMBULANCE SERVICES', value: 'AMBULANCE SERVICES' },
    { label: 'MEDICAL PHYSICIAN', value: 'MEDICAL PHYSICIAN' },
    { label: 'PRIMARY PHYSICIAN', value: 'PRIMARY PHYSICIAN' },
    { label: 'GYNAECOLOGIST', value: 'GYNAECOLOGIST' },
    { label: 'PAEDRIATRICIAN', value: 'PAEDRIATRICIAN' },
    { label: 'DENTIST', value: 'DENTIST' },
    { label: 'OPHTHALMOGIST', value: 'OPHTHALMOGIST' },
    { label: 'DERMATOLOGIST', value: 'DERMATOLOGIST' },
    { label: 'ENT DOCTOR', value: 'ENT DOCTOR' },
    { label: 'PSYCHIATRIST', value: 'PSYCHIATRIST' },
    { label: 'NURSING CARE SERVICES', value: 'NURSING CARE SERVICES' },
    { label: 'CLINICAL SERVICES', value: 'CLINICAL SERVICES' },
    { label: 'MIDWIFE SERVICES', value: 'MIDWIFE SERVICES' },
    {
      label: 'FAMILY PLANNING SERVICES',
      value: 'FAMILY PLANNING SERVICES',
    },
    
    { label: 'STI TREATMENT SERVICE', value: 'STI TREATMENT SERVICE' },
    { label: 'BASIC LAB SERVICES', value: 'BASIC LAB SERVICES' },
    { label: 'ABORTION CARE SERVICES', value: 'ABORTION CARE SERVICES' },
    { label: 'HIV/PREP/PEP SERVICES', value: 'HIV/PREP/PEP SERVICES' },
    { label: 'NUTRITIONIST SERVICES', value: 'NUTRITIONIST SERVICES' },
    { label: 'GBV RECOVERY SERVICES', value: 'GBV RECOVERY SERVICES' },
    { label: 'PHYSIOTHERAPIST SERVICES', value: 'PHYSIOTHERAPIST SERVICES' },
  ])
  // Set the key-value pairs for the different languages you want to support. english, kiswahil, french, portuguese, arabic, amharic
  const translations = {
    en: {
      welcome: 'Category',
      and: 'Image',
      email: 'Description (atleast 255 words)',
      password: 'Fee per Hour',
      Not_a_member_yet: 'Not a member yet ?',
      register: 'Type of service',
      termsOfService: 'terms of service',
      privacyPolicy: 'privacy policy',
     
      login: 'Update',
      terms: 'By logging in or registering you agree to our ',
      phonenumber: 'Phone number ',
      name: 'Name',
      already_a_member: 'Already a member ?',
      reset_password :'Change  image',
      forgot_your_password: 'Forgot your password?',
      non:"",

      
    },

    sw: {
      welcome: 'Karibu',
      and: 'na',
      email: 'Barua Pepe',
      password: 'Anwani ya Nenosiri',
      Not_a_member_yet: 'Bado si Mwanachama?',
      register: 'Jiandikishe',
      termsOfService: 'sheria na Masharti',
      privacyPolicy: 'Sera ya faragha',
      register: 'Jiandikishe',
      login: 'Ingia',
      terms: 'Kwa kuingia au kujiandikisha, unakubali ',
      phonenumber: 'Nambari ya simu',
      name: 'Jina',
      already_a_member: 'Tayari ni mwanachama?',
      reset_password :'Reset Password',
      forgot_your_password: 'Forgot your password?',
      non:""
    },
    am: {
      welcome: 'እንኳን ደህና መጣህ',
      email: 'ኢሜይል',
      password: 'ፕስወርድ',
      Not_a_member_yet: 'እስካሁን አባል አይደሉም ',
      already_a_member: 'አስቀድሞ አባል',
      register: 'መመዝገብ',
      termsOfService: 'አተገባበሩና ​​መመሪያው',
      privacyPolicy: 'የ ግል የሆነ',
      login: 'ግባ',
      terms: 'በመግባት ወይም በመመዝገብ በአገልግሎታችን ተስማምተዋል። ',
      phonenumber: 'ስልክ ቁጥር',
      name: 'ስም',
      and: 'እና',
      reset_password :'Reset Password',
      forgot_your_password: 'Forgot your password?',
      non:""
    },
    pt: {
      welcome: 'Bem-vindo',
      email: 'O email',
      password: 'Senha',
      Not_a_member_yet: 'Ainda não é membro?',
      already_a_member: 'Já é um membro?',
      register: 'Registro',
      termsOfService: 'termos de serviço',
      privacyPolicy: 'política de Privacidade',
      login: 'Conecte-se',
      terms: 'ao entrar ou se registrar você concorda para ',
      phonenumber: 'Número de telefone',
      name: 'Nome',
      and: 'e',
      reset_password :'Reset Password',
      forgot_your_password: 'Forgot your password?',
      non:""
    },

    ar: {
      welcome: 'أهلا بك',
      email: 'البريد الإلكتروني',
      password: 'كلمه السر',
      Not_a_member_yet: 'لست عضوا حتى الآن؟',
      already_a_member: 'عضوا فعلا؟',
      register: 'شروط الخدمة',
      termsOfService: 'الأحكام والشروط',
      privacyPolicy: 'سياسة الخصوصية',
      login: 'تسجيل الدخول',
      terms: 'عن طريق تسجيل الدخول    أو التسجيل فإنك توافق ',
      phonenumber: 'رقم الهاتف',
      name: 'اسم',
      and: 'و',
      reset_password :'Reset Password',
      forgot_your_password: 'Forgot your password?',
      non:""
    },
    fr: {
      welcome: 'Bienvenue',
      email: 'Courriel',
      password: 'Ie mot de passe',
      Not_a_member_yet: 'Pas encore membre ?',
      already_a_member: 'Déjà membre?',
      register: "S'inscrire",
      termsOfService: "conditions d'utilisation",
      privacyPolicy: 'Politique de confidentialité',
      login: 'Connexion',
      terms: 'En vous connectant ou en vous inscrivant, vous acceptez ',
      phonenumber: 'Numéro de téléphone',
      name: 'Nom',
      and: 'et',
      reset_password :'Reset Password',
      forgot_your_password: 'Forgot your password?',
      non:""
    },
  }
//   const {
//     params: {
//       id,
//       logoUrl,
//       imgUrl,
//       title,
//       rating,
//       genre,
//       address,
//       short_description,
//       dishes,
//       long,
//       lat,
//       profession,
//       name
//     },
//   } = useRoute()


const {params} = useRoute() 
  let [locale, SetLocale] = useState('en')

  const [language, setLanguage] = useState('English')

  const i18n = new I18n(translations)

  // console.log(Localization.locale)

  // Set the locale once at the beginning of your app.
  i18n.locale = locale

  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.enableFallback = true
  // To see the fallback mechanism uncomment line below to force app to use Japanese language.
  // i18n.locale = 'ja';

  console.log(language, locale, i18n.t('welcome'))
  const [isOpen, setIsOpen] = React.useState(false)
  const [verifyOpen, setVerifyOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const onClosed = () => setVerifyOpen(false)
  const cancelRef = React.useRef(null)
  const [show, setShow] = useState(false)
  const navigation = useNavigation()
  // const [values, setValues] = useState(initialState)
  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const isFocused = useIsFocused();


  const [name, setName] = useState(params.title)
  const [description, setDescription] = useState(params.short_description)
  const [phonenumber, setPhonenumber] = useState(params.phonenumber)
  const [imageUrl, setImageUrl] = useState(params.imgUrl)
  const [price, setPrice] = useState(params.price)
  const [jobType, setJobType] = useState(params.genre)
  const [open, setOpen] = useState(false)
  const [category, setValue] = useState(params.category)
  const [image, setImage] = useState(params.imgUrl);

  const [availability, setAvailability] = useState(false)
  const [featured, setFeatured] = useState(false)
  const [verified, setVerified] = useState(false)
  

  const [isPressed, setIsPressed] = useState(false)

  // const toggleMember = () => {
  //   setValues({ ...values, isMember: !values.isMember })
  // }
//   const incompleteform = !description || !name || !jobType || !category
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !description) {
      Toast.show('Please fill out all fields', {
        duration: Toast.durations.LONG,
      })
      return
    }
    const url = 'http://192.168.43.19:80/uploads/emedlogo.png'
    const images = [
      {
        name: name,
        description: description,
        price: price,
        url: url,
        id: user._id,
      },
    ]

    const id = params.id
    const productId = params.id
    const lng = user.location.coords.longitude
    const lat = user.location.coords.latitude
    const values = {
     
      name,
      price,
      description,
      imageUrl,
      phonenumber,
      category,
      jobType,
      featured,
      availability,
      // user,
      images,
      image,
      lng,
      lat,
      verified,
    }
    // console.log('edit values', values)
    // dispatch(editJob(values))

    dispatch(
        editJob({
          jobId: productId,
          job: values,
        })
      )
    // createJob(values)
    navigation.goBack()
  }

  function AlertDialogComponent() {
    const [isOpen, setIsOpen] = React.useState(true);
  
    const onClose = () => setIsOpen(false);
  
    const cancelRef = React.useRef();
    return <Center>
        <AlertDialog motionPreset="fade" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Success! Confirm email</AlertDialog.Header>
            <AlertDialog.Body>
            A verification link has been sent to your email.Please verify your email and proceed to login.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              {/* <Button ref={cancelRef} >
                No
              </Button> */}
              <Button onPress={onClose} colorScheme="green" ml={6}>
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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

console.log(params, "params")
  return (
    <ScrollView
    contentContainerStyle={{ flexGrow: 1 }}
    nestedScrollEnabled={true}
      style={{ flex: 1, backgroundColor: '#ffffff' }}
      showsVerticalScrollIndicator={false}
    >

<TouchableOpacity
          
          onPress={()=>navigation.goBack()}
          style={tw`bg-white absolute top-10 left-5 z-50 p-3
     rounded-full shadow-lg`}
        >
          <ArrowLeftIcon size={20} color='#00AA13' />
        </TouchableOpacity>
       
           <ImageBackground
           source={{ uri:image }}
          //  source={require('../assets/doctors.png')}
           // source={require('../components/images/oro1.png')}
           style={{ height: Dimensions.get('window').height / 2.8}}
         > 
         </ImageBackground>
        
      {/* Terms of service */}
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>
            Are you sure about this action? 
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Text className='text-center font-extrabold text-lg text-gary-500'>
              This action is permanent, please note that once a service is deleted it cannot be recovered
             
            
            </Text>
           
           
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
              <Button colorScheme='danger' onPress={()=>  
                {
                  dispatch(deleteJob(params.id))
                  navigation.goBack()
                  }}>
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
              <Button colorScheme='danger' onPress={onClose}>
                I agree
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>





      <View >
        <View style={{ padding: 30 }}>
          <Text className='text-center font-extrabold text-2xl text-[#00AA13]'>
            {i18n.t('login')} 
          </Text>

          <View>
            <FormControl>
              <Stack space={2}>
              <Stack>
                    <FormControl.Label style={{ borderColor: '#00AA13' }}>
                      {i18n.t('and')}
                    </FormControl.Label>
                   
                                                       
                    <Text>
                
                   {i18n.t('non')}
                <Text
                  style={{
                    color: '#00AA13',
                    fontWeight: '900',
                    fontStyle: 'normal',
                    fontSize: 25,
                  }}
                >
                  <Text onPress={pickImage}> 
                    {' '}
                    
                      {i18n.t('reset_password')}
                      {i18n.t('non')}
                  </Text>
                </Text>
              </Text>
              <View style={[tw`bg-gray-400 `, { height: 0.5 }]} />

              
                  </Stack>
                  <Stack>
                    <FormControl.Label style={{ borderColor: '#00AA13' }}>
                      {i18n.t('name')}
                    </FormControl.Label>
                    <Input
                      
                      placeholder={i18n.t('name')}
                      variant='underlined'
                      p={2}
                      name='name'
                      id='name'
                      value={name}
                      multiline={true}
                      colorScheme='coolGray'
                      style={{  fontSize: 16}}
                      onChangeText={setName}
                    />
                  </Stack>
                
              
                  <Stack>
                    <FormControl.Label style={{ borderColor: '#00AA13' }}>
                      {i18n.t('phonenumber')}
                    </FormControl.Label>
                    <Input
                      
                      variant='underlined'
                      p={2}
                      placeholder={i18n.t('phonenumber')}
                      value={phonenumber}
                      name='phonenumber'
                      keyboardType='numeric'
                      multiline={true}
                      style={{  fontSize: 16}}
                      onChangeText={setPhonenumber}
                    />
                  </Stack>
                  <Stack>
                    <FormControl.Label style={{ borderColor: '#00AA13' }}>
                      {i18n.t('register')} 
                    </FormControl.Label>
                    <Radio.Group
                name='myRadioGroup'
                accessibilityLabel='favorite number'
                value={jobType}
                onChange={(nextValue) => {
                  setJobType(nextValue)
                }}
              >
                <View style={tw`text-xs justify-between  w-5/6 `}>
                  <Radio style={tw` p-1 text-xs `} value='Doctor' my={1}>
                    Doctor
                  </Radio>
                  <Radio style={tw`p-1 text-xs`} value='Ambulance' my={1}>
                    Ambulance
                  </Radio>
                  <Radio style={tw` p-1  text-xs`} value='Service' my={1}>
                    Service
                  </Radio>
                </View>
              </Radio.Group>
                  </Stack>
                  <Stack>
                    <FormControl.Label style={{ borderColor: '#00AA13' }}>
                      {i18n.t('welcome')}
                    </FormControl.Label>

                   
          <View >
                    <ModalDropdown 
                    // defaultValue = 'MEDICAL PHYSICIAN'
                   options={data}
                   style={tw`w-full p-3 rounded-xl  bottom-0 bg-gray-400` }
                  //  value={category}
                  // style={styles.dropdown_2}
                  textStyle={tw`font-extrabold`}
                  dropdownStyle={tw`w-64 -mt-4 h-64 text-lg`}


                   className="p-4 text-xl"
                   onSelect={(idx, value)=>setValue(value)}
                   
                   />
                    </View>
                    
                  </Stack>
               
                <Stack>
                  <FormControl.Label style={{ borderColor: '#00AA13' }}>
                    {i18n.t('email')}
                  </FormControl.Label>
                  <Input
                    
                    variant='underlined'
                    p={6}
                    placeholder={i18n.t('email')}
                    name='email'
                    multiline={true}
                    style={{  fontSize: 16}}
                    colorScheme='coolGray'
                    value={description}
                    onChangeText={setDescription}
                  
                  />
                </Stack>
                <Stack>
                  <FormControl.Label> {i18n.t('password')}</FormControl.Label>
                  <Input
                   
                    placeholder={i18n.t('password')}
                    variant='underlined'
                    p={2}
                    name='price'
                    value={price.toString()}
                    multiline={true}
                    style={{ fontSize: 16}}
                    onChangeText={setPrice}
                  />
                </Stack>
              </Stack>
            </FormControl>

            <HStack style={styles.forgoPassView} space={0}>
              
            </HStack>
            <HStack className="">
              
             
              {user==="Success! Please check your email to verify account" && (
               <Example /> 
              )}
             
            </HStack>
            <TouchableOpacity
              onPress={handleSubmit}
              //disabled={incompleteform}
            //   style={[
            //     tw`w-full p-3 rounded-xl  bottom-0 `,
            //     incompleteform ? tw`bg-gray-400` : { backgroundColor: '#00AA13' },
            //   ]}
              className='rounded-lg bg-[#00AA13] p-4'
            >
              <Text className='text-center text-white text-l font-bold'>
               
                {i18n.t('login')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> 
              { 
                setIsOpen(!isOpen)
               
              }
                
              
              }
              //disabled={incompleteform}
            //   style={[
            //     tw`w-full p-3 rounded-xl  bottom-0 `,
            //     incompleteform ? tw`bg-gray-400` : { backgroundColor: '#00AA13' },
            //   ]}
              className='rounded-lg bg-[#aa0009] m-4 p-4'
            >
              <Text className='text-center text-white text-l font-bold'>
               
               Delete service
              </Text>
            </TouchableOpacity>

           

          
          </View>
        </View>
      </View>


    </ScrollView>
  )
}

export default EditServiceScreen

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
    paddingTop: 100,

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
