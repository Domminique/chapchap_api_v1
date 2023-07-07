//import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
//import React from 'react'
import tw from 'tailwind-react-native-classnames'
//import { useAppContext } from '../context/appContext'
//import { useUserContext } from '../context/user_context'
//import { useProductsContext } from '../context/products_context'
//import { useState } from 'react'
//import { useNavigation, useRoute } from '@react-navigation/native'
//import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../features/user/userSlice'

// const SettingsScreen = () => {
//   const { isLoading, user } = useSelector((store) => store.user);
//   const dispatch = useDispatch();
//   const navigation = useNavigation();

//   const { params } = useRoute()
//   //const { toggleSidebar, logoutUser, user, updateUser } = useUserContext()
//   const [name, setName] = useState(user?.name)
//   const [email, setEmail] = useState(user?.email)
//   const [lastName, setLastName] = useState(user?.lastName)
//   const [location, setLocation] = useState(user?.location)
//   const [phonenumber, setPhonenumber] = useState(user?.phonenumber)
//   // const  longitude = params.location.coords.longitude
//   // const latitude = params.location.coords.latitude

//     const incompleteform = !name || !email || !lastName || !location;

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (!name || !email || !lastName || !location) {
//           displayAlert()
//           return
//         }
//         dispatch(updateUser({ name, email, lastName, location, phonenumber}));
//        // updateUser({ name, email, lastName, location, phonenumber, longitude, latitude })
//         navigation.goBack()
//       }

// // console.log("param in setting",params.location.coords.longitude,
// // params.location.coords.latitude )

//     return (
//     <View style={tw`flex-1 items-center pl-1 pt-16`}>
//      <Image
//           style={tw`h-20 w-full rounded-full`}
//           source={require('../components/images/emedlogo.png')}
//           resizeMode="contain"
//       />
//       {/* <Text style={tw`text-xl text-gray-500 p-2 font-bold`}>
//         Hello {user.name}</Text> */}

//         <Text style={tw`text-center p-4 text-red-400 font-bold`}>
//         Step 1: The Basic Info
//         </Text>
//         <TextInput
//         value={name}
//         onChangeText={setName}
//         style={tw`text-center text-xl pb-2`}
//         placeholder='Enter a name'/>
//         <TextInput
//         value={lastName}
//         onChangeText={setLastName}
//         style={tw`text-center text-xl pb-2`}
//         placeholder='Enter your Last name'
//        />
//          <Text style={tw`text-center p-4 text-red-400 font-bold`}>
//         Step 2: Contact Info
//         </Text>
//         <TextInput
//         value={email}
//         onChangeText={setEmail}
//         style={tw`text-center text-xl pb-2 pt-2`}
//         placeholder='Enter your Email'/>

//         <TextInput
//         value={phonenumber}
//         onChangeText={setPhonenumber}
//         style={tw`text-center text-xl pb-2 pt-2`}
//         placeholder='Enter Phone Number'
//         keyboardType='numeric'
//         maxLength={13}/>

//         <TextInput
//         value={location}
//         onChangeText={setLocation}
//         style={tw`text-center text-xl pb-2 pt-2`}
//         placeholder='Enter your location'

//        />

//         <TouchableOpacity
//         onPress={handleSubmit}
//         disabled={incompleteform}
//         style={[tw`w-64 p-3 rounded-xl absolute bottom-10 `,
//          incompleteform ? tw`bg-gray-400` :  { backgroundColor:'#00AA13'}]}>
//            <Text style={tw`text-center text-white text-xl `}>
//            Update Profile
//            </Text>
//         </TouchableOpacity>
//     </View>
//    )

// }

// export default SettingsScreen

// const styles = StyleSheet.create({})

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
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

const BasketScreen = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  // const dispatch = useDispatch();
  // const navigation = useNavigation();

  const { params } = useRoute()
  //const { toggleSidebar, logoutUser, user, updateUser } = useUserContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [location, setLocation] = useState({})
  const [phonenumber, setPhonenumber] = useState(user?.phonenumber)
  const [language, setLanguage] = useState(user?.language)
  // const  longitude = params.location.coords.longitude
  // const latitude = params.location.coords.latitude

  const incompleteform = !name || !email || !lastName
  const navigation = useNavigation()
  const shop = useSelector(selectShop)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()
  const [groupedItemsInBusket, setGroupedItemsInBasket] = useState([])
  const basketTotal = useSelector(selectBasketTotal)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !lastName) {
      // displayAlert()
      return
    }
    console.log(
      'updates',
      name,
      email,
      lastName,
      location,
      language,
      phonenumber
    )
    dispatch(
      updateUser({ name, email, lastName, location, language, phonenumber })
    )
    // updateUser({ name, email, lastName, location, phonenumber, longitude, latitude })
    // navigation.goBack()
  }

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      ;(results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  return (
    <SafeAreaView className='flex-1 bg-white pt-10'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00AA13] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>My settings</Text>
            {/* <Text className="text-center text-gray-400">{shop.title}</Text> */}
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-ray-100 absolute top-3 right-5'
          >
            <XCircleIcon color='#00AA13' height={50} width={50} />
          </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {/* {Object.entries(groupedItemsInBusket).map(([key, items])=>(
                <View key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5">
                    <Text>{items.length} X</Text>
                    <Image 
                    // source={{uri:items[0]?.image}}
                    source={{uri:"http://192.168.43.19:80/uploads/emedlogo.png" }}
                    className="h-12 w-12 rounded-full"
                    />
                     <Text className="flex-1">{items[0]?.name}</Text>


                     <Text className="text-gray-600">
                     <Currency quantity={items[0]?.price} currency="KES" />
                     </Text>

                     <TouchableOpacity>
                     <Text className="text-[#00AA13] text-xs"
                     onPress={() => dispatch(removeFromBasket({id:key}))}
                     >Remove</Text>
                     </TouchableOpacity>
                </View>
            ))} */}
          <View>
            {/* <Text style={tw`text-xl text-gray-500 p-2 font-bold`}>
        Hello {user.name}</Text> */}
            <Text style={tw`text-center p-4 text-red-400 font-bold`}>
              Step 1: The Basic Info
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={tw`text-center text-xl pb-2`}
              placeholder='Enter a name'
            />
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              style={tw`text-center text-xl pb-2`}
              placeholder='Enter your sex '
            />
            <Text style={tw`text-center p-4 text-red-400 font-bold`}>
              Step 2: Contact Info
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={tw`text-center text-xl pb-2 pt-2`}
              placeholder='Enter your Email'
            />
            <TextInput
              value={phonenumber}
              onChangeText={setPhonenumber}
              style={tw`text-center text-xl pb-2 pt-2`}
              placeholder='Enter Phone Number'
              keyboardType='numeric'
              maxLength={13}
            />
            <TextInput
              value={language}
              onChangeText={setLanguage}
              style={tw`text-center text-xl pb-2 pt-2`}
              placeholder='Enter your language'
            />
            {/* <TextInput
              value={lastName}
              onChangeText={setLastName}
              style={tw`text-center text-xl pb-2 pt-2`}
              placeholder='Enter your currency'
            /> */}
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
            onPress={handleSubmit}
            className='rounded-lg bg-[#00AA13] p-4'
          >
            <Text className='text-center text-white text-l font-bold'>
              Update Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen
