import { MaterialCommunityIcons } from '@expo/vector-icons'

import React from 'react'
//import { Container, Text, Heading, Center, NativeBaseProvider } from "native-base";
import {
  Container,
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
import {
  StyleSheet,
  View,
  Platform,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function Example() {
  return (
    <ScrollView>
      <Center>
        <Container>
          <Heading>Reach out to us, we'd love to chat</Heading>

          <Text>
            <Text
              style={{ color: '#00AA13', fontStyle: 'italic', padding: 20 }}
            ></Text>{' '}
            <Text style={{ color: '#00AA13', fontStyle: 'italic' }}> </Text>
          </Text>

          <View style={tw`pt-2`}></View>

          <Text style={tw`pt-2 text-xl`} color='#00AA13'>
            {' '}
            Business Help{' '}
          </Text>
          <Text style={tw`pt-2 text-lg`} color='#000'>
            {' '}
            savannaspace@gmail.com
          </Text>
          <Text style={tw`pt-2 text-xl`} color='#00AA13'>
            {' '}
            Technical Help
          </Text>
          <Text style={tw`pt-2 text-lg`} color='#000'>
            {' '}
            savannaspace@gmail.com {' '}
          </Text>
          <Text style={tw`pt-2 text-lg`} color='#000'>
            {' '}
            imbugad@gmail.com{' '}
          </Text>
        </Container>
      </Center>
    </ScrollView>
  )
}

export default () => {
  const navigation = useNavigation()
  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require('../assets/medicine.png')}
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
            {/* <Icon
              
              name='arrowLeft'
              type='antdesign'
              color='white'
            /> */}
            {/* <Icon
      as={Ionicons} 
      // style={{color:'#ffffff', fontSize:20}}
      name={Platform.OS ? 'arrowLeft' : 'arrowLeft'}
      size="5"
      color="red"
    /> */}
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
      <Example />
    </NativeBaseProvider>
  )
}

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
