import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView  } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import {useDispatch,  useSelector } from 'react-redux'
import  {clearCart, removeItem, increase,calculateTotals , decrease} from '../features/cart/cartSlice'

const ModalScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
  return (
  <SafeAreaView style={tw`bg-white h-full pl-4 pt-8`}>
       
  <Text style={tw`mt-2 text-lg font-semibold  `}>Remove All Items From Your Cart ?</Text>

<View
   style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
 >
   <TouchableOpacity 
   
   onPress={()=> {
    navigation.goBack()
    // navigation.navigate('Modal')
    dispatch(clearCart())}
  } 
     style={tw`flex flex-row justify-between bg-black w-28 px-4 py-3 rounded-full `}
   >
     <Icon name='home' type='font-awesome' color='white' size={16} />
     <Text style={tw`pl-5 text-white text-center`}>Confirm</Text>
   </TouchableOpacity>
   <TouchableOpacity
    onPress={()=> {
        navigation.goBack()
        // dispatch(clearCart())
    }
      } 
     style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full `}
   >
     <Icon name='compass' type='ionicon' color='black' size={16} />
     <Text style={tw` pl-1 text-center`}>Cancel</Text>
   </TouchableOpacity>
  
 </View>
</SafeAreaView>
  )
}

export default ModalScreen

const styles = StyleSheet.create({})