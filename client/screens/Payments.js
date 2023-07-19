import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const Payments = () => {
    const navigation = useNavigation()
    const [token, setToken] = useState(null)
      const makePayments = async () => {
          const options = {
            method:"POST",
            body:JSON.stringify({
              consumer_key:'qkio1BGGYAXTu2JOfm7XSXNruoZsrqEW',
              consumer_secret:'osGQ364R49cXKeOYSpaOnT++rHs='
            }),
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
          }
      
          try {
            const response = await fetch('https://cybqa.pesapal.com/pesapalv3/api/Auth/RequestToken', options)
            const data = await response.json()
            console.log(data)
            setToken(data.token)
          }catch(error){
            console.error(error)
          }


          // IPN URL Registration Endpoint
          const IpnOptions = {
            method:"post",
            headers:{
              "Authorization":`Bearer ${token}`,
              "Content-Type":"application/json",
              "Accept":"application/json"
            },
            body:JSON.stringify({


              model:"gpt-3.5-turbo",
              messages:[{role:"user", content:req.body.message}],
              max_tokens:100,
            })
          }
        
          try {
           const response= await fetch('https://api.openai.com/v1/chat/completions', options)
        
           const data = await response.json()
           res.send(data)
          }catch(error){
           console.error(error)
          }




          const IpnOptions2 = {
            method:"POST",
            body:JSON.stringify({
              consumer_key:'qkio1BGGYAXTu2JOfm7XSXNruoZsrqEW',
              consumer_secret:'osGQ364R49cXKeOYSpaOnT++rHs='
            }),
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
            }
          }

          console.log(token, 'token')

          try {
            const response = await fetch(' https://cybqa.pesapal.com/pesapalv3/api/URLSetup/RegisterIPN', options)
            const data = await response.json()
            console.log(data)
            // setMessage(data.choices[0].message)
          }catch(error){
            console.error(error)
          }
      
        }

        
  return (
    <ScrollView
    className="bg-[#1A2F44] flex-1 pt-2" >
      <View className="m-10 space-y-2">
     
      <Text className="text-2xl text-center uppercase text-white font-bold">Upgrade</Text>
      <Text className="text-center  text-white ">
        Upgrade to Pro to Access all the Features</Text>
      </View> 

      <TouchableOpacity
      onPress={navigation.goBack} 
      className="absolute top-0 right-0 p-5">
      <Ionicons name="md-close-circle-sharp" size={32} color="#00AA13" />
      </TouchableOpacity>

      {/* logo */}
      <View className="items-center ">
         <MaterialCommunityIcons 
         name="trophy-award"
         size={100}
         color="#00AA13"
         
         />
      </View>

      {/* Content */}
      <View className="space-y-5 px-5 py-5">
        <View className="flex-row space-x-10 items-center">
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
        </View>


        

        <View className="flex-row space-x-10 items-center">
        <Ionicons name="md-person-add-outline" size={32} color="#00AA13" />
        <View className="flex-1">
         <Text className="text-white font-bold ">
         Helpline 24/7 to personal healthcare services & Doctors
         </Text>

         <Text className="text-white text-sm font-extralight">
          Get unlimited access to our  support team and get help anytime you need it - day or night.{""}  
         </Text>
        </View>
        </View>

        <View className="flex-row space-x-10 items-center">
        <Ionicons name="md-key" size={32} color="#00AA13" />
        <View className="flex-1">
         <Text className="text-white font-bold ">
         Unlock Limited Edition Content
         </Text>

         <Text className="text-white text-sm font-extralight">
         Unlock exclusive content that you can not get anywhere else,
         like special exclusive direct messages and in-app calls
         </Text>
        </View>
        </View>
      </View>

      {/* Monthly subscribe */}

       <TouchableOpacity 
       onPress={()=> makePayments()}
       className="items-center px-10 py-2 bg-[#00AA13] mx-10 rounded-full">
          <Text className="text-white text-md text-center font-bold mb-1">FREE trial for 1 month</Text>
          <Text className="text-white">600/month after</Text>
       </TouchableOpacity>
      {/* Annual subscribe */}
      <TouchableOpacity className="items-center px-10 py-2 border-2 border-[#00AA13] mx-10 rounded-full mt-2">
          <Text className="text-white uppercase text-md text-center font-bold mb-1">Save 20% Annually{""}</Text>
          <Text className="text-white">5,760/year</Text>
       </TouchableOpacity>
            {/* Restore subscribe */}

            <TouchableOpacity className="items-center px-10 py-2 mx-10  mt-2">
         
          <Text className="text-white text-[#00AA13]">Restore Purchases</Text>
       </TouchableOpacity>

    </ScrollView>
    
  )
}

export default Payments