import {
  Button,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../components/HeaderComponent'
import tw from 'tailwind-react-native-classnames'
import { useNavigation, useRoute } from '@react-navigation/native'
import ReceiverMessage from '../components/ReceiverMessage'
import SenderMessage from '../components/SenderMessage'
import {
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  SquaresPlusIcon,
  ChatBubbleLeftIcon
} from 'react-native-heroicons/outline'
import * as Icons from 'react-native-heroicons/solid'


const MessageScreen = () => {
  const navigation = useNavigation()
  const { params } = useRoute()
  //const  {bookingDetails} = params
  const [input, setIput] = useState('')
  const [message, setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCurrentTitle] = useState(null)
  

  const createNewChat =  () => {
    setMessage(null)
    setIput("")
    setCurrentTitle(null)

  } 

  const handleClick = (uniqueTitle) =>{ 
     setCurrentTitle(uniqueTitle)
     setMessage(null)
    setIput("")

  }
  
  const sendMessage = async () => {
    // setMessages({ ...messages, input })
    // console.log('message',message, input)

    const options = {
      method:"POST",
      body:JSON.stringify({
        message:input
      }),
      headers:{
        "Content-Type":"application/json"
      }
    }

    try {
      const response = await fetch('http://192.168.42.107:80/api/v1/ai', options)
      const data = await response.json()
      console.log(data)
      // setMessage(data.choices[0].message)
    }catch(error){
      console.error(error)
    }


  }
  

   useEffect(() => {
  
    if(!currentTitle && input && message){
      setCurrentTitle(input)
    } 

    if(currentTitle && input && message){
      setPreviousChats( prevChats =>(
        [...prevChats, 
        {
        title:currentTitle, 
        role: "user", 
        content: input
        }, 
      {
        title:currentTitle, 
        role: message.role, 
        content: message.content

      } 
    ]
      ))
    }
   }, [message, currentTitle])

   console.log(previousChats)


   const currentChat = previousChats.filter(previousChats => previousChats.title === currentTitle)

   const uniqueTitles = Array.from(new Set(previousChats.map(previousChats => previousChats.title)))
  return (
    <SafeAreaView style={tw` flex-1 pt-8`}>
      {/* <Header
        // title={bookingDetails.job.company.substring(0, 15)}
        title='Saina bot'
        callEnabled
      /> */}
 <View className='flex-row pb-3 items-center mx-4 space-x-2  '>
 <TouchableOpacity 
      onPress={createNewChat}>
        < ChatBubbleLeftIcon size={35} color='#00AA13' />
      </TouchableOpacity>
      
      <View className='w-1/2 '>

      </View>

      <TouchableOpacity
        onPress={createNewChat}
        className='-top-2'
      >
        <Text className='rounded-md font-bold text-lg -bottom-2 pr-12'>
         
          
        </Text>
        <SquaresPlusIcon size={35} color='#00AA13' />
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={createNewChat}>
        < ChatBubbleLeftIcon size={35} color='#00AA13' />
      </TouchableOpacity>
    </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}
        keyboardVerticalOffset={10}
      >
        {currentChat?.map((chatMessage, index)=>(
          <View key={index}>
             <Text>{chatMessage.role}</Text>
             <Text>{chatMessage.content}</Text>

          </View>
        ))}
        {uniqueTitles?.map((uniqueTitle, index)=>(
          <TouchableOpacity key={index} onPress={() => handleClick(uniqueTitle)}>
             <Text>{uniqueTitle}</Text>
          </TouchableOpacity>
        ))}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={currentChat}
            style={tw`pl-4`}
            keyExtractor={(item) => item._id}
            renderItem={({ item: message }) => {
              <View
                style={[
                  tw`bg-purple-600 rounded-lg rounded-tr-none px-5 py-3
             mx-3 my-2`,
                  { alignSelf: 'flex-start', marginLeft: 'auto' },
                ]}
              >
                <Text style={tw`text-white`}> {message.input}</Text>
              </View>
            }}
          />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View
        style={tw`flex-row justify-between  items-center border-t 
                border-gray-200 px-5 py-2`}
      >
        <TextInput
          style={tw`h-10 text-lg`}
          placeholder='How can I assist you today?'
          onChangeText={setIput}
          onSubmitEditing={sendMessage}
          value={input}
        />
        <Button 
        onPress={sendMessage} title='Send' color='#00AA13' />
      </View>
    </SafeAreaView>
  )
}

export default MessageScreen

const styles = StyleSheet.create({})
