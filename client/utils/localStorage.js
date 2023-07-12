import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-root-toast'

export const addUserToLocalStorage = async (user, token, location) => {
  try {
    await AsyncStorage.setItem('@user', JSON.stringify(user))
    await AsyncStorage.setItem('@token', token)
    await AsyncStorage.setItem('@language', language)

  } catch (e) {
   
  }
}

export const addUserLocationToLocalStorage = async (location) => {
  try {
    await AsyncStorage.setItem('@location', JSON.stringify(location))
    console.log(location)
   
  } catch (e) {
    Toast.show('Adding  location to storage failed ', {
      duration: Toast.durations.LONG,
    })
   
  }
}


export const removeUserFromLocalStorage = async () => {
  try {
    await AsyncStorage.removeItem('user')
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('location')
    await AsyncStorage.removeItem('language')
  } catch (e) {
    // saving error
  }
}


export const getUserFromLocalStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('user')
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
}
export const getTokenFromLocalStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('token')

    if (value !== null) {
    
      return value;
     
    }
  } catch (e) {
    // error reading value
  }
}
export const getUserLocationFromLocalStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('location')
    if (value !== null) {
      return  value;
    }
  } catch (e) {
    // error reading value
  }
}
