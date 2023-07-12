import { StyleSheet, Text, View, Image, FlatList,
  TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {
    ListItem,
    Avatar,
    Card,
    Tile,
    Button,
    Icon,
  } from 'react-native-elements'
import Image1 from '../assets/emedlogo.png'
import Image2 from '../assets/emedlogo.png'
import Image3 from '../assets/emedlogo.png'
import tw from 'tailwind-react-native-classnames'
import MapScreen from './MapScreen';
import Map from './Map';
import { useDispatch, useSelector  } from 'react-redux'
//import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const datas = [
   { 
      id: '123',
      name: 'Health Service',
      //image: 'Image2',
      screen: 'MapScreen',
      image: Image.resolveAssetSource(Image3).uri,
    },
  { 
    id: '125',
    name: 'Doctor',
    //image: 'Image2',
    screen: 'DoctorsScreen',
    image: Image.resolveAssetSource(Image1).uri,
  },
   
    {
      id: '456',
      name: 'Ambulance',
      image: Image.resolveAssetSource(Image2).uri,
      screen: 'Map',
    },
  ]

  const NavOptions = () => {
    const { origin  } = useSelector((store) => store.nav);
    const navigation = useNavigation(); 
    let dommy = dommy
    return (
      <FlatList 
      
        data={datas}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <TouchableOpacity
            onPress={()=>navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin} >
                <View style={tw`${!origin && "opacity-20" }`}>
                <Image
                style={{
                  width: 120,
                  borderRadius: 15,
                  height: 120,
                  resizeMode: 'contain',
                }}
                source={{ uri:item.image }}
              />
               <Text style={tw`mt-2 text-lg font-semibold`}>{item.name}</Text>

               <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright'
              type='antdesign'
              color='white'
            />
                 
                </View>
               
                 </TouchableOpacity>
          
        )}
      />
    )
  }

export default NavOptions

const styles = StyleSheet.create({})