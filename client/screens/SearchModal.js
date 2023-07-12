// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code

import React, { useState, useEffect } from 'react'

import {
  VStack,
  HStack,
  Input,
  Button,
  IconButton,
  Spinner,
  Icon,
  FlatList,
  Heading,
  Avatar,
  Text,
  Spacer,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
} from 'native-base'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5, Feather, Entypo } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
//import products_url from '../utils/constants'
import { distance, poslat, poslng } from '../utils/geodata'

const App = () => {
  const { user } = useSelector((store) => store.user)
  const navigation = useNavigation()
  const [search, setSearch] = useState('')
  const [filteredDataSource, setFilteredDataSource] = useState([])
  const [masterDataSource, setMasterDataSource] = useState([])

  // console.log('masterDataSource', masterDataSource.products)
  // console.log('filteredDataSource', filteredDataSource.products)
  useEffect(() => {
    fetch('https://ongatarongaionline.co.ke/api/v1/products') 
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson.products)
        setMasterDataSource(responseJson.products)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name : ''
        const textData = text
        return itemData.indexOf(textData) > -1
      })
      setFilteredDataSource(newData)
      setSearch(text)
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource)
      setSearch(text)
    }
  }

  const ItemView = ({ item }) => {
    console.log('Item', item)
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item._id}
        {'.'}
        {item.name}
      </Text>
    )
  }

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    )
  }

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.name)
  }

  console.log(filteredDataSource, 'filteredDataSource')

// Filter verifield
const  verified = filteredDataSource?.filter((item) => item?.availability == true)


// filter availability

const onduty = verified?.filter((item) => item?.verified == true)

  

  setTimeout(() => { 

  }, 3000)
 // Finding nearby
 
 const nearBy = [];
 const poslat = user?.location.coords.latitude ;
 const poslng = user?.location.coords.longitude;
 
 
 const data = onduty || {}
 for (var i = 0; i < data.length; i++) {
  // if this location is within 0.1KM of the user, add it to the list
  if (distance(poslat, poslng, data[i].lat, data[i].lng, "K") <= 5.0) {  
      Array.prototype.push.call(nearBy ,{
        name:data[i].name , 
        name:data[i].name , 
        category:data[i].category,
        _id:data[i]._id,
        title:data[i].title,
        imageLogo:data[i].imageLogo,
        images:data[i].images,
        image:data[i].image,
        jobType:data[i].jobType,
        multiplier:data[i].multiplier,
        description:data[i].description,
        position:data[i].position,
        image:data[i].image,
        availability:data[i].availability, 
        phonenumber:data[i].phonenumber,     
      } );
  }
 }

 console.log("nearby featured", verified )
 
  return (
    <SafeAreaView style={tw` flex-1 p-3 pt-12 `}>
      <HStack space={2}>
        <Input
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid='transparent'
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
            <Icon as={Feather} name='search' size='sm' color='warmGray.50' />
          }
          // onPress = {handleSubmit}
          onPress={() => {}}
        />
      </HStack>

      <Box>
        <FlatList
          data={nearBy}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              // onPress={() => navigation.navigate('SearchDetails', { item })}
              onPress={() => navigation.navigate('SearchDetails', item)}
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
                  <Avatar
                    size='48px'
                    source={{
                      uri: item.image,
                    }}               
                  />
                 
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
})

export default App
