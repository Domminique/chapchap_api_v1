import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  Foundation,
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'

const HeaderComponent = ({ title, callEnabled }) => {
  const navigation = useNavigation()
  return (
    <View style={tw`pt-8 pl-6 flex-row items-center justify-between`}>
      <View style={tw`flex flex-row items-center`}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={tw`p-2`}>
          <Ionicons name='chevron-back-outline' size={34} color='#00AA13' />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-bold pl-2`}>{title}</Text>
      </View>

      {callEnabled && (
        <TouchableOpacity style={tw`rounded-full mr-4 p-3 bg-red-200 `}>
          <Foundation style={tw``} name='telephone' size={30} color='#00AA13' />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({})
