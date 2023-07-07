import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames' 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'
import RideOptionsCard from './RideOptionsCard'
import { useDispatch, useSelector  } from 'react-redux'
import { setOrigin,setDestination, setTravelTimeInformation, setCardIndex } from '../features/nav/navSlice'


const NavigateCard = () => {

    const { origin, destination,travelTimeInformation } = useSelector((store) => store.nav);
    const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`bg-white  flex-1`}>
      <Text style={tw`text-center py-2  text-gray-500 font-extrabold`}>Where are you shipping from today?</Text>
      <View style={tw`border-t border-gray-200 flex-shrink `}>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          // onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black px-4 py-3 rounded-full `}
        >
          {/* <Icon name='ambulance' type='font-awesome' color='white' size={16} /> */}
          <Text style={tw`pl-1 text-white text-center`}>Current location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black px-4 py-3 rounded-full `}
        >
          {/* <Icon name='ambulance' type='font-awesome' color='white' size={16} /> */}
          <Text style={tw`pl-1 text-white text-center`}>My Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between  px-4 py-3 rounded-full `}
        >
          {/* <Icon name='home' type='ionicon' color='black' size={16} /> */}
          <Text style={tw` pl-1 text-center`}>Home</Text>
        </TouchableOpacity>
      </View>
        <View>
        
<GooglePlacesAutocomplete 
            placeholder='Where are you shipping from today?'
            styles={toInputBoxStyles}
            
            onPress={(data, details = null) => {
              console.log(details.geometry.location, data.description)

              dispatch(setOrigin({
                location: details.geometry.location,
                description:data.description
               }))
               dispatch(setDestination(null))
                
              // navigation.navigate('RideOptionsCard')
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}  
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />

<Text style={tw`border-t border-gray-200 text-center py-2  text-gray-500 font-extrabold`}>
  Where are you shipping to today?</Text>
          <GooglePlacesAutocomplete 
            placeholder='Where are you shipping to today?'
            styles={toInputBoxStyles}
            onPress={(data, details = null) => {
              console.log(details.geometry.location, data.description)
                 dispatch(setDestination({
                    location:details.geometry.location,
                    description:data.description, 
                 }))
              navigation.navigate('RideOptionsCard')
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: 'AIzaSyAzEyoWn-5M69xQpZDRE5Bp4VEizHyydfA',
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
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black px-4 py-3 rounded-full `}
        >
          {/* <Icon name='ambulance' type='font-awesome' color='white' size={16} /> */}
          <Text style={tw`pl-1 text-white text-center`}>My Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black px-4 py-3 rounded-full `}
        >
          {/* <Icon name='ambulance' type='font-awesome' color='white' size={16} /> */}
          <Text style={tw`pl-1 text-white text-center`}>Current location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between px-4 py-3 rounded-full `}
        >
          {/* <Icon name='home' type='ionicon' color='black' size={16} /> */}
          <Text style={tw` pl-1 text-center`}>My Shop</Text>
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
