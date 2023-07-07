import { StyleSheet, View,TouchableOpacity , ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames' 

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons,MaterialIcons, Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';
import { useNavigation,  useRoute } from '@react-navigation/native';
// import VideoScreen from './VideoScreen';
import { useProductsContext } from '../context/products_context';
import { Box, FlatList, Heading, Avatar,Spinner, HStack, VStack, Text, Spacer, Center,Button, NativeBaseProvider ,
   AspectRatio, Image,Badge, Stack} from "native-base";
//    import { Video, AVPlaybackStatus } from 'expo-av';
   //import CourseFavaurites from './CourseFavourites'
   
  
   
   const initialState = {
    url:'https://uchaoapi.herokuapp.com/uploads/a_welcome.mp4',
    filename: '',
    duration: '',
    isWatched: true,
  }
 

const MapScreen = (props,{ images = [[]] } ) => { 
const navigation = useNavigation()
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
  }, [page, search, searchStatus, searchType, sort])
  if (isLoading) {
    return  <HStack space={8} justifyContent="center" alignItems="center">
   
    <Spinner size="lg" />
  </HStack>
  }

  if (jobs.length === 0) {
    return (
      <Text 
      style={tw`mt-12 text-lg font-semibold  pl-4 pt-8`}>
       Sorry, no services matched your search.
        </Text>
  
    )
  }


//  console.log("I'm the jobs.images",item, jobs.images)
  return (    
    <View style={tw`pt-8`}>
        <Text style={tw`text-gray-700 pl-4 text-xl`}>Near You </Text>
       {!jobs.featured && (
        <>  
    <View >
      
    <Box>    
      <FlatList 
      data={jobs.slice(2,5)} 
      keyExtractor={item => item.id} 
      renderItem={({item }) => 
      <TouchableOpacity
        
          onPress={()=> navigation.navigate("SearchBooking",{item} )}
            >
           
      <Box borderBottomWidth="1" _dark={{borderColor: "gray.600"}} 
            borderColor="coolGray.200" pl="4" pr="5" py="4" >
              
            <HStack space={3} justifyContent="space-between">
              {/* <Avatar size="48px" 
               source={require('../components/images/emedlogo.png')} /> */}
              
              <VStack>
                <Text _dark={{color: "warmGray.50"}} color="coolGray.800" bold>
                  {item.name} 
                </Text>

                <Text color="coolGray.600" _dark={{color: "warmGray.200"}}>
                 {item.category}
                </Text> 

              </VStack>

              <Spacer />
              <Text fontSize="xs" _dark={{ color: "warmGray.50" }} 
                   color="coolGray.800" alignSelf="flex-start">
                {/* <Icon name="menu" color='#fff' /> */}
                 New
              </Text>
            </HStack>
          </Box>
          </TouchableOpacity>}
          />
    </Box>
            </View>
        
        </>
       )}
    
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#ecf0f1',
  },
  video: {
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
}) 