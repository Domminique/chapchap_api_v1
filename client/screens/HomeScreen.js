import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
// import logo from '../assets/splash.png'
// import NavOptions from '../components/NavOptions'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import { GOOGLE_MAPS_APIKEY } from '@env'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals, getCartItems } from '../features/cart/cartSlice'
import {
  setOrigin,
  setDestination,
  setTravelTimeInformation,
} from '../features/nav/navSlice'
import NavFavourites from '../components/NavFavourites'
import { Icon } from 'react-native-elements'
import {
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  SquaresPlusIcon
} from 'react-native-heroicons/outline'
import * as Icons from 'react-native-heroicons/solid'
import { SparklesIcon } from 'react-native-heroicons/solid'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import {
  selectBasketItems,
  selectBasketTotal,
} from '../features/basket/basketSlice'
import * as Location from 'expo-location'
import SearchModal from './SearchModal'
import { updateUser } from '../features/user/userSlice'
import ActionRow from '../components/ActionRow'
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage'
import { addUserLocationToLocalStorage } from '../utils/localStorage'
import { translations } from '../translations/translations'
import { I18n } from 'i18n-js'
import Toast from 'react-native-root-toast'
import Map from '../components/Map'
import GeoDatas from '../utils/GeoDatas'
import ProductsList from '../components/ProductsList'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const { cartItems, isLoading,locale, total, amount } = useSelector(
    (store) => store.translation
  )
  // const { cartItems, isLoading, total, amount } = useSelector(
  //   (store) => store.cart
  // )
  const { user } = useSelector((store) => store.user)
  const navigation = useNavigation()
  const items = useSelector(selectBasketItems)
  const [userInfo, setUserInfo] = useState(null);
   const i18n = new I18n(translations)
 
   console.log(locale,"home")
 
   // Set the locale once at the beginning of your app.
   i18n.locale = locale
 
   // When a value is missing from a language it'll fallback to another language with the key present.
   i18n.enableFallback = true
   // To see the fallback mechanism uncomment line below to force app to use Japanese language.
   // i18n.locale = 'ja';
 
  
  useEffect(() => {
    getLocalUser();
  }, []);



  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("user");
    if (!data) return null;
    // return JSON.parse(data);
    console.log(data,'user info data home')
    setUserInfo(JSON.parse(data));
  };
  

  console.log(user,'user info home')
  console.log(userInfo,'user data home')

  return (
    <SafeAreaView className=''>
    {/* Header */}
    <View className='flex-row pb-3 items-center mx-4 space-x-2  '>
    <TouchableOpacity 
    onPress={async () => await AsyncStorage.removeItem("@user")}
    // onPress={() => navigation.navigate('Settings')}
    >
        <SquaresPlusIcon size={35} color='#00AA13' />
      </TouchableOpacity>
      
      <View className='w-1/2 '>

      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className='-top-2'
      >
        <Text className='rounded-md font-bold text-lg -bottom-2 pr-12'>
          {' '}
          {items.length}
        </Text>
        <Icons.BellAlertIcon size={35} color='#00AA13' />
      </TouchableOpacity>
     
    
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <UserIcon size={35} color='#00AA13' />
      </TouchableOpacity>
    </View>
    <ScrollView>
    
      <View className=' px-6'>
        <Text className='font-bold text-gray-400 text-xl'> Welcome</Text>
        <Text className='font-bold text-2xl text-gray-600 '>
          {user?.name}
          {/* <Button
        title="remove local store"
        onPress={async () => await AsyncStorage.removeItem("@user")}
      /> */}
        </Text>
      </View >
      <View className='pt-6'>

      </View>
      <View className='flex-row p-2 space-x-4 pr-6 pl-6  bg-gray-200'>
        
       
            <TextInput
            onPressIn={() => navigation.navigate('SearchModal')}
            placeholder={i18n.t('search')}
            keyboardType='default'
          />
       <MagnifyingGlassIcon color='gray' />
      </View>
      <View className='pt-2'>

</View>
         <Categories />
         <FeaturedRow
         title={i18n.t('home')}
         description={i18n.t('description')}
         id='133'
       />
      {/* <ProductsList /> */}
      
    </ScrollView>
    
  </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

