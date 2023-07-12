import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const ReceiverMessage = ({message}) => {
  return (
    <View 
    style={[tw`bg-purple-600 rounded-lg rounded-tr-none px-5 py-3
             mx-3 my-2`, {alignSelf:"flex-start", marginLeft:'auto'}]}
             >
                 {/* <Image
          style={tw`h-12 w-12 rounded-full absolute top-0 -left-14`}
        //  source={{uri:bookingDetails.job.image}}
          source={require('../components/images/emedlogo.png')}
          /> */}
      <Text style={tw`text-white`}>ReceiverMessage</Text>
    </View>
  )
}

export default ReceiverMessage

const styles = StyleSheet.create({})