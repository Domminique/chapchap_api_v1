// import React, {useState, useEffect} from "react";
// import { VStack, HStack, Input, Button, IconButton,Spinner,  Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading } from "native-base";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { FontAwesome5, Feather, Entypo } from "@expo/vector-icons";
// import tw from 'tailwind-react-native-classnames'
// import { useProductsContext } from '../context/products_context';

// const initialState = {

//   email: '',

// }

// function SearchBar() {

//   const {
//     getJobs,
//     isLoading,
//     search,
//     searchStatus,
//     searchType,
//     sort,
//     jobs,
//     page,
//     sortOptions,
//     handleChange,
//     clearFilters,
//     jobTypeOptions,
//     statusOptions,
//   } = useProductsContext()

//   const [values, setValues] = useState(initialState)
//   console.log('searchTerm', values)

//   const handleEmail = (text) => {
//     setValues({ ...values, email: text })
//  }

//  useEffect(() => {
//         getJobs()
//         // eslint-disable-next-line
//       }, [page, search, searchStatus, searchType, sort])
//       if (isLoading) {
//         return  <HStack space={8} justifyContent="center" alignItems="center">

//         <Spinner size="lg" />
//       </HStack>
//       }

//       if (jobs.length === 0) {
//         return (
//           <Text
//           style={tw`mt-12 text-lg font-semibold  pl-4 pt-8`}>
//            Sorry, no courses matched your search.
//             </Text>

//         )
//       }
//   // const handleSearch = (text) => {
//   //   if (isLoading) return
//   //   handleChange({ name: e.target.name, value: e.target.value })
//   // }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const { email} = values
//     clearFilters()
//     console.log('success', values)
//   }
//   return <Box>
//   <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
//           <Divider />
//         </Box>}>

//       <VStack w="100%" space={5} alignSelf="center">
//         <Heading fontSize="3xl"  >Explore </Heading>

//  <HStack space={2}>
//     <Input
//     name='email'
//     value={values.email}
//     onChangeText = {handleEmail}
//     // onPressIn ={navi}
//     type='text'
//     placeholder="Search chapchap"
//     width="90%" borderRadius="4" py="3" px="1" fontSize="14"
//     InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400"
//      as={<MaterialIcons name="search" />}
//      />}

//     InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400"
//     as={<MaterialIcons name="mic" />} />} />
//     <IconButton style={{backgroundColor:'#00AA13'}} borderRadius="sm"
//     variant="solid" icon={<Icon as={Feather} name="search" size="sm"
//     color="warmGray.50" />}
//     onPress = {handleSubmit}
//     // onPress={() => { }}
//     />
// </HStack>

//       </VStack>
//     </VStack>;

// }

// function Example() {
//   return <SearchBar />

// }

//     export default () => {
//         return (

//             <Center>
//                 <Example />
//             </Center>

//         );
//     };

import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  VStack,
  HStack,
  Input,
  Button,
  IconButton,
  Spinner,
  Avatar,
  Spacer,
  FlatList,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5, Feather, Entypo } from '@expo/vector-icons'
import tw from 'tailwind-react-native-classnames'
import { useProductsContext } from '../context/products_context'

const initialState = { email: '' }

const SearchBar = () => {
  const {
    getJobs,
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    jobs,
    page,
    sortOptions,
    handleChange,
    clearFilters,
    jobTypeOptions,
    statusOptions,
  } = useProductsContext()

  const [values, setValues] = useState(initialState)
  console.log('searchTerm', values)

  const handleEmail = (text) => {
    setValues({ ...values, email: text })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email } = values
    clearFilters()
    console.log('success', values)
  }
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
  // const handleSearch = (text) => {
  //   if (isLoading) return
  //   handleChange({ name: e.target.name, value: e.target.value })
  // }

  return (
    <Box style={tw`items-center`}>
      <VStack
        my='4'
        space={5}
        w='100%'
        maxW='300px'
        divider={
          <Box px='2'>
            <Divider />
          </Box>
        }
      >
        <VStack w='100%' space={5} alignSelf='center'>
          <Heading fontSize='3xl'>Explore </Heading>

          <HStack space={2}>
            <Input
              name='email'
              value={values.email}
              onChangeText={handleEmail}
              // onPressIn ={navi}
              type='text'
              placeholder='Search chapchap'
              width='90%'
              borderRadius='4'
              py='3'
              px='1'
              fontSize='14'
              InputLeftElement={
                <Icon
                  m='2'
                  ml='3'
                  size='6'
                  color='gray.400'
                  as={<MaterialIcons name='search' />}
                />
              }
              InputRightElement={
                <Icon
                  m='2'
                  mr='3'
                  size='6'
                  color='gray.400'
                  as={<MaterialIcons name='mic' />}
                />
              }
            />
            <IconButton
              style={{ backgroundColor: '#00AA13' }}
              borderRadius='sm'
              variant='solid'
              icon={
                <Icon
                  as={Feather}
                  name='search'
                  size='sm'
                  color='warmGray.50'
                />
              }
              onPress={handleSubmit}
              // onPress={() => { }}
            />
          </HStack>
        </VStack>
      </VStack>

      <Box style={tw`pt-8`}>
        <Text style={tw`text-gray-700 pl-4 text-xl`}>Near You </Text>
        {!jobs.featured && (
          <>
            <Box>
              <Box>
                <FlatList
                  data={jobs.slice(2, 7)}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                    // onPress={() => setMain({ ...values, url: item.url, filename:item.filename })}

                    //   const handleEmail = (text) => {
                    //     setValues({ ...values, email: text })
                    //  }
                    // onPress={() => setMain(images[item.id])}
                    // onPress={() => navigation.navigate('MapScreen', { id: item._id })}
                    >
                      <Box
                        borderBottomWidth='1'
                        _dark={{ borderColor: 'gray.600' }}
                        borderColor='coolGray.200'
                        pl='4'
                        pr='5'
                        py='4'
                      >
                        <HStack space={3} justifyContent='space-between'>
                          {/* <Avatar
                            size='48px'
                            source={require('../components/images/emedlogo.png')}
                          /> */}

                          <VStack>
                            <Text
                              _dark={{ color: 'warmGray.50' }}
                              color='coolGray.800'
                              bold
                            >
                              {item.name}
                            </Text>

                            <Text
                              color='coolGray.600'
                              _dark={{ color: 'warmGray.200' }}
                            >
                              {item.category}
                            </Text>
                          </VStack>

                          <Spacer />
                          <Text
                            fontSize='xs'
                            _dark={{ color: 'warmGray.50' }}
                            color='coolGray.800'
                            alignSelf='flex-start'
                          >
                            {/* <Icon name="menu" color='#fff' /> */}
                            New
                          </Text>
                        </HStack>
                      </Box>
                    </TouchableOpacity>
                  )}
                />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  )
}

export default SearchBar
