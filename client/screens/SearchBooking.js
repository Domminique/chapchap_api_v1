import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import DatePicker from 'react-native-date-picker'
import {
  Ionicons,
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useUserContext } from '../context/user_context'
import { useProductsContext } from '../context/products_context'
import { HStack, Spinner } from 'native-base'

const BookingScreen = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    createBooking,
    getAllBookings,
  } = useProductsContext()
  const { toggleSidebar, logoutUser, user, updateUser, showAlert } =
    useUserContext()
  const navigation = useNavigation()
  const { params } = useRoute()
  const [name, setName] = useState(name)
  const [email, setEmail] = useState(email)
  const [description, setDescription] = useState(description)
  const [descriptions, setLocation] = useState(descriptions)
  const [phonenumber, setPhonenumber] = useState(phonenumber)
  const [datePicker, setDatePicker] = useState(false)
  const [date, setDate] = useState(new Date())
  const [timePicker, setTimePicker] = useState(false)
  const [time, setTime] = useState(new Date(Date.now()))

  useEffect(() => {
    getJobs()
    // eslint-disable-next-line
  }, [])

  //const job = jobs[params]

  const { item } = params
  //console.log(params, job)

  const job = item

  const incompleteform = !description
  //  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

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
    // if (!date ||  !description ) {
    //   displayAlert()
    //   return
    // }
    const { _id, name, phonenumber, email, lastName, location } = job
    const patientId = _id
    const patientName = name
    const patientLocation = location
    const patientPhonenumber = phonenumber
    const serviceProviderID = job.createdBy

    const booking = {
      date,
      time,
      patientId,
      description,
      patientLocation,
      patientName,
      patientPhonenumber,
      user,
      job,
      serviceProviderID,
    }

    createBooking({ booking })
    navigation.navigate('Explore')
  }

  return (
    <KeyboardAvoidingView
      style={[tw`h-full  bg-gray-900 pt-16`, { opacity: 0.89 }]}
    >
      <Text style={tw`text-xl text-center text-gray-500 p-2 font-bold`}>
        Hi {user.name}, continue and Book {job?.name}
      </Text>

      {/* <View style={tw`flex-row justify-evenly mt-5`}>
      <Image style={tw`h-32 w-32 rounded-full`} 
       
       source={require('../components/images/nodata.png')}
         />
        <Image style={tw`h-32 w-32 rounded-full`} 
        
        source={require('../components/images/nodata.png')}
        />
      </View> */}

      <View style={tw`flex-1 items-center`}>
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

        <Text style={tw`text-center p-4 text-red-700 font-bold`}>
          Step 1: Pick Date and Time
        </Text>
        {/* <TextInput 
        value={name}
        onChangeText={setName} 
        style={tw`text-center text-xl pb-2`}
        placeholder='Enter a Profile Pic URL'/> */}
        <View style={tw`flex-row justify-evenly mt-5`}>
          {!datePicker && (
            <View style={tw`pr-5 `}>
              <TouchableOpacity style={tw``} onPress={showDatePicker}>
                <Ionicons name='calendar-sharp' size={40} color='#fff' />
              </TouchableOpacity>
              {/* <Button title="Pick Date" 
       color="green" onPress={showDatePicker} /> */}
            </View>
          )}
          <Text style={tw`text-center text-white text-xl pb-2`}>
            {date.toDateString()}
          </Text>
        </View>

        <View style={tw`flex-row justify-evenly mt-5 `}>
          {!timePicker && (
            <View style={tw`pr-10 `}>
              <TouchableOpacity style={tw``} onPress={showTimePicker}>
                <Ionicons name='time-sharp' size={40} color='#fff' />
              </TouchableOpacity>
              {/* <Button title="Pick Time" color="green" onPress={showTimePicker} /> */}
            </View>
          )}
          <Text style={tw`text-center text-white text-xl pb-2`}>
            {time.toLocaleTimeString('en-US')}
          </Text>
        </View>

        {/* <TextInput 
        value={email}
        onChangeText={setEmail} 
        style={tw`text-center text-xl pb-2`}
        placeholder='Enter your occupation'/> */}
        <Text style={tw`text-center p-4 text-red-600 font-bold`}>
          Step 2: Description
        </Text>
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={tw`text-center text-white text-xl`}
          placeholderTextColor='#fff'
          placeholder='Description here ...'
          multiline
          // style={{maxHeight: ...}}
        />
        {/* <Text style={tw`text-center p-4 text-red-600 font-bold`}>
       Step 3 : Payment (Mpesa, paypal, credit..)
        </Text> */}
        {/* <TextInput 
        value={location}
        onChangeText={setLocation} 
        style={tw`text-center text-xl pb-2`}
        placeholder='Enter your location'
       
       /> */}
        {/* <TextInput 
        value={phonenumber}
        onChangeText={setPhonenumber} 
        style={tw`text-center text-xl pb-2  text-white`}
        placeholder='Payment method'
        keyboardType='numeric'
        maxLength={13}/> */}

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={incompleteform}
          style={[
            tw`w-64 p-3 rounded-xl absolute bottom-10 `,
            incompleteform ? tw`bg-gray-400` : { backgroundColor: '#00AA13' },
          ]}
        >
          <Text style={tw`text-center text-white text-xl `}>
            Book Appointment
          </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        style={tw`bg-white m-5 px-10 py-8 rounded-full mt-20`}
      onPress={()=>{
        
        navigation.goBack();
        navigation.navigate('Chat')
      }}>
      <Text style={tw`text-center`}> Book Now</Text>
      </TouchableOpacity> */}
    </KeyboardAvoidingView>
  )
}

export default BookingScreen

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
})
