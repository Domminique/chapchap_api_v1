import {
  StyleSheet,
  View,
  Platform,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './HeaderComponent'
import tw from 'tailwind-react-native-classnames'
// import { useUserContext } from '../context/user_context'
import {
  Box,
  FlatList,
  Heading,
  FormControl,
  Input,
  Avatar,
  HStack,
  VStack,
  AspectRatio,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Spinner,
  Button,
  Modal,
  TextArea,
  Radio,
  Image,
  Fab,
  Icon,
  Stack,
} from 'native-base'
import {
  Feather,
  Entypo,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from '@expo/vector-icons'
//import { useAppContext } from '../context/appContext'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid'

import MyServiceRow from './MyServiceRow'
import Toast from 'react-native-root-toast'
import { useIsFocused } from '@react-navigation/native';

const ServiceScreen = () => {
  const navigation = useNavigation()
  const isFocused = useIsFocused();

  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs)

  const dispatch = useDispatch()
  const [fab, setFab] = useState(true)
  const { user } = useSelector((store) => store.user)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    dispatch(getAllJobs())
  }, [jobs, page, search, searchStatus, searchType, sort, jobs])

  return (
    <>
      <ImageBackground
        source={require('../assets/chapchap8.png')}
        //source={require('../components/images/doctors.png')}
        style={{ height: Dimensions.get('window').height / 3.2 }}
      >
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
      </ImageBackground>
      {/* <Header title='My services' /> */}
      <View> 

      {isFocused &&
       <Fab
     
       renderInPortal={true}
         onPress={() => 
           {
             
             if (user=='free') {
               Toast.show('Please update to Rahisi, Bora or Nzuri account to manage your business', {
                 duration: Toast.durations.LONG,
               })
               navigation.navigate('Chat')
             }
             else{
              navigation.navigate('AddService')
             }
            
           }
           
         
         }
         // renderInPortal={!isOpen}
         // direction='down'
         position="absolute" 
         size="lg"
         style={{ backgroundColor: '#00AA13'}}
         colorScheme='red-900'
        
         icon={<Icon as={Feather} name='plus' size='lg' color='warmGray.50' />}
       />
         }
       
      </View>

      <Text style={tw`text-center text-2xl`}>Hey, What do you do?</Text>
      <Text style={tw`text-center text-sm`}>
        You can change the story today, take control & tell them : customers,
        friends, everyone...
      </Text>
      <MyServiceRow
        title='My Hustles '
        description='Manage, add, edit your hustles.'
        id='123'
      />
    </>
  )
}

export default ServiceScreen

const styles = StyleSheet.create({})
