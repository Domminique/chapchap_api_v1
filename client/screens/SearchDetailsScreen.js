import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'
import ServiceRow from '../components/ServiceRow'
import ShopRow from '../components/ShopRow'
import BasketIcon from '../components/BasketIcon'
import { useDispatch } from 'react-redux'
import { setShop } from '../features/shop/shopSlice'
import { ChatBubbleBottomCenterIcon } from 'react-native-heroicons/outline'
// import Image1 from '../components/images/doctors2.png'
// import Image2 from '../components/images/car.png'
// import Image3 from '../components/images/medicine1.png'
const SearchDetailsScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()


            //  id={_id}
            //   imgUrl={image}
            //   title={name}
            //   logoUrl={imageLogo}
            //   jobType={jobType}
            //   rating={4.5}
            //   company={company}
            //   profession={profession}
            //   genre={category}
            //   address=''
            //   short_description={description}
            //   dishes={images}
            //   long={longitude}
            //   lat={latitude}
            //   availability={availability}

  const {
    params: {
        _id,
        // title,
        imageLogo,
        images,
        category,
        company,
        // profession,
        // jobType,
        multiplier,
        name,
        description,
        longitude,
        latitude,
        location,
        position,
        image,
        availability,   
    






      id,
      logoUrl,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
      profession,
      jobType,
    },
  } = useRoute()
// const item = useRoute()

// console.log("aim for the sky", item)

  useEffect(() => {
    dispatch(
      setShop({
        id,
        logoUrl,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
        jobType,
        profession,
      })
    )
  }, [dispatch])

//   console.log(params)

  // const dishes = [
  //   {
  //     id: '123',
  //     name: 'Start Consultation now',
  //     teacher: ' Mr. Matheka',
  //     description: 'Pick time and date, and lets do the rest',
  //     image: 'Image2',
  //     screen: 'MapScreen',
  //     image: Image.resolveAssetSource(Image3).uri,
  //     price: 709097,
  //   },
  // ]

  return (
    <>
      {/* <BasketIcon /> */}
      <ScrollView>
        <View className='relative'>
          <Image
            source={{
              uri: image,
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
                  uri: imageLogo,
                }}
                className='w-12 h-12 bg-gray-300 p-4 rounded-full'
              />
              <Text className='text-xl font-bold'>{name}</Text>
            </View>
            {jobType == 'Doctor' && (
              <Text className='font-bold text-gray-500 text-l pt-1'>
                {category}
              </Text>
            )}

            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-[#00AA13]'> {rating}</Text> . {genre}
                </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <MapPinIcon color='gray' opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500'>
                  Nearby .{address}{' '}
                </Text>
              </View>
            </View>
            {/* <Text className=' text-gray-500 mt-2 pb-4'>
              {short_description}
            </Text> */}
          </View>
          <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <ChatBubbleBottomCenterIcon color='gray' opacity={0.6} size={20} />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Review and rate {title}
            </Text>

            <ChevronRightIcon color='#00AA13' />
          </TouchableOpacity>
        </View>

        {/* {jobType == 'Doctor' && ( */}
          <View className='pb-36'>
            <Text className='px-4 pt-6 mb-3 font-bold text-xl'> Consult</Text>

            {images.map((dish) => (
              <ServiceRow
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
        {/* )} */}
        {/* {jobType == 'Ambulance' && (
          <View className='pb-36'>
            <Text className='px-4 pt-6 mb-3 font-bold text-xl'> Products</Text>

            {images.map((dish) => (
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
      
        {/* // )} */}
      </ScrollView>
    </>
  )
}

export default SearchDetailsScreen
