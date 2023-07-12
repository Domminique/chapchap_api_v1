import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectBasketItems,
  selectBasketTotal,
} from '../features/basket/basketSlice'
import { useNavigation } from '@react-navigation/native'
// import Currency from 'react-currency-formatter'
import CurrencyFormat from 'react-currency-format';

const BasketIcon = () => {
  const navigation = useNavigation()
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)

  if (items.length === 0) return null //Dont show empty basket
  return (
    <View className='absolute  bottom-10 w-full z-50'>
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className=' mx-5 bg-[#00AA13] p-4 rounded-lg flex-row
     items-center space-x-1'
      >
        <Text className='text-white font-extrabold  bg-[#00AA13] py-1 px-2'>
          {items.length}
        </Text>

        {items.length === 1 ? (
          <Text className='flex-1 text-white font-extrabold  text-center'>
            {' '}
            View Basket{' '}
          </Text>
        ) : (
          <Text className='flex-1 text-white font-extrabold  text-center'>
            {' '}
            View Basket{' '}
          </Text>
        )}

        <Text className='text-lg text-white font-extrabold'>
          {/* <Currency quantity={basketTotal} currency='KES' /> */}
          KES {parseInt(basketTotal)}
           {/* <CurrencyFormat quantity={basketTotal} currency='KES' />  */}
          
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
