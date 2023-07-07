import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
// import { useUserContext } from '../context/user_context'
// import { useProductsContext } from '../context/products_context'

const ChatRow = ({ bookingDetails }) => {
  
  const navigation = useNavigation()
  // console.log('bookingDetails', bookingDetails)

  // useEffect(() => {
  //     getAllBookings()

  //   }, [])

  // const getBookings = (user._id, bookings) =>{
  //     const newBookings = { ...bookings.flat}
  //     delete newBookings[]
  // }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Message', { bookingDetails })}
      style={[
        tw`flex-row items-center py-3 px-5 bg-white my-1 rounded-lg`,
        styleSheet.cardShadow,
      ]}
    >
      {/* <Image
        style={tw`h-16 w-16 rounded-full mr-4 `}
        //  source={{uri:bookingDetails.job.image}}
        source={require('../components/images/emedlogo.png')}
      /> */}
      <View>
        <Text style={tw`text-lg font-semibold`}> Saina BOT</Text>
        <Text>Say Hi</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ChatRow

const styleSheet = StyleSheet.create({
  cardShadow: {
    shadowColor: '000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
})
