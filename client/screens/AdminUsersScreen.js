
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
  import { getAllUsers, updateUser } from '../features/user/userSlice'
  import { translations } from '../translations/translations'
  import { I18n } from 'i18n-js'

import { getAllJobs, getUsers } from '../features/allJobs/allJobsSlice'
import HeaderComponent from '../components/HeaderComponent'
import { Ionicons } from '@expo/vector-icons'; 
import Toast from 'react-native-root-toast'
  
  
  
  const AdminUsersScreen = () => {
    const {
        jobs,
        products,
        isLoading,
        page,
        users,
        totalJobs,
        numOfPages,
        search,
        searchStatus,
        searchType,
        sort,
      } = useSelector((store) => store.allJobs)
      // const {
      //   users
      // } = useSelector((store) => store.user)
    
   
    
      useEffect(() => {
        dispatch(getAllJobs())
      }, [page, search, searchStatus, searchType, sort])
    
      useEffect(() => {
        dispatch(getUsers())
      }, [users])
       
      
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

    console.log(users, "users")
  
    //const { toggleSidebar, logoutUser, user } = useUserContext()
    return (
      <>
      <HeaderComponent title="All Users"/>
      <ScrollView style={tw`mx-2`}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          // ItemSeparatorComponent={() => <View style={tw`bg-gray-200  h-1`} />}
          ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200 `, { height: 1.5 }]} />
          )}
          renderItem={({ item: { email,name,phonenumber, role, icon,isVerified, image, screen } }) => (<>
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
        className='h-24 w-24 rounded-full '
      />
              <View>
                <Text style={tw`font-semibold text-lg`}>{name}</Text>
                <Text style={tw`text-gray-500`}>Phone: 0{phonenumber}</Text>
                <Text style={tw`text-gray-500`}>email: {email}</Text>
                <Text style={tw`text-gray-500`}>language: {language}</Text>
                <Text style={tw`text-gray-500`}>role: { role}</Text>
                {isVerified? (
          <Text style={tw`text-gray-500 font-extrabold`}>Verified: Yes</Text>
                ):(
                  <Text style={tw`text-gray-500 font-extrabold`}>Verified: No</Text>
                )}
               
                <View className="flex-row justify-between space-x-2">
              </View>
              </View>
              
            </TouchableOpacity>
            {/* <TouchableOpacity 
            onPress={()=>
                Toast.show('User Deleted', {
                    duration: Toast.durations.LONG,
                  })}
            // onPress={navigation.navigate(screen)}
             className={`flex m-2 flex-1 justify-center items-center
            rounded-lg space-x-2 ` }
            >
              <Ionicons name="md-close-circle-sharp" size={30} color="red" />
              <Text>Delete User</Text> 
            </TouchableOpacity> */}
            </>
          )}
        />
        </ScrollView>
      </>
    )
  }
  
  export default AdminUsersScreen
  
  const styles = StyleSheet.create({})
  