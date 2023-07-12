import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppLoading from "expo-app-loading";
// You can import from local files
// import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

const _storeData = async () => {
  try {
    await AsyncStorage.setItem("@MySuperStore:key", "I like to save it.");
    console.log('data saved')
  } catch (error) {
    console.log('error1', error)

  }
};

_storeData();


const image = { uri: "https://jurajbevilaqua.com/bg.png" };

export default function App() {
  
  const [IsReady, SetIsReady] = useState(false);
  const [savedData, setSavedData] = useState('')


  useEffect(()=> {
    const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("location");
      if (value !== null) {
        console.log("we have data:", value)
        setSavedData(value)
      }
    } catch (error) {
      console.log('error2', error)
    }
    }
    _retrieveData();
  },[])
 

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <View style={styles.container}>

          <Text>            
            {savedData}
          </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    alignItems:"center",
    justifyContent:"center",
  },
})