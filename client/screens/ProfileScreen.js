import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
  Image,Platform 
} from 'react-native'
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
 
  Fab,
  Icon,
  Stack,
} from 'native-base'
import tw from 'tailwind-react-native-classnames'

import { updateUser } from '../features/user/userSlice'
//import { View, Text, SafeAreaView,TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectShop } from '../features/shop/shopSlice'
import {
  selectBasketItems,
  removeFromBasket,
  selectBasketTotal,
} from '../features/basket/basketSlice'
import { usePropsResolutionTest } from 'native-base'
import { XCircleIcon } from 'react-native-heroicons/solid'
// import Currency from 'react-currency-formatter'
import DropDownPicker from 'react-native-dropdown-picker'
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../features/job/jobSlice'
import Toast from 'react-native-root-toast'
import * as ImagePicker from 'expo-image-picker';

const BasketScreen = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    //jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [name, setName] = useState(null)
  const [description, setDescription] = useState()
  const [phonenumber, setPhonenumber] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [availability, setAvailability] = useState(null)
  const [price, setPrice] = useState(null)
  const [jobType, setJobType] = useState(null)
  const [open, setOpen] = useState(false)
  const [category, setValue] = useState(null)
  const [image, setImage] = useState(null);
  // const [images, setImages] = useState({
  //   ...images,
  //   url: user?.name || '',
  //   name: user?.email || '',
  //   description: description || '',
  //   price: user?.location || '',
  // })

  const [items, setItems] = useState([
    { label: 'AMBULANCE SERVICES', value: 'AMBULANCE SERVICES' },
    { label: 'MEDICAL PHYSICIAN', value: 'MEDICAL PHYSICIAN' },
    { label: 'PRIMARY PHYSICIAN', value: 'PRIMARY PHYSICIAN' },
    { label: 'GYNAECOLOGIST', value: 'GYNAECOLOGIST' },
    { label: 'PAEDRIATRICIAN', value: 'PAEDRIATRICIAN' },
    { label: 'DENTIST', value: 'DENTIST' },
    { label: 'OPHTHALMOGIST', value: 'OPHTHALMOGIST' },
    { label: 'DERMATOLOGIST', value: 'DERMATOLOGIST' },
    { label: 'ENT DOCTOR', value: 'ENT DOCTOR' },
    { label: 'PSYCHIATRIST', value: 'PSYCHIATRIST' },
    { label: 'NURSING CARE SERVICES', value: 'NURSING CARE SERVICES' },
    { label: 'CLINICAL SERVICES', value: 'CLINICAL SERVICES' },
    { label: 'MIDWIFE SERVICES', value: 'MIDWIFE SERVICES' },
    {
      label: 'FAMILY PLANNING SERVICES',
      value: 'FAMILY PLANNING SERVICES',
    },
    
    { label: 'STI TREATMENT SERVICE', value: 'STI TREATMENT SERVICE' },
    { label: 'BASIC LAB SERVICES', value: 'BASIC LAB SERVICES' },
    { label: 'ABORTION CARE SERVICES', value: 'ABORTION CARE SERVICES' },
    { label: 'HIV/PREP/PEP SERVICES', value: 'HIV/PREP/PEP SERVICES' },
    { label: 'NUTRITIONIST SERVICES', value: 'NUTRITIONIST SERVICES' },
    { label: 'GBV RECOVERY SERVICES', value: 'GBV RECOVERY SERVICES' },
    { label: 'PHYSIOTHERAPIST SERVICES', value: 'PHYSIOTHERAPIST SERVICES' },
  ])
  const incompleteform = !description || !name || !jobType || !category

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !description) {
      Toast.show('Please fill out all fields', {
        duration: Toast.durations.LONG,
      })
      return
    }
    const url = 'http://192.168.43.19:80/uploads/emedlogo.png'
    const images = [
      {
        name: name,
        description: description,
        price: price,
        url: url,
        id: user._id,
      },
    ]


    const lng = user.location.coords.longitude
    const lat = user.location.coords.latitude
    const values = {
      name,
      availability,
      price,
      description,
      imageUrl,
      phonenumber,
      category,
      jobType,
      user,
      images,
      lng,
      lat
    }
    console.log('values', values)
    dispatch(createJob(values))
    // createJob(values)
    navigation.goBack()
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  console.log(user.location.coords.latitude, "userlocation")
  return (
    <SafeAreaView className='flex-1 bg-white pt-10'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00AA13] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>Add a service</Text>
            {/* <Text className="text-center text-gray-400"> Hi {user.name}, become a health service provider</Text> */}
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-ray-100 absolute top-3 right-5'
          >
            <XCircleIcon color='#00AA13' height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View>


        <TouchableOpacity
            //  onPress={handleSubmit}
            //   className="rounded-lg bg-[#00AA13] p-4"

            // onPress={handleSubmit}
            onPress={pickImage}
         
            style={[
              tw`w-full p-3 rounded-xl  bottom-0 `,
             { backgroundColor: 'green' },
            ]}
          >
            <Text className='text-center text-white text-l font-bold'>
            Pick an image
            </Text>
          </TouchableOpacity>
          <View className='divide-y divide-gray-200'>
      {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
      {image && <Image source={{ uri: image }}  className='h-40 w-3/4 rounded m-2' />}
    </View>
        </View>
        <Text></Text>
        <ScrollView className='divide-y divide-gray-200'>
          <View style={tw`flex-1 pl-8 `} showsVerticalScrollIndicator={false}>
            {/* <Text style={[tw`text-gray-700 p-2 text-lg font-bold`]}>
        Hi {user.name}, become a health service provider
        </Text> */}
            <ScrollView>
              <TextInput
                value={name}
                onChangeText={setName}
                style={tw`text-center pt-2 bg-white w-5/6  `}
                placeholder='Enter name'
              />
              <Text></Text>
              <TextInput
                value={description}
                onChangeText={setDescription}
                style={tw`text-center  pb-2 pt-2 bg-white w-5/6  `}
                placeholder='Give a description your service'
                multiline
              />
              <Text></Text>
              <Radio.Group
                name='myRadioGroup'
                accessibilityLabel='favorite number'
                value={jobType}
                onChange={(nextValue) => {
                  setJobType(nextValue)
                }}
              >
                <View style={tw`text-xs justify-between  w-5/6 `}>
                  <Radio style={tw` p-1 text-xs `} value='Doctor' my={1}>
                    Doctor
                  </Radio>
                  <Radio style={tw`p-1 text-xs`} value='Ambulance' my={1}>
                    Ambulance
                  </Radio>
                  <Radio style={tw` p-1  text-xs`} value='Service' my={1}>
                    Service
                  </Radio>
                </View>
              </Radio.Group>
              <Text></Text>
              <View style={tw`  w-5/6 `}>
                <DropDownPicker
                  style={tw`w-full p-2 pl-12`}
                  placeholder='Select a category'
                  open={open}
                  value={category}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  // setItems={setItems}
                />
              </View>
              <Text></Text>
              {/* <TextInput
                value={images.url}
                onChangeText={setImages}
                style={tw`text-center  pb-2 pt-2 bg-white w-5/6  `}
                placeholder='Enter photo URL '
                multiline={true}
              /> */}
              <Text></Text>
              {/* <Text style={[tw`text-center p-4 text-red-400 font-bold` ]}>
        Step 2: Set your availability
        </Text> */}

              <TextInput
                value={availability}
                onChangeText={setAvailability}
                style={tw`text-center  pb-2 pt-2 bg-white w-5/6 `}
                placeholder='Enter availability (mon-fri, 24/7,...)'
              />
              <Text></Text>
              {/* <Text style={tw`text-center p-4 text-red-400 font-bold`}>
        Step 3: Upload  Qualifications & Vehicle/Ambulance registration Documents
        </Text> */}
              <View
                style={tw`flex-row  text-xs justify-between relative w-5/6 `}
              >
                <TextInput
                  value={price}
                  onChangeText={setPrice}
                  style={tw`text-center  p-2 bg-white`}
                  placeholder='Enter  Fee in Ksh'
                />

                <TextInput
                  value={phonenumber}
                  onChangeText={setPhonenumber}
                  style={tw`text-center pr-2 p-2 bg-white`}
                  placeholder='Enter Phone number'
                  keyboardType='numeric'
                  maxLength={13}
                />
              </View>
              <Text></Text>
            </ScrollView>

            {/* <TouchableOpacity 
        onPress={handleSubmit}
        disabled={incompleteform}
        style={[tw`w-64 p-3 rounded-xl  bottom-0 `,
         incompleteform ? tw`bg-gray-400` :  { backgroundColor:'#00AA13'}]}>
           <Text style={tw`text-center text-white  `}> 
           Add service
           </Text> 
        </TouchableOpacity> */}
          </View>
        </ScrollView>
        <View className='p-5 bg-white mt-5 space-y-4'>
          {/* <View className="flex-row justify-between">
                <Text className="text-gray-400">Subtotal</Text>
                <Text className="text-gray-400">
                <Currency quantity={basketTotal} currency="KES" />
                </Text>
              </View> 
              <View className="flex-row justify-between">
                <Text className="text-gray-400">Delivery Fee</Text>
                <Text className="text-gray-400">
                <Currency quantity={599} currency="KES" />
                </Text>
              </View>      */}
          {/* <View className="flex-row justify-between">
                <Text >Total Fee</Text>
                <Text className="font-extrabold">
                <Currency quantity={basketTotal} currency="KES" />
                </Text>
              </View>  */}

          <TouchableOpacity
            //  onPress={handleSubmit}
            //   className="rounded-lg bg-[#00AA13] p-4"

            onPress={handleSubmit}
            disabled={incompleteform}
            style={[
              tw`w-64 p-3 rounded-xl  bottom-0 `,
              incompleteform ? tw`bg-gray-400` : { backgroundColor: '#00AA13' },
            ]}
          >
            <Text className='text-center text-white text-l font-bold'>
              Add service
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
