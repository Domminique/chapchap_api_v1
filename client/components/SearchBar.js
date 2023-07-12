import React, { useState, useEffect } from 'react'
import {
  VStack,
  HStack,
  Input,
  Button,
  IconButton,
  Spinner,
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
import { useNavigation } from '@react-navigation/native'

const initialState = { email: '' }

const SearchBar = () => {
  const navigation = useNavigation()

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
              onPressIn={() => {
                navigation.navigate('Search')
              }}
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
              // onPress = {handleSubmit}
              onPress={() => {}}
            />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  )
}

export default SearchBar
