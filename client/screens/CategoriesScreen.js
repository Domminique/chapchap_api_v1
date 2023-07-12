import { StyleSheet, Image, View,  FlatList,
    TouchableOpacity } from 'react-native'
   // import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native'
  import React, {useState, useEffect} from 'react'
  import * as Location from 'expo-location'
  import { useNavigation, useRoute } from '@react-navigation/native';
  import { setOrigin,setDestination, setTravelTimeInformation } from '../features/nav/navSlice'
  import { useAppContext } from '../context/appContext'
  import { useFilterContext } from '../context/filter_context'
  import { useProductsContext } from '../context/products_context';
  //import {  HStack, Spinner} from "native-base";
  import { Box, Heading, AspectRatio,Spinner,  Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";
  import {
      ListItem,
      Avatar,
      Card,
      Tile,
      Button,
      Icon,
    } from 'react-native-elements'
//   import Image1 from './images/doctors2.png'
//   import Image2 from './images/car.png'
//   import Image3 from './images/medicine1.png'
  import tw from 'tailwind-react-native-classnames'
import HeaderComponent from '../components/HeaderComponent';
  
  //import { useDispatch, useSelector  } from 'react-redux'
  //import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
  
//   const datas = [
//      { 
//         id: '123',
//         name: 'Teens online sesion',
//         teacher :" Mr. Matheka", 
//         description:"Embracing Spritual formation of teens in our society.",
//         image: 'Image2',
//         screen: 'MapScreen',
//         image: Image.resolveAssetSource(Image3).uri,
//       },
//     { 
//       id: '125',
//       name: 'Find a Doctor',
//       teacher :" Mr. Matheka", 
//       description:"Embracing Spritual formation of teens in our society.",
//       image: 'Image2',
//       screen: 'DoctorsMapScreen',
//       image: Image.resolveAssetSource(Image1).uri,
//     },
     
//       {
//         id: '456',
//         name: 'Find an Ambulance',
//       description:"The church has increasingly embracin Spritual formation of teens in our society.",
//         image: Image.resolveAssetSource(Image2).uri,
//         screen: 'AmbulanceMapScreen',
//       },
//     ]
  
    const NavOptions = () => {
    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [lastName, setLastName] = useState(user?.lastName)
    const [location, setLocation] = useState(user?.location)
    const [latitude, setLatitude] = useState(user?.latitude)
    const [longitude, setLongitude] = useState(user?.longitude) 
      const navigation = useNavigation()

      
  const { params } = useRoute()
  const  {item} = params
      const { user, showAlert, displayAlert,updateUser, setupUser } =
    useAppContext()
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
     
  
    useEffect(() => {
        getJobs()
        // eslint-disable-next-line
      }, [])
      if (isLoading) {
        return  <HStack space={8} justifyContent="center" alignItems="center">
       
        <Spinner size="lg" />
      </HStack>
      }
    
      if (jobs.length === 0) {
        return (
          <Text 
          style={tw`mt-12 text-lg font-semibold  pl-4 pt-8`}>
           Sorry, no courses matched your search.
            </Text>
      
        )
      }

      const allCategories = [
          'all',
          ...new Set(jobs.map((item) => item.category)),
        ]

     const category = item.category
     
      const filterItems = jobs.filter((item) => item.category === category)
    
      return ( <View >

        <HeaderComponent title={item.category}/>
         <Text style={tw`text-gray-700 pl-4 text-xl`}>Most Popular </Text>
         <FlatList 
         
          data={filterItems}
          
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
             
<Box alignItems="center">
                     <TouchableOpacity
              onPress={() => navigation.navigate('Details', {item})}

              
              style={[tw`p-2  `, { borderRadius: 10} ]} >
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 8}>
            <Image source={{
            uri: item.image
          }} alt="image" />
          </AspectRatio>
         {item.featured && (
           <Center bg="gray.700" _dark={{ bg: "gray.700" }} 
           _text={{ color: "warmGray.50",
                    fontWeight: "700",
           fontSize: "xs"
         }} position="absolute" bottom="0" px="3" py="1.5">
             BOOK NOW
           </Center>
         )}
         {!item.featured && (
           <Center bg="gray.700" _dark={{ bg: "gray.700" }} 
           _text={{ color: "warmGray.50",
                    fontWeight: "300",
           fontSize: "xs"
         }} position="absolute" bottom="0" px="3" py="1.5">
             SCHEDULE APPOINTMENT
           </Center>
         )}
         
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
            {item.name}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "green.700"
          }} _dark={{
            color: "green.900"
          }} fontWeight="500" ml="-0.5" mt="-1">
          {item.company}
            </Text>
          </Stack>
          {/* <Text fontWeight="400">
          Uchao is a child of Dangwemeds, the rest is history....
          </Text> */}
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
               August 2022 
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
      </TouchableOpacity>
    </Box>
                 

          )}
        />    
    </View>
      )
      
    }
  
  export default NavOptions
  
  const styles = StyleSheet.create({})