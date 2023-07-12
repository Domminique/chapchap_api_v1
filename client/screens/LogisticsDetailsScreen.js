
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'
import ServiceRow from '../components/ServiceRow'
import ShopRow from '../components/ShopRow'
import BasketIcon from '../components/BasketIcon'
import { setShop } from '../features/shop/shopSlice'
import { ChatBubbleBottomCenterIcon } from 'react-native-heroicons/outline'
import { useSelector,useDispatch } from 'react-redux'
import {selectDestination,selectOrigin , selectCardIndex} from '../features/nav/navSlice'
import DefaultImage from '../assets/chapchap4.png'
import {
  Foundation,
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons'
import { useState } from 'react'
const LogisticsDetailsScreen = () => {

  const cardIndex = useSelector(selectCardIndex)
  const navigation = useNavigation()
  const [newCardIndex,setNewCardIndex ] = useState(cardIndex)


  const dispatch = useDispatch()
  useEffect(()=>{
    if(!cardIndex) return;

    setNewCardIndex(cardIndex)
  }, [])

  // const {
  //   params: {
  //     id,
  //     logoUrl,
  //     imgUrl,
  //     title,
  //     rating,
  //     genre,
  //     address,
  //     short_description,
  //     dishes,
  //     long,
  //     lat,
  //     profession,
  //     jobType,
  //     phonenumber,
  //     email,
  //   },
  // } = useRoute()

  // useEffect(() => {
  //   dispatch(
  //     setShop({
  //       id,
  //       logoUrl,
  //       imgUrl,
  //       title,
  //       rating,
  //       genre,
  //       address,
  //       short_description,
  //       dishes,
  //       long,
  //       lat,
  //       jobType,
  //       profession,
  //       phonenumber,
  //       name:title,
  //     email,
  //     })
  //   )
  // }, [dispatch])

  const dishess = [
    {
      id: '123',
      price:'300',
      name: 'Chandalnene',
      phonenumber:'+254715180530',
      teacher: ' Mr. Matheka',
      description: 'Pick time and date, and lets do the rest',
      image: 'http://192.168.42.152:80/basket.jpg',
      screen: 'MapScreen',
      image: 'http://192.168.42.152:80/basket.jpg'
    },
    {
      id: '125',
      name: 'Steet light',
      phonenumber:'+254715180530',
      price:'600',
      teacher: ' Mr. Matheka',
      description: 'Pick time and date, and lets do the rest',
      image: 'http://192.168.42.152:80/basket.jpg',
      screen: 'MapScreen',
      image: 'http://192.168.42.152:80/basket.jpg'
    },
  ]
  const data = [
    {
      id: '123',
      title: 'Boss Freight Terminal Ltd',
      driver: 'Dominic Imbuga',
      regNo: 'KAB 234U',
      multiplier: 10,
      image: Image.resolveAssetSource(DefaultImage).uri,
    },
    {
      id: '103',
      driver: 'Dominic Imbuga',
      regNo: 'KAB 234U',
      title: 'Union Logistics Ltd',
      multiplier: 10.2,
      image: Image.resolveAssetSource(DefaultImage).uri,
    },
    {
      id: '129',
      driver: 'Dominic Imbuga',
      regNo: 'KAB 234U',
      title: 'Muranga Forwarders Ltd',
      multiplier: 10.75,
      image: Image.resolveAssetSource(DefaultImage).uri,
    },
    {
      id: '523',
      driver: 'Dominic Imbuga',
      regNo: 'KAB 234U',
      title: 'Perseus Forwarders',
      multiplier: 20,
      image: Image.resolveAssetSource(DefaultImage).uri,
    },
  ]





  const newItem = data[cardIndex]


  //const services = jobs.filter((item) => item.jobType == title)

 console.log(newItem,'newCardIndex ');


 

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className='relative '>
          <Image
            source={{
              uri: newItem.image,
            }}
            className='w-full h-56 bg-gray-300 p-4'
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
          >
            <ArrowLeftIcon size={20} color='#00AA13' />
          </TouchableOpacity>
        </View>
        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <View className='flex-row items-center space-x-1'>
              <Image
                source={{
                  uri: newItem.image,
                }}
                className='w-12 h-12 bg-gray-300 p-4 rounded-full'
              />
            
              <Text className='font-bold text-gray-500 text-l pt-1'>
                Driver :{newItem.driver}</Text>
            </View>
            <Text className='text-xl font-bold'>{newItem.title}</Text>
            {/* {jobType == 'Professional' && (
              <Text className='font-bold text-gray-500 text-l pt-1'>
                {profession}
              </Text>
            )} */}

<View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-[#00AA13]'> {newItem.regNo}</Text> . {newItem.regNo}
                </Text>
              </View>
              
            </View>
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <PhoneIcon color='green' opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-[#00AA13]'> {newItem.driver}</Text> 
                </Text>
              </View>
              
              
            </View>
            <Text className=' text-gray-500 mt-2 pb-4'>
              {newItem.multiplier}
            </Text>
          </View>
          <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <ChatBubbleBottomCenterIcon color='gray' opacity={0.6} size={20} />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Review and rate {newItem.multiplier}
            </Text>

            <ChevronRightIcon color='#00AA13' />
          </TouchableOpacity>
        </View>

        {/* {jobType == 'Doctor' && (
          <View className='pb-36'>
            <Text className='px-4 pt-6 mb-3 font-bold text-xl'> Consult</Text>

            {dishes.map((dish) => (
              <DishRow
                key={dish.id}
                id={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                jobType={dish.jobType}
              />
            ))}
          </View>
        )} */}
        {/* {jobType == 'Ambulance' && (
          <View className='pb-36'>
            <Text className='px-4 pt-6 mb-3 font-bold text-xl'> Products</Text>

            {dishes.map((dish) => (
              <ShopRow
                key={dish.id}
                id={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                jobType={dish.jobType}
              />
            ))}
          </View>
        )} */}
        {/* {jobType == 'Service' && ( */}
        <View className='pb-36'>
          <Text className='px-4 pt-6 mb-3 font-bold text-xl'>Products </Text>

          {/* {dishess.map((dish) => (
            <ShopRow
              key={dish.id}
              id={dish.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
              image={imgUrl}
              jobType={dish.jobType}
              product={id}
            />
          ))} */}
        </View>
        {/* )} */}
      </ScrollView>
    </>
  )
}

export default LogisticsDetailsScreen
