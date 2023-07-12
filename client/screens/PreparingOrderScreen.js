import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 3000)
  }, [])
  return (
    <SafeAreaView className='bg-white flex-1 justify-center items-center'>
      <Animatable.Image
        source={require('../assets/ordering.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-96 w-96 '
      />
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg my10 text-[#00AA13]  font-bold text-center '
      >
        Waiting for Service provider to accept your request !
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
