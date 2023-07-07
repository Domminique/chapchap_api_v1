import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MapPinIcon, PaperAirplaneIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
  id,
  imgUrl,
  logoUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
  name,
  company,
  profession,
  jobType,
  availability,
  location, 
  phonenumber, 
  product, amount
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          id,
          imgUrl,
          logoUrl,  
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
          company,
          profession,
          jobType,
          availability,
          location,
          phonenumber,                                 
          product, amount,
          name
        })
      }
      className='bg-white mr-3 shadow '
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        className='h-36 w-full rounded-sm'
      />
      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{name}</Text>
        {jobType === 'Professional' && (
          <Text className='font-bold text-gray-500  pt-1'>{availability}</Text>
        )}

        <View className='flex-row items-center space-x-1'>
          <StarIcon color='#00AA13' opacity={0.5} size={22} />
          <Text className='text-xs text-gray-500'>
            <Text className='text-[#00AA13]'>{rating}</Text>. {genre}
          </Text>
        </View>
        <View className='flex-row items-center space-x-1'>
          <MapPinIcon color='gray' opacity={0.4} size={22} />
          <Text className='text-xs text-gray-500'> Nearby  </Text>
        
        </View>
        <View className='flex-row items-center space-x-1'>
          <PaperAirplaneIcon color='gray' opacity={0.4} size={22} />
        
          <Text className='text-xs text-gray-500'>  {short_description.substring(0, 30)}...</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
