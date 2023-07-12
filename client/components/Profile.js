import React, { useEffect, useState } from 'react'
import {
  Button,
  Text,
  Icon,
} from 'native-base'
import tw from 'tailwind-react-native-classnames'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  Platform,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import ProfileFavourites from './ProfileFavourites'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../features/user/userSlice'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid'
import { toggleSidebar, clearStore } from '../features/user/userSlice'
import Toast from 'react-native-root-toast'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [userInfo, setUserInfo] = useState(null); 


  useEffect(() => {
    getLocalUser();
  }, []);



  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    // return JSON.parse(data);
    setUserInfo(JSON.parse(data));
  };
  
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#ffffff' }}
      showsVerticalScrollIndicator={false}
    >
       <TouchableOpacity
          
          onPress={()=>navigation.goBack()}
          style={tw`bg-white absolute top-10 left-5 z-50 p-3
     rounded-full shadow-lg`}
        >
          <ArrowLeftIcon size={20} color='#00AA13' />
        </TouchableOpacity>

      <ImageBackground
        source={require('../assets/medicine.png')}
        style={{ height: Dimensions.get('window').height / 3.2 }}
      >
        <View>
          
          <TouchableOpacity

            style={[
              tw`absolute top-10 right-6 z-50 p-3
      rounded-full shadow-lg`,
              { backgroundColor: '#00AA13' },
            ]}
          >
            <Text style={tw`text-white uppercase`}>{userInfo?.role}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.brandView}>
          <Icon
            as={Ionicons}
            style={{ color: '#ffffff', fontSize: 80 }}
            name={Platform.OS ? 'location-sharp' : 'location-sharp'}
            size='20'
            color='red'
          />
        </View>
      </ImageBackground>

      <View style={styles.buttonView}>
        <View className='pt-6 p-4'>
          <View className='flex-row items-center space-x-1 pl-12'>
            <TouchableOpacity
              
            >
              <Image
      
      source={{
        uri: userInfo?.picture,
      }}
        
        className='h-14 w-14 bg-gray-300 p-3 rounded-full'
      />
              
            </TouchableOpacity>

            <Text style={tw`text-center py-2 text-xl`}> {userInfo?.name}</Text>
          </View>
          <Text style={tw`text-center py-2 text-sm pb-2`}> {userInfo?.email} </Text>
          
        
     <Button onPress={()=> navigation.navigate("Paywall")}
          style={styles.walletBtn}>UPGRADE</Button>
          <View>
            <ProfileFavourites />

            {userInfo?.role==='admin' && (
              <Button
              onPress={() => {
                
                navigation.navigate('Admin')
              }}
              style={styles.loginBtn}
            >
              Admin panel
            </Button>
            )}
           
            
            <TouchableOpacity
              onPress={() => {
                // dispatch(
                //   updateUser({ name, email, lastName, location:null, language, phonenumber,status })
                // )
                async () => await AsyncStorage.removeItem("@user")
                dispatch(clearStore('Logging out...'))
                Toast.show('Logging out...', {
                  duration: Toast.durations.LONG,
                })
                navigation.navigate('Register')
              }}
              className='rounded-lg bg-[#00AA13] p-4'
            >
              <Text className='text-center text-white text-l font-bold'>
                Logout
              </Text>
            </TouchableOpacity>
            <Text style={tw`text-center py-2 text-xs text-gray-400`}>
              {' '}
              chapchap V1.0.0
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    //paddingBottom:200
  },
  brandViewText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonView: {
    flex: 1,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  forgoPassView: {
    height: 50,
    marginTop: 20,
  },
  loginBtn: {
    alignSelf: 'center',
    backgroundColor: '#00AA13',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 40,
  },
  walletBtn: {
    alignSelf: 'center',
    backgroundColor: '#00AA13',
    width: Dimensions.get('window').width / 2,
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 5,
    marginTop: 5,
  },
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  center: {},
})
