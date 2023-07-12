import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
// import SafeViewAndroid from '../SafeViewAndroid'
import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'

import {
  Icon,
  Item,
  Label,
  Input,
  Stack,
  FormControl,
  Button,
  Center,
  NativeBaseProvider,
  Checkbox,
  HStack,
  Spinner,
  AlertDialog,
} from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser, forgotPassword, 
  resetPassword, verify, sendNotification } from '../features/user/userSlice'
import Toast from 'react-native-root-toast';

const initialState = {
  title:'',
  body: '',

}

const PushNotifications = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [values, setValues] = useState(initialState)

    const handleTitle = (text) => {
      setValues({ ...values, title: text })
    }
    const handleBody = (text) => {
      setValues({ ...values, body: text })
    }

    const onSubmit = (e) => {
      e.preventDefault()
      const { title, body } = values
      if (!title ) {
        //toast.error('Please fill out all fields');
        Toast.show('Please fill out the field', {
          duration: Toast.durations.LONG,
        })
        //ToastAndroid.show('Please fill out all fields', ToastAndroid.SHORT);
        return
      }
     
      dispatch(sendNotification({title, body}))
      console.log({title, body})
    }
  return (
    <ScrollView
    className="bg-[#1A2F44] flex-1 pt-6" >
      <View className="m-10 space-y-2">
     
      <Text className="pt-12 text-xl text-center uppercase text-white font-bold">
        Send Notification messages to drive user reengagement and retention</Text>
      {/* <Text className="text-center  text-white ">
       We'll email or text you a link to help you reset your password</Text> */}
      </View> 

      <TouchableOpacity
      onPress={navigation.goBack} 
      className="absolute top-0 right-0 p-5">
      <Ionicons name="md-close-circle-sharp" size={32} color="#00AA13" />
      </TouchableOpacity>

      {/* logo */}
      <View className="items-center ">
         <MaterialCommunityIcons 
         name="email"
         size={100}
         color="#fff"
         
         />
      </View>

      {/* Content */}
      <View className="space-y-5 px-5 py-5">
        {/* <View className="flex-row space-x-10 items-center">
        <Ionicons name="md-key" size={32} color="#00AA13" />
        <View className="flex-1">
         <Text className="text-white font-bold">
         Access to all pro features
         </Text>

         <Text className="text-white text-sm font-extralight">
          Upgrade to the premium version of the app and enjoy all the exclusive features 
          available only to pro users.{""}  
         </Text>
        </View>
        </View> */}


        

        {/* <View className="flex-row space-x-10 items-center">
        <Ionicons name="md-person-add-outline" size={32} color="#00AA13" />
        <View className="flex-1">
         <Text className="text-white font-bold ">
         Helpline 24/7 to personal healthcare services & Doctors
         </Text>

         <Text className="text-white text-sm font-extralight">
          Get unlimited access to our  support team and get help anytime you need it - day or night.{""}  
         </Text>
        </View>
        </View> */}

        <View className="flex-row space-x-10 items-center">
        {/* <Ionicons name="md-key" size={32} color="#00AA13" /> */}
        <View className="flex-1">
         <Text className="text-white font-bold ">
         Email Address or mobile number
         </Text>

         <Text className="text-white text-sm font-extralight">
      We'll email or text you a link to help you resest your password
         </Text>
   
         
                  <Input
                  className="text-white text-lg"
                    InputLeftElement={
                      <Icon
                        as={<MaterialIcons name='menu' />}
                        size={5}
                        ml='2'
                        color='muted.400'
                      />
                    }
                    variant='rounded'
                    p={2}
                    placeholder="title"
                    name='title'
                    value={values.title}
                    onChangeText={handleTitle}
                    //onChangeText={handleChange}
                  />

<Text></Text>

<Input
                  className="text-white text-lg mt-4"
                    InputLeftElement={
                      <Icon
                        as={<MaterialIcons name='chat' />}
                        size={5}
                        ml='2'
                        color='muted.400'
                      />
                    }
                    variant='rounded'
                    p={8}
                    placeholder="body"
                    name='body'
                    value={values.body}
                    onChangeText={handleBody}
                    //onChangeText={handleChange}
                  />
        </View>
        </View>
      </View>

      {/* <TouchableOpacity
              onPress={onSubmit}
              className='rounded-lg bg-[#00AA13] p-4'
            >
              <Text className='text-center text-white text-l font-bold'>
                {values.isMember
                  ? `${i18n.t('login')}`
                  : `${i18n.t('register')}`}
              </Text>
            </TouchableOpacity> */}

      {/* Monthly subscribe */}

       <TouchableOpacity   onPress={onSubmit} 
       className="items-center px-10 py-2 bg-[#00AA13] mx-10 rounded-full">
          <Text className="text-white text-md text-center font-bold mb-1"> Send Notifications</Text>
          
       </TouchableOpacity>
      {/* Annual subscribe */}
      {/* <TouchableOpacity 
      onPress={()=>navigation.navigate("Register")}
      className="items-center px-10 py-2 border-2 border-[#00AA13] mx-10 rounded-full mt-2">
          <Text className="text-white uppercase text-md text-center font-bold mb-1">{""}REGISTER</Text>
    
       </TouchableOpacity> */}
            {/* Restore subscribe */}

           

    </ScrollView>
    
  )
}

export default PushNotifications