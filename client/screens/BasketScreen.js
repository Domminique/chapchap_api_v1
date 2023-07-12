import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectShop } from '../features/shop/shopSlice'
import {
  selectBasketItems,
  removeFromBasket,
  selectBasketTotal,
  clearCart,
  createOrder,
  getAllOrders,
} from '../features/basket/basketSlice'
import { usePropsResolutionTest } from 'native-base'
import { XCircleIcon } from 'react-native-heroicons/solid'
// import Currency from 'react-currency-formatter'
import Toast from 'react-native-root-toast'


const BasketScreen = () => {
  const navigation = useNavigation()
  const shop = useSelector(selectShop)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()
  const [groupedItemsInBusket, setGroupedItemsInBasket] = useState([])
  const basketTotal = useSelector(selectBasketTotal)

  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs)

  useEffect(() => {
    dispatch(getAllOrders())
  }, [items])

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})

    setGroupedItemsInBasket(groupedItems)
  }, [items])



  const handleSubmit = (e) => {
    // e.preventDefault()

    // if (!name ) {
    //   Toast.show('Please fill out all fields', {
    //     duration: Toast.durations.LONG,
    //   })
    //   return
    // }
   
    // const values = {
    //   items,
    //   name,
    //   price,
    //   descriptiona,
    //   date,
    //   time,
    //   amount:2,
    //   product:id,
    //   image:'https://savannaspace.co.ke/uploads/computer-1.jpeg',

    // }

    const tax = 0
    const shippingFee = 0
    // const cartItems= items
    // console.log('values', values)items: cartItems, tax, shippingFee 
    // dispatch(createOrder(items))
    // addItemToBasket()
    dispatch(createOrder({tax,shippingFee,items}))

    
    //createJob(values)
   

    // navigation.goBack
  }

  console.log("items", items)

// console.log()
  return (
    <SafeAreaView className='flex-1 bg-white pt-10'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00AA13] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>
              My Orders & Appointments
            </Text>
            {/* <Text className="text-center text-gray-400">{shop.title}</Text> */}
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-ray-100 absolute top-3 right-5'
          >
            <XCircleIcon color='#00AA13' height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            //  source={{
            //     uri:"http://192.168.43.19:80/uploads/emedlogo.png"
            //  }}
            source={require('../assets/emedlogo.png')}
            className='h-7 w-7 b-gray-300 p-4 rounded-full'
          />

          <Text className='flex-1 '>Orders & appointments, trips match completed in less than 40-60 min </Text>
          <TouchableOpacity 
          onPress={() => dispatch(clearCart())}
          >
            <Text className='text-[#00AA13]'>Clear </Text>
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedItemsInBusket).map(([key, items]) => (
            <>
              <View
                key={key}
                className='flex-row items-center space-x-3 bg-white py-2 px-5'
              >
                <Text>{items.length} X</Text>
                <Image
                  source={{ uri: items[0]?.image }}
                 
                  className='h-12 w-12 rounded-full'
                />
                <Text className='flex-1'>{items[0]?.name}</Text>

                <Text className='text-gray-600 text-extrabold'>
                  Ksh. {parseInt(items[0]?.price)}
                  {/* <Currency
                    quantity={parseInt(items[0]?.price)}
                    currency='KES'
                  /> */}
                </Text>

                <TouchableOpacity>
                  <Text
                    className='text-[#00AA13] text-xs'
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>

              {/* <View className='flex-row items-center space-x-3 bg-white py-2 px-5 pl-28'>
                <Text className='text-center '>
                  Date: {JSON.stringify(items[0]?.date).substring(1, 11)}{' '}
                  {'   '}Time{' '}
                  {parseInt(JSON.stringify(items[0]?.time).substring(12, 14)) +
                    3}
                  {JSON.stringify(items[0]?.time).substring(14, 17)} Hrs
                  {new Date().yyyymmdd()}
                </Text>
              </View> */}
            </>
          ))}
        </ScrollView>
        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'>
            {basketTotal}
              {/* <Currency quantity={basketTotal} currency='KES' /> */}
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>
              {/* <Currency quantity={599} currency='KES' /> */} Ksh. 0.0
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text>Total </Text>
            <Text className='font-extrabold'>
            Ksh. {basketTotal}
              {/* <Currency quantity={basketTotal} currency='KES' /> */}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              if (items.length === 0) {
                Toast.show('Please fill your basket to continue', {
                  duration: Toast.durations.LONG,
                })
              } else {
                handleSubmit()
                dispatch(clearCart())
                navigation.navigate('PreparingOrderScreen')
              }
            }}
            className='rounded-lg bg-[#00AA13] p-4'
          >
            <Text className='text-center text-white text-l font-bold'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
