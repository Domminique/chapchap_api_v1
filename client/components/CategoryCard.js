import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = ({ imgUrl, title, screen }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CategoryDetails', { title }, title)}
      className='relative mt-2 pl-2 '
    >
      <Image
        source={{
          uri: imgUrl,
        }}
        // className='h-20 w-80 rounded'
        //  source={require("../assets/Untitled.png")}
        className='h-24 w-32 rounded'
      />
      <Text className='absolute bottom-10 left-4 text-white  text-lg font-extrabold'>
        {screen}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard
