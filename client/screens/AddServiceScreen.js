import {
  StyleSheet,
  Text,
  View,
  Platform,
  // ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  StatusBar,
  Image,
} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
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
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'
import Toast from 'react-native-root-toast'


import { I18n } from 'i18n-js'
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused } from '@react-navigation/native';
import {
  GestureHandlerRootView,
  ScrollView // Note that this is not imported from react-native
} from 'react-native-gesture-handler';

import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../features/job/jobSlice'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import ModalDropdown from 'react-native-modal-dropdown';
import PhoneInput from 'react-native-phone-number-input';
 import { MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons'
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

const logisticsOptions = [
  'Motorcycle',
  'Bicycle',
  'Van',
  'Truck',
  'Container',
  'Drone',
  'Excavators',
  'Tractors',
  'Mkokoteni',
  'Helicopter'
]

const initialState = {
  name: '',
  email: '',
  password: '',
  phonenumber: '',
  isHustle: 'logistics',
  isLogistics: true,
  language: '',
}

const AddServiceScreen = () => {
 
  // Set the key-value pairs for the different languages you want to support. english, kiswahil, french, portuguese, arabic, amharic
  const translations = {
    en: {
      welcome: 'Category',
      and: 'Image',
      email: 'Tell us more about what you do... (atleast 255 words)',
      password: 'Price',
      Not_a_member_yet: 'Not a member yet ?',
      register: 'Type ',
      termsOfService: 'terms of service',
      privacyPolicy: 'privacy policy',
      continue: 'Continue',
      login: 'Add',
      terms: 'By logging in or registering you agree to our ',
      phonenumber: 'Contact number ',
      name: 'Business name',
      already_a_member: 'Already a member ?',
      reset_password :' Pick an image',
      forgot_your_password: 'Forgot your password?',
      non:"",
      category:"Choose your category", 

      vehicleNumber:"Vehicle number", 
      driversName:"Driver's name",
      productName:"Product/Service name", 
      productDescription:'Description of your product/service/art',
      inventory:"No. of items"

      
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
  const [isOpen, setIsOpen] = useState(false)
  const [verifyOpen, setVerifyOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onClosed = () => setVerifyOpen(false)
  const cancelRef = React.useRef(null)
  const [show, setShow] = useState(false)
  const navigation = useNavigation()
  // const [values, setValues] = useState(initialState)
  const { user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const isFocused = useIsFocused();


  const [name, setName] = useState(null)
  const [description, setDescription] = useState()
  const [phonenumber, setPhonenumber] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [availability, setAvailability] = useState(null)
  const [price, setPrice] = useState(null)
  const [jobType, setJobType] = useState(null)
  const [open, setOpen] = useState(false)
  const [category, setValue] = useState(null)
  const [image, setImage] = useState(null);

  const [isPressed, setIsPressed] = useState(false)
  const phoneInput = useRef(null);
  const [value, setValues] = useState("");

  //images data frame

  const [logisticsType, setLogisticsType] = useState(null)
  const [vehicleNumber, setVehicleNumber] = useState(null)
  const [driversName, setDriversName] = useState(null)
  const [productImage, setProductImage] = useState(null);
  const [logisticsImage, setLogisticsImage] = useState(null);
  const [serviceImage, setServiceImage] = useState(null);
  const [productDescription, setProductDescription] = useState(null);
  const [productName, setProductName] = useState(null);
  const [driversImage, setDriversImage] = useState(null);
  const [inventory, setInventory] = useState(null);

  

  const [catalog, setCatalog] = useState([ ]);


  const setItems = () => {
    if(jobType === 'Logistics') return
    setCatalog(catalog =>[...catalog, {productImage,productName,productDescription, price, inventory}])

  }
  
  
  

  // const toggleMember = () => {
  //   setValues({ ...values, isMember: !values.isMember })
  // }
  const incompleteform = !description || !name || !jobType || !category

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !description) {
      Toast.show('Please fill out all fields', {
        duration: Toast.durations.LONG,
      })
      return
    }

    const id =+ 1


    //https://ongatarongaionline.co.ke/api/v1
    // const url = 'https://savannaspace.co.ke/playstoreicon.png'
    // const images =[{
    //   id,
    //   vehicleNumber,
    //   productName,
    //   productDescription,
    //   driversName,
    //   driversImage,
    //   logisticsType, //new schema to configure
    //   productImage,
    //   logisticsImage,
    //   serviceImage,
    //   price,
    //   inventory
    //   }]
    


    const lng = user.location.coords.longitude
    const lat = user.location.coords.latitude
    // const image = 'https://savannaspace.co.ke/playstoreicon.png'
    // const imageUrl = 'https://savannaspace.co.ke/medicine.png'
    const values = {
      driversImage,
      vehicleNumber,
      logisticsImage,
      name,
      availability,
      price,
      description,
      imageUrl:image,
      phonenumber,
      category,
      jobType,
      user,
      catalog,
      image,
      lng,
      lat
    }
    console.log('values', values)

    dispatch(createJob(values))
    
    navigation.goBack()
  }


  const  AddImage = () =>{


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
      // setImage(result.uri);
      setImage(result.assets[0].uri) 
    }
  };

  const pickVehicleImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setLogisticsImage(result.assets[0].uri);
    }
  };
  const pickDriverImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setDriversImage(result.assets[0].uri);
    }
  };
  const pickProductImage  = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProductImage(result.assets[0].uri);
    }
  };


  console.log("catalog", catalog)
 
  return (

    
    <ScrollView
    
    nestedScrollEnabled={true}
      style={{ flex: 1, backgroundColor: '#ffffff' }}
      showsVerticalScrollIndicator={true}
    >
 <TouchableOpacity
          
          onPress={()=>navigation.goBack()}
          style={tw`bg-white absolute top-10 left-5 z-50 p-3
     rounded-full shadow-lg`}
        >
          <ArrowLeftIcon size={20} color='#00AA13' />
        </TouchableOpacity>

        {image ? (
           <ImageBackground
           source={{ uri: image }}
          //  source={require('../assets/doctors.png')}
           // source={require('../components/images/oro1.png')}
           style={{ height: Dimensions.get('window').height / 2.8}}
         > 
         </ImageBackground>
          // <Image source={{ uri: image }}  className='h-40 w-3/4 rounded m-2' />
        ):(
          <ImageBackground
        source={require('../assets/doctors.png')}
        // source={require('../components/images/oro1.png')}
        style={{ height: Dimensions.get('window').height / 2.8}}
      > 
      </ImageBackground>
        ) }
     


      <View >
        <View style={{ padding: 30 }}>
          {/* <Text className='text-center font-extrabold text-4xl text-[#00AA13]'>
            {i18n.t('welcome')}
          </Text> */}

          <View>
         
            <FormControl>
              <Stack space={2}>
              {/* <Stack>
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
                  </Stack> */}


                  <View>
                    <Text className="text-center font-bold"> Tell us more about you do</Text>
                  </View>
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
                 <PhoneInput
                   ref={phoneInput}
                   defaultValue={value}
                   defaultCode="KE"
                   layout="first"
                   onChangeText={(text) => {
                    setPhonenumber(text);
                   }}
                   onChangeFormattedText={setPhonenumber}
                   withDarkTheme
                   withShadow
                   autoFocus
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
                  <Radio style={tw` p-1 text-xs `} value='Logistics' my={1}>
                  Logistics service provider
                  </Radio>
                  <Radio style={tw`p-1 text-xs`} value='Shop' my={1}>
                  Farm Project
                  </Radio>
                  <Radio style={tw` p-1  text-xs`} value='Service' my={1}>
                  Farm Expert
                  </Radio>
                  <Radio style={tw` p-1  text-xs`} value='Artisan' my={1}>
                   Farm Product
                  </Radio>
                 
                </View>
              </Radio.Group>
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
                  {jobType !== 'Logistics' ? (        
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
                  dropdownStyle={tw`-mt-4 h-64 text-lg `}
                  dropdownTextStyle={tw`font-extrabold text-lg`}   

                   className="p-4 text-xl"
                   onSelect={(idx, value)=>setValue(value)}
                   isFullWidth={true}
                   />
                    </View>
                    
                  </Stack>
                  ):(
                  <Stack>
                    <FormControl.Label style={{ borderColor: '#00AA13' }}>
                      {i18n.t('welcome')}
                    </FormControl.Label>

                             
                 <View >
                    <ModalDropdown 
                    // defaultValue = 'MEDICAL PHYSICIAN'
                   options={logisticsOptions}
                   style={tw`w-full p-3 rounded-xl  bottom-0 bg-gray-400` }
                  //  value={category}
                  // style={styles.dropdown_2}
                  textStyle={tw`font-extrabold `}
                  dropdownStyle={tw`-mt-4 h-64 text-lg `}
                  dropdownTextStyle={tw`font-extrabold text-lg`}   

                   className="p-4 text-xl"
                   onSelect={(idx, value)=>setValue(value)}
                   isFullWidth={true}
                   />
                    </View>
                    
                  </Stack>)}



          {jobType === 'Logistics' && (    <>
          
                   <Stack>
                  <FormControl.Label> {i18n.t('vehicleNumber')}</FormControl.Label>
                  <Input
                   
                    placeholder={i18n.t('vehicleNumber')}
                    variant='underlined'
                    p={2}
                    name='vehicleNumber'
                    value={vehicleNumber}
                    multiline={true}
                    style={{  fontSize: 16}}
                    onChangeText={setVehicleNumber}
                  />
                </Stack>   
                <Stack>
                  <FormControl.Label> {i18n.t('driversName')}</FormControl.Label>
                  <Input
                   
                    placeholder={i18n.t('driversName')}
                    variant='underlined'
                    p={2}
                    name='driversName'
                    value={driversName}
                    multiline={true}
                    style={{fontSize: 16}}
                    onChangeText={setDriversName}
                  />
                </Stack>   
                <Stack>
                  <FormControl.Label style={{ borderColor: '#00AA13' }}>
                    {i18n.t('productDescription')}
                  </FormControl.Label>
                  <Input
                    
                    variant='underlined'
                    p={6}
                    placeholder={i18n.t('productDescription')}
                    name='productDescription'
                    multiline={true}
                    style={{  fontSize: 16}}
                    colorScheme='coolGray'
                    value={productDescription}
                    onChangeText={setProductDescription}
                  
                  />
                </Stack>
                </>)}

              

                 

                {jobType === 'Logistics' ? (<>
                <Stack>
                  <FormControl.Label> {i18n.t('password')}</FormControl.Label>
                  <Input
                   
                    placeholder={i18n.t('password')}
                    variant='underlined'
                    p={2}
                    name='price'
                    value={price}
                    multiline={true}
                    style={{  fontSize: 16}}
                    onChangeText={setPrice}
                  />
                </Stack>
                <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => pickDriverImage()}
          style={tw`flex flex-row justify-between bg-black px-4 py-3 rounded-full `}
        >
          {/* <Icon name='ambulance' type='font-awesome' color='white' size={16} /> */}
          <Text style={tw`pl-1 text-white text-center`}>Pick Driver Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>  pickVehicleImage()}
          style={tw`flex flex-row justify-between bg-black px-4 py-3 rounded-full `}
        >
          {/* <Icon name='ambulance' type='font-awesome' color='white' size={16} /> */}
          <Text style={tw`pl-1 text-white text-center`}>Pick Vehicle Image</Text>
        </TouchableOpacity>
       
      </View>
      
      </>):(
        <>
         
       {catalog.map((swipe) => (
             <>
               {!isPressed && (
              <View
                  key={swipe._id}
                  className='border-t border-gray-200 flex-row items-center space-x-3 bg-white py-2 px-5'
                >
                  <Text>{swipe.inventory} X</Text>
                  <Image
                    source={{ uri: swipe?.productImage }}
                    //source={{uri:"http://192.168.43.19:80/uploads/emedlogo.png" }}
                    className='h-12 w-12 rounded-full'
                  />
                  <Text className='flex-1'>{swipe?.name}</Text>
  
                  <Text className='text-gray-600 text-extrabold'>
                    Ksh. {parseInt(swipe?.price)}
                    {/* <Currency
                      quantity={parseInt(items[0]?.price)}
                      currency='KES'
                    /> */}
                  </Text>
  
                  <TouchableOpacity>
                    <Text
                      className='text-[#3e0d08] text-xs'
                    //   onPress={() => dispatch(removeFromBasket({ id: key }))}
                    >
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
                )}
                
               </>
          ))}

        <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
      
          
        <TouchableOpacity
          onPress={() =>  setIsPressed(!isPressed)}
          className={`flex flex-row justify-between bg-black px-4 py-3 rounded-full  ${
            isPressed && 'bg-white -mt-4'
          }`}
         
        >
          {/* <Icon name='ambulance' type='font-awesome' color='white' size={16} /> */}
          <Text style={tw`pl-1 text-white text-sm text-center`}>Add a product/service to your catalog</Text>
        </TouchableOpacity>
       
      </View> 
      
      {isPressed && (
        <>
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
                    fontSize: 16,
                  }}
                >
                  <Text onPress={pickProductImage}> 
                    {' '}
                    
                      {i18n.t('reset_password')}
                      {i18n.t('non')}
                  </Text>
                </Text>
              </Text>
              <View style={[tw`bg-gray-400 `, { height: 0.5 }]} />
                  </Stack>
        <Stack>
                  <FormControl.Label> {i18n.t('productName')}</FormControl.Label>
                  <Input
                   
                    placeholder={i18n.t('productName')}
                    variant='underlined'
                    p={2}
                    name='productName'
                    value={productName}
                    multiline={true}
                    style={{  fontSize: 16}}
                    onChangeText={setProductName}
                  />
                </Stack>
                <Stack>
                  <FormControl.Label style={{ borderColor: '#00AA13' }}>
                    {i18n.t('productDescription')}
                  </FormControl.Label>
                  <Input
                    
                    variant='underlined'
                    p={2}
                    placeholder={i18n.t('productDescription')}
                    name='productDescription'
                    multiline={true}
                    style={{  fontSize: 16}}
                    colorScheme='coolGray'
                    value={productDescription}
                    onChangeText={setProductDescription}
                  
                  />
                </Stack>
                <Stack>
 <FormControl.Label> {i18n.t('password')}</FormControl.Label>
 <Input
  
   placeholder={i18n.t('password')}
   variant='underlined'
   p={2}
   name='price'
   value={price}
   multiline={true}
   style={{  fontSize: 16}}
   onChangeText={setPrice}
 />
</Stack>

              {jobType !== 'Service' && (
 
<Stack>
 <FormControl.Label> {i18n.t('inventory')}</FormControl.Label>
 <Input
  
   placeholder={i18n.t('inventory')}
   variant='underlined'
   p={2}
   name='inventory'
   value={inventory}
   multiline={true}
   style={{  fontSize: 16}}
   onChangeText={setInventory}
 />
</Stack>
              )}
               
                <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >

<TouchableOpacity
          style={tw`flex flex-row justify-evenly px-10 py-3 rounded-full `}
        >
          {/* <Icon name='home' type='ionicon' color='black' size={16} /> */}
          <Text style={tw` pl-1 text-center text-white`}>My Shop</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          onPress={() => { 
             setItems()
             setIsPressed(!isPressed)} }
          style={tw`flex flex-row justify-between bg-black py-3 rounded-full `}
        >
          {/* <Icon name='ambulance' type='font-awesome' color='white' size={16} /> */}
          <Text style={tw`pl-4 pr-2 text-white text-sm text-center`}>Add to catalog</Text>
        </TouchableOpacity>
       
      </View>
        </>
      )}
      </>)}


      
               

              </Stack>
            </FormControl>

            <HStack style={styles.forgoPassView} space={0}>
              
            </HStack>
           
            <TouchableOpacity
              onPress={handleSubmit}
              disabled={incompleteform}
              style={[
                tw`w-full p-3 rounded-xl  bottom-0 `,
                incompleteform ? tw`bg-gray-400` : { backgroundColor: '#00AA13' },
              ]}
              // className='rounded-lg bg-[#00AA13] p-4'
            >
              <Text className='text-center text-white text-lg  font-bold'>
               
                {i18n.t('continue')}
              </Text>
            </TouchableOpacity>

           

          
          </View>
        </View>
      </View>


    </ScrollView>
  )
}

export default AddServiceScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#6638f0',
    padding: 8,
  },
  cell: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
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
  dropdown_1: {
    flex: 1,
    top: 32,
    left: 8,
  },
  dropdown_2: {
    alignSelf: 'flex-end',
    width: 150,
    marginTop: 32,
    right: 8,
    borderWidth: 0,
    borderRadius: 3,
    backgroundColor: 'cornflowerblue',
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 150,
    height: 300,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_2_image: {
    marginLeft: 4,
    width: 30,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
  },
  dropdown_3: {
    width: 150,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_3_dropdownTextStyle: {
    backgroundColor: '#000',
    color: '#fff'
  },
  dropdown_3_dropdownTextHighlightStyle: {
    backgroundColor: '#fff',
    color: '#000'
  },
  dropdown_4: {
    margin: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_4_dropdown: {
    width: 100,
  },
  dropdown_5: {
    margin: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 1,
  },
  dropdown_6: {
    flex: 1,
    left: 8,
  },
})
