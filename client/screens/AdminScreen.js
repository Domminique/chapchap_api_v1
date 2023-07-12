import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import AdminActionRow from '../components/AdminActionRow';
import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../App';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid'

const AdminScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative ">
      <ScrollView>
      {/* <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={tw`bg-white absolute top-10 left-5 z-50 p-3
       rounded-full shadow-lg`}
          >
            <ArrowLeftIcon size={20} color='#00AA13' />
          </TouchableOpacity> */}
       {/* PRO/UPGRADE Button */}
       <TouchableOpacity 
       onPress={()=>navigation.goBack()}
       className="bg-white absolute top-10 left-5 z-50 p-3
       rounded-full shadow-lg">
      <ArrowLeftIcon size={20} color='#00AA13' />
        {/* <Text className="text-center text-[#00AA13]"  >Home</Text> */}
       </TouchableOpacity>

      {/* Image */}
      <Image   source={require('../assets/medicine.png')}

      className="w-full h-64"/>


    {/* AdminActionRow */}
    <View className="mx-5 pt-4">
    <View className="flex-row justify-between space-x-2">
   
     <AdminActionRow
    title="All Service Providers"
    screen="Adminservices"
    color="#1982C4"
    icon="library"
    vertical
    />
     <AdminActionRow
    title="All Users"
    screen="AdminUsers"
    color="#00AA13"
    icon="people"
    vertical
    />
   </View>
    {/* <AdminActionRow
    title="Statistics"
    screen="Demo"
    color="#F44174"
    icon="share-social"
    
    /> */}
    <AdminActionRow
    title="Add a Service Provider"
    screen="ServiceScreen"
    color="#8AC926"
    icon="add-circle"
    requiredPro
    />
    <AdminActionRow
    title="Create a User"
    screen="Demo"
    color="#C03221"
    icon="md-add"
    requiredPro
    />
    <AdminActionRow
    title="Stats"
    screen="Demo"
    color="#23967F"
    icon="md-calendar"
    requiredPro
    />
 <AdminActionRow
    title="Send Notification"
    screen="PushNotifications"
    color="#23967F"
    icon="md-notifications-outline"
    requiredPro
    />
    </View>
    {/* <Map /> */}
    
    </ScrollView>
    </SafeAreaView>
  )
}

export default AdminScreen