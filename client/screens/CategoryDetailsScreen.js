import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import logo from '../assets/splash.png'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useNavigation, useRoute } from '@react-navigation/native'
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
} from 'react-native-heroicons/outline'
import * as Icons from 'react-native-heroicons/solid'
// import Image1 from '../components/images/logo.jpg'
// import Image2 from '../components/images/car.png'
// import Image3 from '../components/images/medicine.png'

import { SparklesIcon } from 'react-native-heroicons/solid'
import Categories from '../components/Categories'
import CategoryFeaturedRow from '../components/CategoryFeaturedRow'
import AllCategories from '../components/AllCategories'
import AllCategoryFeaturedRow from '../components/AllCategoryFeaturedRow'
import AllServiceCategories from '../components/AllServiceCategories'
import AllDoctorsCategories from '../components/AllDoctorsCategories'
import AllAmbulanceCategories from '../components/AllAmbulanceCategories'

import MapScreen from '../components/MapScreen'


//import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";

const CategoryDetailsScreen = ({ imgUrl, title }) => {
  const { cartItems, isLoading, total, amount } = useSelector(
    (store) => store.cart
  )
  const { user } = useSelector((store) => store.user)

  const { params } = useRoute()
  const navigation = useNavigation()

  const { origin, destination,travelTimeInformation } = useSelector((store) => store.nav);
  //   //const { cartItems, total, amount } = useSelector((store ) =>store.cart)
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(calculateTotals());
  // },[cartItems]);

  // useEffect(()=>{
  //    dispatch(getCartItems())
  // },[])

  // if(isLoading){
  //   return  <Text
  //   style={tw`mt-2 text-lg font-semibold pl-4 pt-8`}>Loading ...</Text>
  // }

 

  console.log('Params', params)

  if (params.title === 'Artisan' || params.title === 'Service' || params.title === 'Shop' ) {
    return (
      <SafeAreaView>
        <View className='relative'>
          <Image
            source={require('../assets/chapchap5.png')}
            className='w-full h-48 bg-gray-300 p-4'
          />

          <TouchableOpacity
            onPress={navigation.goBack}
            className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
          >
            <Icons.ArrowLeftIcon size={20} color='#00AA13' />
          </TouchableOpacity>
        </View>

        {/* Body */}

        <ScrollView>
          {/* categories */}

          {/* {params.title === 'Doctor' &&  */}

          {params.title === 'Professional' ? (
            <AllDoctorsCategories />
          ) : (
            <AllServiceCategories />
          )}

          {/* {params.title === 'Ambulance' ? (
          <AllServiceCategories />
        ) : (
          <View />
        )} */}

          {/* <AllServiceCategories />

          <AllCategories /> */}

          {/* featured */}
          <AllCategoryFeaturedRow
            title={params.title}
            description={`${params.title}s`}
            id='133'
          />
          {/* <FeaturedRow 
         title='Featured'
         description='Paid placements from our partners'
         id='123'  
         />
          <FeaturedRow 
         title='Discounts'
         description= "Everyone's been enjoying these juicy discounts"
         id='143'  
         /> */}

          {/* <FeaturedRow 
         title='Offers near you!'
         description='Why not support your local businesses'
         id='133'  
         /> */}

          <View className='p-16'></View>
        </ScrollView>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView>
        {/* <View className='relative'>
          <Image
            source={require('../assets/doctors.png')}
            className='w-full h-48 bg-gray-300 p-4'
          />

          <TouchableOpacity
            onPress={navigation.goBack}
            className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
          >
            <Icons.ArrowLeftIcon size={20} color='#00AA13' />
          </TouchableOpacity>
        </View> */}

        {/* Body */}

        <View>
          {/* categories */}

          <AllAmbulanceCategories />

       
<MapScreen />
          {/* <AllCategoryFeaturedRow
            title={params.title}
            description={`${params.title} near you`}
            id='133'
          /> */}
          {/* <FeaturedRow 
         title='Featured'
         description='Paid placements from our partners'
         id='123'  
         />
          <FeaturedRow 
         title='Discounts'
         description= "Everyone's been enjoying these juicy discounts"
         id='143'  
         /> */}

          {/* <FeaturedRow 
         title='Offers near you!'
         description='Why not support your local businesses'
         id='133'  
         /> */}

          <View className='p-16'>
            <Text> </Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default CategoryDetailsScreen

const styles = StyleSheet.create({})
