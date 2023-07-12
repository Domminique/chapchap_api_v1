import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
// import Currency from 'react-currency-formatter'
import { useDispatch, useSelector } from 'react-redux'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from '../features/basket/basketSlice'

const ShopRow = ({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  jobType,
  product 
}) => {
  const items = useSelector((state) => selectBasketItemsWithId(state, id))
  const dispatch = useDispatch()

  const [isPressed, setIsPressed] = useState(false)

  const addItemToBasket = () => {
    dispatch(addToBasket({ 
      id:product,
        image,
        name,
        price,
        description,
        descriptiona:description,
        date:Date.now(),
        time:Date.now(),
        product,
        image,
        amount:1
     }))
  }

  const removeItemFromBasket = () => {
    if (!items.length > 0) return

    dispatch(removeFromBasket({ id }))
  }

  console.log("shop items", items)

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
      >
        <View className='flex-row'>
          <View className='flex-1 pr-2'>
            <Text className='text-lg mb-1'>{name}</Text>
            <Text className='text-gray-400'>{description}</Text>

            <View className='flex-row items-center space-x-4'>
              <Text className='text-gray-700 mt-2 text-extrabold'>
                {/* <Currency quantity={price} currency='KES' /> */}
                KSh. {price}
              </Text>
              <Text className='text-xs font-bold mt-2'></Text>
            </View>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4',
              }}
              source={{ uri: image }}
              // source={{uri:"http://192.168.43.19:80/uploads/emedlogo.png" }}
              className='h-16 w-16 p-4'
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className='bg-white px-4'>
          <View className='flex-row items-center space-x-2'>
            <TouchableOpacity
              disabled={!items.length}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? '#00AA13' : 'gray'}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color='#00AA13' />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default ShopRow
