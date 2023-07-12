import { View, Text, TouchableOpacity, Image, Switch } from 'react-native'
import React from 'react'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
// import { Switch, VStack } from 'native-base'
import { useState } from 'react'
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../features/job/jobSlice'
import { useDispatch } from 'react-redux'

const MyServiceCard = ({
  id,
  imgUrl,
  logoUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  company,
  profession,
  jobType,
  availability,
  location,
  phonenumber,
  lng,
  lat,
  user,
  price,
  verified,
  featured
}) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [image, setImage] = useState(null);
  // const [onDuty, setOnDuty] = useState(availability)
  

  // console.log(onDuty, "switch")
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('EditService', {
          id,
          imgUrl,
          logoUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,  
          lat,
          company,
          profession,
          jobType,
          availability,
          location, 
          phonenumber,
          lng,
          lat,
          user,
          price, 
          verified,
          featured
        })
      }
      className='bg-white mr-3 shadow '
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-32 w-64 rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        {jobType === 'Professional' && (
          <Text className='font-bold text-gray-500  pt-1'>{profession}</Text>
        )}

        <View className='flex-row items-center space-x-1'>
          <StarIcon color='#00AA13' opacity={0.5} size={22} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-[#00AA13]'>{rating}</Text>. {genre}
          </Text>
        </View>
        {/* <View className='flex-row items-center space-x-1'>
          <MapPinIcon color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'> Nearby . {JSON.stringify(location.substring(133, 154))} </Text>
        
        </View> */}

       
      
      
       
        {verified?(<View>
          <View className='flex-row items-center space-x-4'>
          {/* <MapPinIcon color='gray' opacity={0.4} size={22} /> */}
          {availability ?  <Text className='text-xl text-gray-700 font-extrabold'>On Duty: </Text> : 
            <Text className='text-lg text-gray-500 font-bold'>Off Duty </Text>}
        
       
        
        
        
          <Switch 
          value={availability}
          onValueChange={val => {
            // setOnDuty(val, ', OnDuty')
            // console.log(onDuty, "popo") 
            dispatch(editJob({jobId: id, job: {availability:val}  })
            )
          
          }
          
          
          }
         className='w-32'
          // defaultIsChecked 
          colorScheme="emerald" 
          size="lg" />
        </View>
          <Text className='text-xl text-gray-700 font-extrabold'>Verified </Text> 
          </View> ): 

            <Text className='text-lg text-gray-500 font-bold pt-4'>Not Verified </Text>
            
            }
        {/* <View className='flex-row items-center space-x-4 '>
        <Text className='text-lg text-gray-500 font-bold'>Verify: </Text>
        
          <Switch defaultIsChecked colorScheme="secondary" size="lg" />
        </View>
        <View className='flex-row items-center space-x-4'>
        <Text className='text-lg text-gray-500 font-bold'>Feature: </Text>
        
          <Switch defaultIsChecked colorScheme="emerald"  size="lg"/>
        </View> */}
      
      
    
      </View>
    </TouchableOpacity>
  )
}

export default MyServiceCard
