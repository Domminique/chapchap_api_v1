
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames' 
import Mapping from './Mapping';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from './NavigateCard';
import RideOptionsCard from './RideOptionsCard'; 
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const MapsScreen = () => {

  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
  return ( 
    <View >
      <TouchableOpacity 
      onPress={()=> navigation.navigate("HomeScreen")}
      style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3
       rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
       {/* <Mapping/> */}
    </View>

    <View style={tw`h-1/2`}>
      
    <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={RideOptionsCard}
            options={{ headerShown: false }}
            // navigation={props.navigation}
          />
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{ headerShown: false }}
            // navigation={props.navigation}
          />
        </Stack.Navigator>
    </View>
    </View>
  )
}

export default MapsScreen

const styles = StyleSheet.create({}) 

