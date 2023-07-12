import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'
// import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { useNavigation } from '@react-navigation/native'
import {
  setOrigin,
  setDestination,
  setTravelTimeInformation,
} from '../features/nav/navSlice'
import { useAppContext } from '../context/appContext'
import { useUserContext } from '../context/user_context'

import { useProductsContext } from '../context/products_context'
import {
  Box,
  Heading,
  AspectRatio,
  Spinner,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from 'native-base'

import {
  ListItem,
  Avatar,
  Card,
  Tile,
  Button,
  Icon,
} from 'react-native-elements'
// import Image1 from './images/doctors2.png'
// import Image2 from './images/car.png'
// import Image3 from './images/medicine1.png'
import tw from 'tailwind-react-native-classnames'

const NavOptions = () => {
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
  } = useProductsContext()

  const navigation = useNavigation()
  useEffect(() => {
    getJobs()
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort])
  if (isLoading) {
    return (
      <HStack space={8} justifyContent='center' alignItems='center'>
        <Spinner size='lg' />
      </HStack>
    )
  }

  if (jobs.length === 0) {
    return (
      <Text style={tw`mt-12 text-lg font-semibold  pl-4 pt-8`}>
        Sorry, no courses matched your search.
      </Text>
    )
  }

  // const Categories = ({ categories, filterItems }) => {
  //   return (
  //     <div className='btn-container'>
  //       {categories.map((category, index) => {
  //         return (
  //           <button
  //             type='button'
  //             className='filter-btn'
  //             key={index}
  //             onClick={() => filterItems(category)}
  //           >
  //             {category}
  //           </button>
  //         )
  //       })}
  //     </div>
  //   )
  // }

  // const allCategories = [
  //   'all',
  //   ...new Set(jobs.map((item) => item.category)),
  // ]

  // console.log('allCategories', allCategories)

  // const [menuItems, setMenuItems] = useState(jobs)
  // const [categories, setCategories] = useState(allCategories)

  // const filterItems = (category) => {
  //   if (category === 'all') {
  //     setMenuItems(jobs)
  //     return
  //   }
  //   const newItems = jobs.filter(
  //     (item) => item.category === category
  //   )
  //   setMenuItems(newItems)
  // }

  return (
    <View>
      {/* <Categories 
       categories={categories}
      filterItems={filterItems} /> */}
      <FlatList
        data={jobs}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={(location) => {
              navigation.navigate('Categories', { item })
            }}
            // onPress={() => filterItems(category)}
            style={[
              tw`bg-gray-200 pl-2 m-2 h-12 w-36 `,
              { backgroundColor: '#00AA13', borderRadius: 5 },
            ]}
          >
            <View>
              <Text style={tw`mt-1 text-white font-bold`}>{item.category}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default NavOptions

const styles = StyleSheet.create({})
