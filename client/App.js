import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Provider, redux } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './components/MapScreen'
import ModalScreen from './components/ModalScreen'
import RegisterScreen from './screens/RegisterScreen'
import Map from './components/Map'
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
//import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TailwindProvider } from 'tailwindcss-react-native'
import { NativeBaseProvider, Box } from 'native-base'
import DetailsScreen from './screens/DetailsScreen'
import BasketScreen from './screens/BasketScreen'
import DeliveryScreen from './screens/DeliveryScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import CategoryDetailsScreen from './screens/CategoryDetailsScreen'
import AllCategoryDetailsScreen from './screens/AllCategoryDetails'
import SettingsScreen from './screens/SettingsScreen'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import ProfileScreen from './components/Profile'
import ServiceScreen from './components/ServiceScreen'
import ProfileAlert from './components/ProfileAlert'
import Chat from './screens/ChatScreen'
import TermsScreen from './components/TermsScreen'
import AboutUs from './components/AboutUs'
import SearchModal from './screens/SearchModal'
import SupportScreen from './components/SupportScreen'
import AddServiceScreen from './screens/AddServiceScreen'
import { RootSiblingParent } from 'react-native-root-siblings'
import Ambulances from './components/Ambulances'
import HomeContainer from './Containers/HomeContainer'
import LogisticsDetails from './screens/LogisticsDetailsScreen'


// import * as Localization from 'expo-localization'
import { I18n } from 'i18n-js'
import PasswordScreen from './screens/PasswordScreen'
import SearchDetailsScreen from './screens/SearchDetailsScreen'
import EditServiceScreen from './screens/EditServiceScreen'
import AdminScreen from './screens/AdminScreen'
import AdminServicesScreen from './screens/AdminServicesScreen'
import PaywallScreen from './screens/PaywallScreen'
import AdminUsersScreen from './screens/AdminUsersScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import DropDownPicker from 'react-native-dropdown-picker'
import PushNotifications from './screens/PushNotifications'
import SurveyContainer from "./Containers/SurveyContainer";
import { setSurveyResults } from "./Services/storageServices";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import ContinueAddService from './screens/ContinueAddService'
import Main from "./screens/Main";
//Reminder
import RemindersScreen from './screens/RemindersScreen'
import AddReminderScreen from './screens/AddReminderScreen'
import ChatRow from './components/ChatRow'

import {
  addUserLocationToLocalStorage,
  addUserToLocalStorage,
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
  getUserLocationFromLocalStorage,
  removeUserFromLocalStorage,
} from './utils/localStorage'
import * as Location from 'expo-location'
import MapsScreen from './components/MapsScreen'


let persistor = persistStore(store)
DropDownPicker.setListMode("SCROLLVIEW");
export default function App() {
  const [userInfo, setUserInfo] = useState(null);
  

  // useEffect(() => {
  //   getUserFromLocalStorage()
  //   //getLocalUser();
  // }, []);

  // const getLocalUser = async () => {
  //   const data = await AsyncStorage.getItem("@user");
  //   if (!data) return null;
  //   // return JSON.parse(data);
  //   setUserInfo(JSON.parse(data));
  // };
 

  // console.log(userInfo,'user info app,js')
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({

      }) 
      //addUserLocationToLocalStorage(location)
      addUserToLocalStorage({location })
      
    })()

   
  }, [])  


  useEffect(
    () => async () =>
      setSurveyResults({
        travelMode: "walking",
        groupSize: "alone",
        activityLevel: 1,
        priceRange: 2,
      }),
    []
  );
  const Stack = createNativeStackNavigator()

  
  
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootSiblingParent>
          <GestureHandlerRootView style={{ flex: 1 }}>
           <TailwindProvider>
              <NativeBaseProvider>
                <NavigationContainer>
                  <SafeAreaProvider>
                    <KeyboardAvoidingView
                      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                      style={{ flex: 1 }}
                      keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
                    >
                      <Stack.Navigator>
                        <Stack.Group>
                          <Stack.Screen
                            name='Register'
                            component={RegisterScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                          name='MainReminder'
                          component={Main}
                          options={{
                            headerShown: false,
                          }}
                        />
                          <Stack.Screen
                            name='HomeScreen'
                            component={HomeScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='HomeContainer'
                            component={HomeContainer}
                            options={{
                              headerShown: false,
                            }}
                          />
                          

                        <Stack.Screen
                          name='Reminders'
                          component={RemindersScreen}
                          options={{
                            headerShown: false,
                          }}
                        />
                          <Stack.Screen
                            name='Survey'
                            component={SurveyContainer}
                            options={{
                              headerShown: false,
                            }}
                          />   
                          <Stack.Screen
                            name='MapScreen'
                            component={MapScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                          name='MapsScreen'
                          component={MapsScreen}
                          options={{
                            headerShown: false,
                          }}
                        />
                          <Stack.Screen
                            name='SupportScreen'
                            component={SupportScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='SearchModal'
                            component={SearchModal}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='AboutUs'
                            component={AboutUs}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='TermsScreen'
                            component={TermsScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='Chat'
                            component={Chat}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='ProfileAlert'
                            component={ProfileAlert}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='ServiceScreen'
                            component={ServiceScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='Basket'
                            component={BasketScreen}
                            options={{
                              presentation: 'fullScreenModal',
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='CategoryDetails'
                            component={CategoryDetailsScreen}
                            options={{
                              presentation: 'fullScreenModal',
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='AllCategoryDetails'
                            component={AllCategoryDetailsScreen}
                            options={{
                              presentation: 'fullScreenModal',
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='Settings'
                            component={SettingsScreen}
                            options={{
                              presentation: 'fullScreenModal',
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='Ambulances'
                            component={Ambulances}
                            options={{
                              presentation: 'fullScreenModal',
                              headerShown: false,
                            }}
                          />
  
                          <Stack.Screen
                            name='Profile'
                            component={ProfileScreen}
                            options={{
                              presentation: 'fullScreenModal',
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='PreparingOrderScreen'
                            component={PreparingOrderScreen}
                            options={{
                              presentation: 'modal',
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='AddService'
                            component={AddServiceScreen}
                            options={{
                              presentation: 'fullScreenModal',
                              headerShown: false,
                            }}
                          /> 
                          <Stack.Screen
                            name='ContinueAddService'
                            component={ContinueAddService}
                            options={{
                              presentation: 'fullScreenModal',
                              headerShown: false,
                            }}
                          /> 
                          <Stack.Screen
                            name='Delivery'
                            component={DeliveryScreen}
                            options={{
                              presentation: 'modal',
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='Details'
                            component={DetailsScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='Map'
                            component={Map}
                            options={{
                              headerShown: false,
                            }}
                          />
                        </Stack.Group>
                        <Stack.Group
                          screenOptions={{ presentation: 'transparentModal' }}
                        >
                          <Stack.Screen
                            name='Modal'
                            component={ModalScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
  <Stack.Screen
                            name='Password'
                            component={PasswordScreen}
                            options={{
                              presentation: 'modal',
                              headerShown: false,
                            }}
                          />
  
                           <Stack.Screen
                            name='PushNotifications'
                            component={PushNotifications}
                            options={{
                              presentation: 'modal',
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='LogisticsDetails'
                            component={LogisticsDetails}
                            options={{
                              presentation: 'modal',
                              headerShown: false,
                            }}
                          />
                           <Stack.Screen
                            name='SearchDetails'
                            component={SearchDetailsScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                           <Stack.Screen
                            name='EditService'
                            component={EditServiceScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='Paywall'
                            component={PaywallScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                           <Stack.Screen
                            name='Admin'
                            component={AdminScreen}
                            options={{
                              headerShown: false,
                            }}
                          />
                          <Stack.Screen
                            name='Adminservices'
                            component={AdminServicesScreen}
                            options={{
                              presentation: 'modal',
                              headerShown: false,
  
                            }}
                          />
                          <Stack.Screen
                            name='AdminUsers'
                            component={AdminUsersScreen}
                            options={{
                              presentation: 'modal',
                              headerShown: false,
  
                            }}
                          /> 
                        </Stack.Group>
                      </Stack.Navigator>
                    </KeyboardAvoidingView>
                  </SafeAreaProvider>
                </NavigationContainer>
              </NativeBaseProvider>
              </TailwindProvider>
              </GestureHandlerRootView>
          </RootSiblingParent>
        </PersistGate>
      </Provider>  
    )

  }


