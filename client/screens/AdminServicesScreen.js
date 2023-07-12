
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image
  } from 'react-native'
  import React, { useState,useEffect } from 'react'
  //import { TouchableOpacity } from 'react-native-gesture-handler'
  import { Icon } from 'react-native-elements/dist/icons/Icon'
  //import tw from 'twrnc'
  import tw from 'tailwind-react-native-classnames'
  //import { useAppContext } from '../context/appContext'
  import { useNavigation } from '@react-navigation/native'
  //import { useUserContext } from '../context/user_context'
  //import { useProductsContext } from '../context/products_context'
  
  //import { useNavigation, useRoute } from '@react-navigation/native'
  import { useDispatch, useSelector } from 'react-redux'
  import { updateUser } from '../features/user/userSlice'
  import { translations } from '../translations/translations'
  import { I18n } from 'i18n-js'

import { getAllJobs } from '../features/allJobs/allJobsSlice'
import HeaderComponent from '../components/HeaderComponent'
import { Ionicons } from '@expo/vector-icons'; 
import Toast from 'react-native-root-toast'
import { Switch } from 'native-base'
import { editJob } from '../features/job/jobSlice'
  
  
  
  const AdminServicesScreen = () => {
    const {
        jobs,
        products,
        isLoading,
        page,
        totalJobs,
        numOfPages,
        search,
        searchStatus,
        searchType,
        sort,
      } = useSelector((store) => store.allJobs)
     
    
   
    
      useEffect(() => {
        dispatch(getAllJobs())
      }, [page, search, searchStatus, searchType, sort])
    
    
       
  
    const navigation = useNavigation()
  
    const { user } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const { cartItems, locale, total, amount } = useSelector(
      (store) => store.translation
    )
    const [language, setLanguage] = useState('English')
  
    const i18n = new I18n(translations)
   
    console.log(locale,"home")
   
    // Set the locale once at the beginning of your app.
    i18n.locale = locale
   
    // When a value is missing from a language it'll fallback to another language with the key present.
    i18n.enableFallback = true
    const data = [
      {
        id: '4884',
        icon: 'person',
        location: [i18n.t('become_provider')],
        destination: [i18n.t('add')],
        screen: 'ServiceScreen',
      },
      {
        id: '123',
        icon: 'calendar',
        location: [i18n.t('Consultations')],
        destination: [i18n.t('Appointments')],
        screen: 'ProfileAlert',
      },
      // {
      //   id: '456',
      //   icon: 'briefcase',
      //   location: 'My Notifications',
      //   destination: 'Notifications',
      //   screen: 'Chat',
      // },
      {
        id: '459',
        icon: 'key',
        location: [i18n.t('setting')],
        destination:  [i18n.t('settings')],
        screen: 'Settings',
      },
      {
        id: '467',
        icon: 'book',
        location: [i18n.t('termsOfService')], 
        destination: [i18n.t('terms')],
        screen: 'TermsScreen',
      },
      {
        id: '4564',
        icon: 'book',
        location: [i18n.t('terms')],
        destination: [i18n.t('termsOfService')],
        screen: 'TermsScreen',
      },
      {
        id: '4566',
        icon: 'home',
        location: [i18n.t('about')],
        destination: [i18n.t('aboutus')],
        screen: 'AboutUs',
      },
      {
        id: '4504',
        icon: 'help',
        location: [i18n.t('Support')],
        destination: [i18n.t('Support')],
        screen: 'SupportScreen',
      },
    ]

    console.log(products)
  
    //const { toggleSidebar, logoutUser, user } = useUserContext()
    return (
      <>
      <HeaderComponent title="All service Providers"/>
      <ScrollView style={tw`mx-4`}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          // ItemSeparatorComponent={() => <View style={tw`bg-gray-200  h-1`} />}
          ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200 `, { height: 1.5 }]} />
          )}
          renderItem={({ item: { _id,location, availability,imgUrl,image,verified, featured, destination,category,ApplicationStatus,description,jobType,name,phonenumber, icon, screen } }) => (
            <TouchableOpacity
              style={tw`flex-row items-center pb-2 pt-4`}
              // onPress={() => {
              //   navigation.navigate(screen)
              // }}
            >
              <Image
        source={{
          uri: image,
        }}
        className='h-12 w-12 rounded-full '
      />
              <View>
                <Text style={tw`font-semibold text-lg`}>{name}</Text>
                <Text style={tw`text-gray-500`}>Phone: 0{phonenumber}</Text>
                <Text style={tw`text-gray-500`}>Category: {category}</Text>
                <Text style={tw`text-gray-500`}>Status: {ApplicationStatus}</Text>
                <Text style={tw`text-gray-500`}>Description: { description}</Text>
                <Text style={tw`text-gray-500`}>Type: { jobType}</Text>
                {verified? (
          <Text style={tw`text-gray-500 font-extrabold`}>Verified: Yes</Text>
                ):(
                  <Text style={tw`text-gray-500 font-extrabold`}>Verified: No</Text>
                )}
                <View className="flex-row justify-between space-x-2">
              
    <View className='flex-row items-center space-x-4'>
          {/* <MapPinIcon color='gray' opacity={0.4} size={22} /> */}
          {verified ?  <Text className='text-xl text-gray-700 font-extrabold'>Verified: </Text> : 
            <Text className='text-lg text-gray-500 font-bold'>Not Verified </Text>}
        
        
          <Switch 
          value={verified}
          onValueChange={val => {
            // setOnDuty(val, ', OnDuty')
            // console.log(onDuty, "popo") 
            dispatch(
              editJob({
                jobId: _id,
                job: {verified:val},
              })
            )
          
          }
          
          
          }
         className='w-32'
          // defaultIsChecked 
          colorScheme="emerald" 
          size="lg" />
        </View>
    
              </View>
              </View>
             
            </TouchableOpacity>
          )}
        />
        </ScrollView>
      </>
    )
  }
  
  export default AdminServicesScreen
  
  const styles = StyleSheet.create({})
  