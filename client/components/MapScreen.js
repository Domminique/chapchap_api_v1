import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames' 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import { GOOGLE_MAPS_APIKEY } from '@env'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'
import RideOptionsCard from './RideOptionsCard'
import { useDispatch, useSelector  } from 'react-redux'
import { setOrigin,setDestination, setTravelTimeInformation, setCardIndex, setInformation } from '../features/nav/navSlice'
import {
  
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
  Radio,
} from 'native-base'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid'

import {
  getSavedPlaceIds,
  getSurveyResults,
} from "../Services/storageServices";


const initialState = {
  name: '',
  email: '',
  password: '',
  phonenumber: '',
  isMember: true,
  language: '',
}


const NavigateCard = () => {

    const { origin, destination,travelTimeInformation } = useSelector((store) => store.nav);
    const dispatch = useDispatch()
  const navigation = useNavigation()
  const [surveyResults, setSurveyResults] = useState(null);
  const [name, setName] = useState(null)
  console.log(surveyResults,name,'surveyResults')

  return (
    <SafeAreaView style={tw`bg-white pt-10 flex-1`}>
      <FormControl>
              {/* <Stack space={2}> */}
                  <View>
                    <Text className="text-center text-xl font-bold p-2"> Tell us any other
                     information to enable logistics service provider to have prior knowledge before reaching you.</Text>
                  </View>
                  {/* <Stack> */}
                    <FormControl.Label style={{ borderColor: '#00AA13' }}>
                    
                    </FormControl.Label>
                    <Input
                      
                      placeholder='e.g Traffic incident, two cars, road blocked, three people trapped.'
                      variant='underlined'
                      p={8}
                      name='name'
                      id='name'
                      value={name}
                      multiline={true}
                      colorScheme='coolGray'
                      style={{  fontSize: 16}}
                      onChangeText={setName}
                    />
                  {/* </Stack> */}
              {/* </Stack> */}
            </FormControl>
     
      <View style={tw`border-t border-gray-200 flex-shrink `}>
      
        <View>

<Text style={tw` text-center py-2 text-lg text-gray-500 font-extrabold pt-2`}>
Name of the market you need to ship to?</Text>
          <GooglePlacesAutocomplete 
            placeholder='Name of the hospital you need to go to?'
            styles={toInputBoxStyles}
            onPress={(data, details = null) => {
              console.log(details.geometry.location, data.description)
                 dispatch(setDestination({
                    location:details.geometry.location,
                    description:data.description, 
                 }))
                 dispatch(setInformation(name))
                 
              navigation.navigate('MapsScreen')
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: 'AIzaSyCc8D8J2OKuXTmL2WIqBcu6181HGVRXako',
              language: 'en',
            }}  
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </View>
        {/* <NavFavourites /> */}
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="flex flex-row justify-between bg-[#00AA13] px-4 py-3 rounded-full "
        >
           <ArrowLeftIcon size={20} color='white' />
         
          <Text style={tw`pl-1 text-white text-center`}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { 
            dispatch(setInformation('Unsure'))    
            navigation.navigate('MapsScreen')}
            
          }
          className="flex flex-row justify-between bg-[#00AA13] px-4 py-3 rounded-full "
        >
         
          <Text style={tw`pl-2 pr-2 text-white text-center`}>Continue</Text>
          <ArrowRightIcon size={20} color='white' />
        </TouchableOpacity>
     
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },

  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 10,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
})
