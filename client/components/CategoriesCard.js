import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const CategoriesCard = ({imgUrl, title}) => {

  const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('AllCategoryDetails', {title}, title)}
    className="relative mr-2 ">
        <Image 
         source={require("../assets/chapchap4.png")} 
        className='h-20 w-28 rounded'
        />
      <Text className='absolute bottom-5 left-2 text-white font-bold right-2'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard