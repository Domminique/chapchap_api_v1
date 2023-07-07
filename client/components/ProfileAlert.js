import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './HeaderComponent'
import tw from 'tailwind-react-native-classnames'
import Toast from 'react-native-root-toast'
// import Currency from 'react-currency-formatter'
import { PaperAirplaneIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import {
  CheckCircleIcon,
  XCircleIcon,
  CalendarDaysIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ClockIcon,
  MinusCircleIcon,
} from 'react-native-heroicons/outline'

//import { useUserContext } from '../context/user_context'
import {
  Box,
  FlatList,
  Heading,
  FormControl,
  Input,
  Avatar,
  HStack,
  VStack,
  AspectRatio,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Spinner,
  Button,
  Modal,
  TextArea,
  Radio,
  Image,
  Fab,
  Icon,
  Stack,
  ScrollView,
} from 'native-base'
import {
  Feather,
  Entypo,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons'
//import { useAppContext } from '../context/appContext'
import { useNavigation } from '@react-navigation/native'
//import { useProductsContext } from '../context/products_context'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import {
  selectBasketItems,
  removeFromBasket,
  selectBasketTotal,
  clearCart,
  getAllOrders,
  // getMyOrders
} from '../features/basket/basketSlice'
import { getMyOrders } from '../features/orders/orderSlice'
//import Toast from 'react-native-root-toast'

const ServiceScreen = () => {
  const items = useSelector(selectBasketItems)
  const { user } = useSelector((store) => store.user)
  const navigation = useNavigation()

  const {
    isLoading,
    orders,
    userOrders
  } = useSelector((store) => store.orders)

  const dispatch = useDispatch()

  const incompleteform = !message

  const [isPressed, setIsPressed] = useState(false)
  const [descriptiona, setDescription] = useState(descriptiona)
  const [descriptions, setLocation] = useState(descriptions)
  const [message, setMessage] = useState('')

  useEffect(() => {
    dispatch(getMyOrders())
  }, [ userOrders])

  // useEffect(() => {
  //   getAllBookings()
  //   // eslint-disable-next-line
  // }, [])
  // if (isLoading) {
  //   return (
  //     <HStack space={8} justifyContent='center' alignItems='center'>
  //       <Spinner size='lg' />
  //     </HStack>
  //   )
  // }

  // if (items.length === 0) {
  //   return (
  //     <>
  //       <Header title='My services' />
  //       <Text style={tw`text-center text-2xl`}>Hey, What do you do?</Text>
  //       <Fab
  //         onPress={() => navigation.navigate('AddService')}
  //         style={{ backgroundColor: '#00AA13' }}
  //         colorScheme='red-900'
  //         size='lg'
  //         icon={<Icon as={Feather} name='plus' size='lg' color='warmGray.50' />}
  //       />
  //     </>
  //   )
  // }

  //const patientId = user._id

  //const ourBookings = itemsy

  // const userId = user._id
  // const ourBookings = items.filter((item) => item.id === userId)

  console.log('Items bookings',userOrders)

  // bookings.filter(
  //   (booking) => booking.serviceProviderID === patientId

  // )

  Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1 // getMonth() is zero-based
    var dd = this.getDate()

    return [
      this.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd,
    ].join('')
  }

  var date = new Date()
  date.yyyymmdd()
  return (
    <ScrollView className=''>
      <Header title='My Orders & Bookings ' />
      <View className='space-y-4 space-x-4'>
        {userOrders?.orders?.map(({ name, descriptiona,total,subtotal,tax,user,clientSecret,createdAt,
         status, orderItems,time, date, price, image ,shippingFee,}) => (
          <View className=''>
            <TouchableOpacity
              onPress={() => setIsPressed(!isPressed)}
              className={`bg-white border p-4 border-gray-200 ${
                isPressed && 'border-b-0'
              }`}
            >
              <View className='flex-row '>
                <View className='flex-1 pr-2'>

                  {orderItems?.map(({name,descriptiona}) =>(
                     <Text className='text-lg mb-1'>
                     {name} 
                   </Text>
                  ))}
                  <Text className='text-lg mb-1'>
                    {total} 
                  </Text>
                  <Text className='text-gray-400'>Status: {status}</Text>
                  {/* <Text className='text-gray-400'>
                    Date: {JSON.stringify(date).substring(1, 11)} at{' '}
                    {parseInt(JSON.stringify(time).substring(12, 14)) + 3}
                    {JSON.stringify(time).substring(14, 17)} Hrs
                    {new Date().yyyymmdd()}
                  </Text> */}

                  <View className='flex-row items-center space-x-4'>
                    {/* <Text className='text-gray-400 mt-2'>
                      {JSON.stringify(date)}
                    </Text> */}
                    <Text className='text-gray-400 mt-2'>{subtotal}</Text>
                    <Text className='text-xs font-bold mt-2'>
                      {user.phonenumber}
                    </Text>
                  </View>
                </View>

                <View>
                  <Image
                    style={{
                      borderWidth: 1,
                      borderColor: '#F3F3F4',
                    }}
                    // source={{ uri: image }}
                    source={{
                      uri: 'http://192.168.43.19:80/uploads/emedlogo.png',
                    }}
                    className='h-8 w-8 p-4'
                  />
                </View>
              </View>
            </TouchableOpacity>

            <View className='bg-white '>
              <View className='flex-row flex-grow space-x-36 px-4 py-3 bg-white '>
                <TouchableOpacity
                  // disabled={!items.length}
                  onPress={() => {
                    Toast.show('Consultation request rejected', {
                      duration: Toast.durations.LONG,
                    })
                  }}
                >
                  <XCircleIcon size={40} color={'#00AA13'} />
                </TouchableOpacity>
                {/* <Text className='flex-1 '>{date.toDateString()}</Text> */}

                <TouchableOpacity
                  //  onPress={showTimePicker}
                  onPress={() => {
                    Toast.show('Consultation request Accepted', {
                      duration: Toast.durations.LONG,
                    })
                  }}
                >
                  <CheckCircleIcon size={40} color='#00AA13' />
                </TouchableOpacity>
                <Text className='flex-1 '>
                  {/* {time.toLocaleTimeString('en-US')} */}
                </Text>
              </View>

              {/* <View className='flex-row items-center space-x-12 px-4 bg-white'>
                <TouchableOpacity
                //  onPress={showTimePicker}
                >
                  <ChatBubbleOvalLeftEllipsisIcon size={40} color='#00AA13' />
                </TouchableOpacity>

                <TextInput
                  value={message}
                  onChangeText={setMessage}
                  style={tw`text-center `}
                  placeholderTextColor='#00AA13'
                  placeholder='message ...'
                  multiline
                  // style={{maxHeight: ...}}
                />

                <TouchableOpacity
                  disabled={!incompleteform}
                  // onPress={addItemToBasket}
                >
                  <PaperAirplaneIcon
                    size={40}
                    color={!incompleteform ? '#00AA13' : 'gray'}
                  />
                </TouchableOpacity>
              </View> */}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

export default ServiceScreen

const styles = StyleSheet.create({})
