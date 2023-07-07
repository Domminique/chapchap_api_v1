import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'
import {
  Input,
  FormControl,
  Fab,
  Stack,
  Button,
  IconButton,
  Checkbox,
  Box,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  useToast,
  NativeBaseProvider,
  Modal,
  TextArea,
  Radio,
} from 'native-base'
import React, { useState, useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import logo from '../assets/splash.png'
import ExploreOptions from '../components/ExploreOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
//import { GOOGLE_MAPS_APIKEY } from '@env'
import { GOOGLE_MAPS_APIKEY } from '../config'
import { useNavigation } from '@react-navigation/native'
//import { setOrigin,setDestination, setTravelTimeInformation } from '../features/nav/navSlice'
import Filter from '../components/FilterComponents'
// import { Icon } from 'react-native-elements'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useAppContext } from '../context/appContext'
import Search from '../components/SearchBar'
import SearchOptions from '../components/SearchOptions'
import NavFavourites from '../components/NavFavourites'
const ExploreScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={tw`bg-white h-full `}>
      <View style={tw`pb-8`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={[
            tw`absolute top-10 left-5 z-50 p-3
       rounded-full shadow-lg`,
            ,
            { backgroundColor: '#00AA13' },
          ]}
        >
          <Icon
            as={Ionicons}
            // style={{color:'#ffffff', fontSize:20}}
            name={Platform.OS ? 'menu' : 'menu'}
            size='5'
            color='white'
          />
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={()=> navigation.navigate("HomeScreen")}
          style={[
            tw`absolute top-10 right-5 z-50 p-3
      rounded-full shadow-lg `,
            { backgroundColor: '#00AA13' },
          ]}
        >
          <Text style={tw`text-white`}>EN</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`pt-14`}></View>
      <Search />
      <Filter />
      <SearchOptions />
      <ExploreOptions />

      {/* <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t bottom-0 border-gray-100`}
      >
       
        <TouchableOpacity
         onPress={()=> navigation.navigate("HomeScreen")}
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full `}
        >
          <Icon name='home' type='ionicon' color='black' size={16} />
          <Text style={tw` pl-1 text-center`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {

          navigation.navigate('Profile')
        }}
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full `}
        >
          <Icon name='person' type='ionicon' color='black' size={16} />
          <Text style={tw` pl-1 text-center`}>Profile</Text>
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({})
