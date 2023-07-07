import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native'
  import React from 'react'
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
  
  const data = [
    // {
    //   id: '4884',
    //   icon: 'person',
    //   location: 'FREE',
    //   destination: 'Manage, add, edit services. ',
    //   screen: 'ServiceScreen',
    // },
    {
      id: '123',
      icon: 'magnet',
      location: 'RAHISI - 500/= P/M',
      destination: 'Manage, add, edit services, Consultations, Appointments, Bookings, Orders',
      screen: '',
    },
    {
      id: '456',
      icon: 'cloud',
      location: 'BORA - 1000/= P/M',
      destination: 'Improve perfomance through Automation & predictions, in-app messaging, upload catalogs',
      screen: '',
    },
    {
      id: '459',
      icon: 'star',
      location: 'NZURI - 1500/= P/M',
      destination: 'Notifications, show and update availability, language, automate social media posts',
      screen: '',
    }
  ]
  
  const ProfileFavourites = () => {
    const navigation = useNavigation()
  
    const { isLoading, user } = useSelector((store) => store.user)
    const dispatch = useDispatch()
  
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
                size={40}
              />
              <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500 text-lg`}>{destination}</Text>
               
              </View>
            </TouchableOpacity>
          )}
        />
      </>
    )
  }
  
  export default ProfileFavourites
  
  const styles = StyleSheet.create({})
  