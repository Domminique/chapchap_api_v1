import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
// import Currency from 'react-currency-formatter'
import { useDispatch, useSelector } from 'react-redux'
import {
  CalendarDaysIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ClockIcon,
  MinusCircleIcon,
} from 'react-native-heroicons/outline'
import DateTimePicker from '@react-native-community/datetimepicker'
import DatePicker from 'react-native-date-picker'
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons'
import tw from 'tailwind-react-native-classnames'
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from '../features/basket/basketSlice'
import { PlusCircleIcon } from 'react-native-heroicons/solid'

const DishRow = ({ id, name, description, price, image, jobType }) => {
  //const { params } = useRoute()
  const [names, setName] = useState(name)
  const [email, setEmail] = useState(email)
  const [descriptiona, setDescription] = useState(descriptiona)
  const [descriptions, setLocation] = useState(descriptions)
  const [phonenumber, setPhonenumber] = useState(phonenumber)
  const [datePicker, setDatePicker] = useState(false)
  const [date, setDate] = useState(new Date())
  const [timePicker, setTimePicker] = useState(false)
  const [time, setTime] = useState(new Date(Date.now()))

  const incompleteform = !descriptiona

  const items = useSelector((state) => selectBasketItemsWithId(state, id))
  const dispatch = useDispatch()

  const [isPressed, setIsPressed] = useState(false)

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image, jobType }))
  }

  const removeItemFromBasket = () => {
    if (!items.length > 0) return

    dispatch(removeFromBasket({ id }))
  }
  function showDatePicker() {
    setDatePicker(true)
  }

  function showTimePicker() {
    setTimePicker(true)
  }

  function onDateSelected(event, value) {
    setDate(value)
    setDatePicker(false)
  }

  function onTimeSelected(event, value) {
    setTime(value)
    setTimePicker(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  //console.log("items", items)

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
              <Text className='text-gray-400 mt-2 text-extrabold'>
                {/* <Currency quantity={price} currency='KES' /> */}
                KSh. {price}
              </Text>
              <Text className='text-xs font-bold mt-2'>Per Hour</Text>
            </View>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: '#F3F3F4',
              }}
              source={{ uri: image }}
              //source={{uri:"http://192.168.43.19:80/uploads/emedlogo.png" }}
              className='h-16 w-16 p-4'
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className='bg-white '>
          <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
            <TouchableOpacity
              // disabled={!items.length}
              onPress={showDatePicker}
            >
              <CalendarDaysIcon size={40} color={'#00AA13'} />
            </TouchableOpacity>
            <Text className='flex-1 '>{date.toDateString()}</Text>

            <TouchableOpacity onPress={showTimePicker}>
              <ClockIcon size={40} color='#00AA13' />
            </TouchableOpacity>
            <Text className='flex-1 '>{time.toLocaleTimeString('en-US')}</Text>
          </View>

          <View className='flex-row items-center space-x-12 px-4 bg-white'>
            <TouchableOpacity onPress={showTimePicker}>
              <ChatBubbleOvalLeftEllipsisIcon size={40} color='#00AA13' />
            </TouchableOpacity>

            <TextInput
              value={descriptiona}
              onChangeText={setDescription}
              style={tw`text-center `}
              placeholderTextColor='#00AA13'
              placeholder='Description here ...'
              multiline
              // style={{maxHeight: ...}}
            />

            <TouchableOpacity
              disabled={!incompleteform}
              onPress={addItemToBasket}
            >
              <PlusCircleIcon
                size={40}
                color={!incompleteform ? '#00AA13' : 'gray'}
              />
            </TouchableOpacity>
          </View>

          <View>
            <View>
              {datePicker && (
                <DateTimePicker
                  value={date}
                  mode={'date'}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={true}
                  onChange={onDateSelected}
                />
              )}

              {timePicker && (
                <DateTimePicker
                  value={time}
                  mode={'time'}
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  is24Hour={false}
                  onChange={onTimeSelected}
                />
              )}
            </View>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow
