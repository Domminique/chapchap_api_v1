import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
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



const ProfileFavourites = () => {


  const navigation = useNavigation()

  const { isLoading, user } = useSelector((store) => store.user)
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

  //const { toggleSidebar, logoutUser, user } = useUserContext()
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        // ItemSeparatorComponent={() => <View style={tw`bg-gray-200  h-1`} />}
        ItemSeparatorComponent={() => (
          <View style={[tw`bg-gray-200 `, { height: 0.5 }]} />
        )}
        renderItem={({ item: { location, destination, icon, screen } }) => (
          <TouchableOpacity
            style={tw`flex-row items-center pb-2 pt-4`}
            onPress={() => {
              navigation.navigate(screen)
            }}
          >
            <Icon
              style={tw`mr-4 rounded-full bg-gray-300 p-3`}
              name={icon}
              type='ionicon'
              color='#00AA13'
              size={18}
            />
            <View>
              <Text style={tw`font-semibold text-lg`}>{location}</Text>
              <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  )
}

export default ProfileFavourites

const styles = StyleSheet.create({})
