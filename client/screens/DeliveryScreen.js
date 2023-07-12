import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectShop } from '../features/shop/shopSlice'
import { SafeAreaView } from 'react-native'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { Image } from 'react-native'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const shop = useSelector(selectShop)

  console.log(shop, 'shop')

  return (
    <View className='bg-[#00AA13] flex-1 pt-12'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <XCircleIcon color='white' size={30} />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>
             help
          </Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className=' text-lg text-gray-400 '> Estimated </Text>
              <Text className='text-4xl font-bold '>45-55 Minutes</Text>
            </View>
            <Image
              source={require('../assets/ordering.gif')}
              className='h-20 w-20'
            />
          </View>
          <Progress.Bar size={30} color='#00AA13' indeterminate={true} />

          <Text className='mt-3 text-gray-500'>
            Your request is being attended to
            {/* Your Consultation  is being prepared  */}
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: -1.3964161387444496,
          longitude: 36.74296376960316,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      >
      < Marker
      coordinate={{
        latitude: -1.3964161387444496,
        longitude: 36.74296376960316,
      }}
      title='Home fragrance'
      description='Eating and driving fancy cars'
      identifier='origin'
      pinColor='#00aa13'
      >
      </Marker>

      </MapView>

      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <Image
          source={require('../assets/ordering.gif')}
          className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className='flex-1'>
          <Text className='text-lg'>Dominic Imbuga</Text>
          <Text className='text-gray-400'>Your Ride</Text>
        </View>
        <Text className='text-[#00AA13] text-lg mr-5 font-bold'>Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen
