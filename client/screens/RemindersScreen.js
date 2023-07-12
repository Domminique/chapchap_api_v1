import React, { useState } from 'react'
import {
  Input,
  FormControl,
  Fab,
  Stack,
  Button,
  IconButton,
  Checkbox,
  Text,
  Box,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  useToast,
  NativeBaseProvider,
  Modal,
  TextArea,
  Radio,
} from 'native-base'
import { Feather, Entypo } from '@expo/vector-icons'
import tw from 'tailwind-react-native-classnames'
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
//import { useAppContext } from '../context/appContext'
// import ProfileFavourites from './ProfileFavourites'
// import { useUserContext } from '../context/user_context'
//import { useNavigation, useRoute } from '@react-navigation/native'
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
import BusinessPlans from '../components/BusinessPlans'

import ReminderService from '../Services/ReminderService';


//
//
const RemindersScreen = () => {
  const [placement, setPlacement] = useState(undefined)

  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigation = useNavigation()


  const Reminder = new ReminderService();

//   Reminder.addReminder({
//     title: 'Event subject',
//     note: 'some details about the event here',
//     startDate: '04/10/2021 10:00',
//     endDate: '10/10/2021 14:30',
//    })
//    .then((reminder) => {
//     // do something here
//    })
//    .catch((error) => {
//     // handle errror here
//    });

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#ffffff' }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require('../assets/medicine.png')}
        //source={require('../components/images/doctors.png')}
        style={{ height: Dimensions.get('window').height / 3.2 }}
      >
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={tw`bg-white absolute top-10 left-5 z-50 p-3
       rounded-full shadow-lg`}
          >
            <ArrowLeftIcon size={20} color='#00AA13' />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={()=> navigation.navigate("HomeScreen")}
            style={[
              tw`absolute top-10 right-6 z-50 p-3
      rounded-full shadow-lg`,
              { backgroundColor: '#00AA13' },
            ]}
          >
            <Text style={tw`text-white`}>EN</Text>
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
            

         
          </View>
          <Text style={tw`text-center py-2 text-sm pb-2 uppercase`}> Reminders </Text>
          <Button style={styles.walletBtn}>{user.plan}</Button>
          <View>
          <Text style={tw`py-2 text-lg text-gray-400`}>
              {' '}
              Manage, edit , add reminder
            </Text>
            <BusinessPlans />
            {/* <Button
              onPress={() => {
                dispatch(clearStore('Logging out...'))
                Toast.show('Logging out...', {
                  duration: Toast.durations.LONG,
                })
                navigation.navigate('Register')
              }}
              style={styles.loginBtn}
            >
              Logout
            </Button> */}
           
           
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default RemindersScreen

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
