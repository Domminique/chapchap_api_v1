// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Button,
//   StatusBar,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native'
// import { HStack, Spinner } from 'native-base'
// //import { Feather, Entypo,Ionicons,MaterialIcons, FontAwesome } from "@expo/vector-icons";
// import React, { useRef, useEffect } from 'react'
// import tw from 'tailwind-react-native-classnames'
// import { useNavigation } from '@react-navigation/native'
// //import { useAppContext } from '../context/appContext'
// import { useUserContext } from '../context/user_context'
// import { useProductsContext } from '../context/products_context'
// import {
//   Ionicons,
//   MaterialIcons,
//   Entypo,
//   FontAwesome,
//   AntDesign,
// } from '@expo/vector-icons'
// import Image1 from '../components/images/emedlogo.png'
// import Image2 from '../components/images/oro.png'
// import Image3 from '../components/images/oro1.png'
// import Swiper from 'react-native-deck-swiper'
// import { useFilterContext } from '../context/filter_context'

// const DATA = [
//   {
//     id: '123',
//     firstName: 'Imbuga',
//     lastName: 'Dominic',
//     occupation: 'software Developer',
//     age: 21,
//     screen: 'MapScreen',
//     image: Image.resolveAssetSource(Image3).uri,
//   },
//   {
//     id: '125',
//     firstName: 'Allan',
//     lastName: 'Kemboi',
//     occupation: 'software Developer',
//     age: 21,
//     screen: 'DoctorsMapScreen',
//     image: Image.resolveAssetSource(Image1).uri,
//   },

//   {
//     id: '456',
//     firstName: 'Christine',
//     lastName: 'Wavinya',
//     occupation: 'nurse',
//     age: 21,
//     image: Image.resolveAssetSource(Image2).uri,
//     screen: 'AmbulanceMapScreen',
//   },
// ]

// const HomeScreen = () => {
//   const { toggleSidebar, logoutUser, user, updateUser, showAlert } =
//     useUserContext()

//   const {
//     getJobs,
//     jobs,
//     isLoading,
//     page,
//     totalJobs,
//     search,
//     searchStatus,
//     searchType,
//     sort,
//     numOfPages,
//   } = useProductsContext()
//   const { filtered_products: grid_view } = useFilterContext()

//   const navigation = useNavigation()
//   const swipeRef = useRef(null)

//   useEffect(() => {
//     getJobs()
//     // eslint-disable-next-line
//   }, [page, search, searchStatus, searchType, sort])
//   if (isLoading) {
//     return (
//       <HStack space={8} justifyContent='center' alignItems='center'>
//         <Spinner size='lg' />
//       </HStack>
//     )
//   }

//   if (jobs.length === 0) {
//     return (
//       <Text style={tw`mt-12 text-lg font-semibold  pl-4 pt-8`}>
//         Sorry, no services matched your search.
//       </Text>
//     )
//   }

//   // const swipeLeft = async()=>{

//   // }
//   // const swipeRight = async()=>{

//   // }

//   return (
//     <SafeAreaView style={tw`flex-1 pt-10`}>
//       {/* header */}
//       <View style={tw`flex-row items-center justify-between relative px-5`}>
//         <TouchableOpacity style={tw``}>
//           <Image
//             style={tw`h-10 w-10 rounded-full`}
//             source={require('../components/images/logo.png')}
//             // onPress={()=> logoutUser}
//             onPress={() => {
//               logoutUser
//               navigation.navigate('LoginScreen')
//             }}
//             // source={{url: user?.photourl}}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
//           <Image
//             style={tw`h-14 w-14 rounded-full`}
//             source={require('../components/images/logo.png')}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={tw``}
//           onPress={() => navigation.navigate('Chat')}
//         >
//           <Ionicons name='chatbubbles-sharp' size={30} color='#00AA13' />
//         </TouchableOpacity>
//       </View>

//       <View style={tw`flex-1 -mt-6`}>
//         <Swiper
//           ref={swipeRef}
//           containerStyle={{ backgroundColor: 'transparent' }}
//           cards={jobs}
//           stackSize={5}
//           cardIndex={0}
//           verticalSwipe={false}
//           onSwipedLeft={(cardIndex) => {
//             //swipeLeft(cardIndex);
//             console.log('Swipe PASS', cardIndex)
//           }}
//           onSwipedRight={(cardIndex) => {
//             //swipeRight(cardIndex);

//             navigation.navigate('Booking', cardIndex)
//             console.log('Swipe BOOK', cardIndex)
//           }}
//           backgroundColor={'#4FD0E9)'}
//           overlayLabels={{
//             left: {
//               title: 'PASS',
//               style: {
//                 label: {
//                   textAlign: 'right',
//                   color: 'red',
//                 },
//               },
//             },
//             right: {
//               title: 'BOOK',
//               style: {
//                 label: {
//                   color: '#00AA13',
//                 },
//               },
//             },
//           }}
//           renderCard={(card) =>
//             card ? (
//               <View
//                 key={card._id}
//                 style={tw`relative bg-white h-3/4 rounded-xl`}
//               >
//                 <Image
//                   style={tw`absolute top-0 h-1/2 w-full rounded-xl`}
//                   source={require('../components/images/emedlogo.png')}
//                   resizeMode='center'
//                   // source={{uri:card.image}}
//                 />

//                 <View
//                   style={[
//                     tw`absolute bottom-0 bg-white w-full 
//               justify-between  h-28 px-6 py-2 rounded-b-xl`,
//                     styles.cardShadow,
//                   ]}
//                 >
//                   <View>
//                     <Text style={tw`font-bold`}>
//                       {card.jobType} | {card.status}
//                     </Text>
//                     <Text>{card.company.substring(0, 150)}...</Text>
//                   </View>
//                   <Text>From Ksh. 3000</Text>
//                 </View>
//               </View>
//             ) : (
//               <View
//                 style={[
//                   tw`relative bg-white h-3/4 rounded-xl justify-center items-center`,
//                   styles.cardShadow,
//                 ]}
//               >
//                 <Text style={tw`font-bold pb-5 `}>No more Professionals</Text>
//                 <Image
//                   style={tw`h-20 w-full`}
//                   resizeMode='contain'
//                   source={require('../components/images/nodata.png')}
//                 />
//               </View>
//             )
//           }
//         />
//       </View>
//       <View style={tw`flex flex-row justify-evenly`}>
//         <TouchableOpacity
//           onPress={() => swipeRef.current.swipeLeft()}
//           style={tw`items-center justify-center 
//                    rounded-full w-16 h-16 bg-red-200`}
//         >
//           <Entypo name='cross' size={24} color='#00AA13' />
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => swipeRef.current.swipeRight()}
//           style={tw`items-center justify-center 
//           rounded-full w-16 h-16 bg-red-200`}
//         >
//           <AntDesign name='heart' size={24} color='green' />
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   cardShadow: {
//     shadowColor: '0000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
// })

// // import React,{useEffect, useState} from "react";
// // import { Box, FlatList,  Heading,FormControl,Input, Avatar, HStack, VStack, AspectRatio, Text,
// //   Spacer, Center, NativeBaseProvider,Spinner, Button,Modal,TextArea, Radio,Image,  Fab, Icon ,  Stack} from "native-base";
// // import { Feather, Entypo,Ionicons,MaterialIcons, FontAwesome } from "@expo/vector-icons";
// // import { useAppContext } from '../context/appContext'
// // import tw from "tailwind-react-native-classnames";
// // import { StyleSheet,  View, Platform,ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
// // import { useUserContext } from '../context/user_context'
// // import { useNavigation } from '@react-navigation/native'
// // import Header from '../components/HeaderComponent'

// // const Example = ({  _id, position,company,jobLocation,jobType,createdAt, status,
// // }) => {
// //   // const navigation = useNavigation();
// //   // const [placement, setPlacement] = useState(undefined);
// //   // const [open, setOpen] = useState(false);

// //   const openModal = placement => {
// //     setOpen(true);
// //     setPlacement(placement);
// //   };

// //   const {  user, isLoading,
// //     showAlert,
// //     displayAlert,
// //     setupUser,
// //     getJobs,
// //     jobs,
// //     page,
// //     totalJobs,
// //     search,
// //     searchStatus,
// //     searchType,
// //     sort,
// //     numOfPages,
// //     setEditJob,
// //     deleteJob,

// //   } =useUserContext()

// //   useEffect(() => {
// //     getJobs()
// //     // eslint-disable-next-line
// //   }, [page, search, searchStatus, searchType, sort])
// //   if (isLoading) {
// //     return  <HStack space={8} justifyContent="center" alignItems="center">

// //     <Spinner size="lg" />
// //   </HStack>
// //   }

// //   if (jobs.length === 0) {
// //     return (
// //       <Text>
// //         No service providers to display...
// //       </Text>
// //     )
// //   }

// //   // const handleSubmit = (e) => {
// //   //   e.preventDefault()

// //   //   if (!position || !company || !jobLocation) {
// //   //     displayAlert()
// //   //     return
// //   //   }
// //   //   if (isEditing) {
// //   //     editJob()
// //   //     return
// //   //   }
// //   //   createJob()
// //   //   setOpen(false);
// //   // }
// //   // const handleJobInput = (e) => {
// //   //   const name = e.target.name
// //   //   const value = e.target.value
// //   //   handleChange({ name, value })
// //   // }

// //   return ( <>
// //     <Heading fontSize="xl" p="4" pb="3">
// //       {totalJobs} service{jobs.length > 1 && 's'} found
// //       </Heading>

// //       <FlatList
// //       data={jobs}
// //       keyExtractor={item => item._id}
// //       renderItem={({item }) =>
// //     <Box alignItems="center" style={tw`p-3`}>
// //       <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
// //       borderColor: "coolGray.600",
// //       backgroundColor: "gray.700"}} _web={{ shadow: 2,borderWidth: 0 }} _light={{
// //       backgroundColor: "gray.50"
// //     }}>
// //         <Box>
// //           {/* <AspectRatio w="50%" ratio={16 / 5}>
// //             <Image
// //                     source={require('./images/doctors.png')} alt="image" />
// //           </AspectRatio> */}
// //           <Center bg="#00AA13" _dark={{ bg: "#00AA13" }} _text={{   color: "warmGray.50", fontWeight: "700", fontSize: "xs"
// //           }} position="absolute" bottom="0" px="3" py="1.5">
// //            {item.status}
// //           </Center>

// //         </Box>
// //         <Stack p="4" space={3}>

// //           <Stack space={2}>
// //             <Heading size="md" ml="-1">
// //             {item.position}
// //             </Heading>
// //             <Text fontSize="xs" _light={{
// //             color: "#00AA13" }} _dark={{ color: "#00AA13"  }} fontWeight="500" ml="-0.5" mt="-1">
// //                {item.position}
// //             </Text>

// //           </Stack>
// //           <Text fontWeight="400">
// //           {item.company}
// //           </Text>

// //           <HStack alignItems="center" space={4} justifyContent="space-between">
// //             <HStack alignItems="center">
// //               <Text color="#00AA13" _dark={{ color: "warmGray.200"  }} fontWeight="400">
// //                 6 mins away
// //               </Text>
// //             </HStack>

// //             <Button.Group space={2}>
// //               <Button variant="ghost" colorScheme="gray"
// //               onPress={() => {
// //                 deleteJob(_id)
// //                 setOpen(false);

// //             }}
// //             style={[tw`rounded-full shadow-lg`,{ backgroundColor:'#ffffff', color:'#00AA13'}]}>    Delete
// //               </Button>
// //               <Button onPress={() =>{
// //                  openModal("center")
// //                  setEditJob(_id)
// //               }
// //              }
// //               style={[tw`rounded-full shadow-lg`,{ backgroundColor:'#00AA13'}]}>
// //                 Edit Service</Button>
// //             </Button.Group>
// //           </HStack>
// //         </Stack>

// //       </Box>
// //     </Box>  }  />
// //     </>)

// // };

// //     export default ({ _id, position, company,jobTypeService,jobTypeAmbulance,jobTypeDoctor,
// //       jobLocation,jobType,jobTypeOptions,createdAt, status,
// //     }) => {

// //       const {  displayAlert,  isEditing,  statusOptions, handleChange,clearValues, createJob,editJob,  } =useUserContext()

// //       const navigation = useNavigation();
// //   const [placement, setPlacement] = useState(undefined);
// //   const [open, setOpen] = useState(false);
// //   const [values, setValues] = useState('')
// //   const [value, setValue] = useState("Doctor");

// //  const handlePosition = (text) => {
// //       setValues({ ...values, position: text })
// //    }

// // const handleCompany = (text) => {
// //   console.log("inside handler", value)
// //         setValues({ ...values, jobType:value})
// //        setValues({ ...values, company: text })

// //    }

// // const handleJobTypeService = (text) => {
// //   console.log(text)
// //   setValues({ ...values, jobTypeService: text })
// // }
// // const handleJobTypeAmbulance = (text) => {
// //   setValues({ ...values,jobTypeAmbulance : text })
// //   console.log(text)
// // }
// // const handleJobTypeDoctor = (text) => {
// //   setValues({ ...values,  jobTypeDoctor: text })
// //   console.log(text)
// // }
// //   const openModal = placement => {
// //     setOpen(true);
// //     setPlacement(placement);
// //   };

// // console.log("outside", value)

// //   const handleSubmit = (e) => {
// //     e.preventDefault()
// //     console.log("inside", value)
// //     console.log(values, value)
// //     const { position, company,jobType, jobTypeService, jobTypeAmbulance, jobTypeDoctor } = values
// //     if (!position || !company ) {
// //       displayAlert()
// //       console.log("problem")
// //       return
// //     }

// //     createJob(values)
// //     setOpen(false);
// //   }
// //   // const handleJobInput = (e) => {
// //   //   const name = e.target.name
// //   //   const value = e.target.value
// //   //   console.log(e)
// //   //   handleChange({ name, value })
// //   // }

// //         return (
// //           <>
// //            {/* Modal */}

// //            <Modal style={styles.ModalContainer} isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
// //         <Modal.Content maxWidth="500" {...styles[placement]}>
// //           <Modal.CloseButton />
// //           <Modal.Header>{isEditing ? 'edit service ' : 'add service'}</Modal.Header>
// //           {/* {showAlert && <Alert />} */}
// //           <Modal.Body>
// //             <FormControl>
// //            <Stack space={2}>
// //                <Stack>
// //                <Stack>
// //         <FormControl.Label   style={{borderColor:"#00AA13"}}>Names</FormControl.Label>
// //         <Input InputLeftElement={<Icon as={<MaterialIcons name="person" />}
// //          size={5} ml="2" color="muted.400" />} placeholder="Name"   p={2}
// //             name='position'
// //             value={position}
// //             onChangeText = {handlePosition}

// //         />
// //       </Stack>
// //               </Stack>

// //               <Stack>
// //                 <Radio.Group defaultValue="1"  accessibilityLabel="favorite colorscheme" >

// //                   <HStack space={1} justifyContent="center">
// //                   <Radio colorScheme="warning"  my={jobTypeService} name='jobTypeService'
// //                   value={jobTypeService}
// //                   onChangeText = {handleJobTypeService}>
// //                     Service
// //                   </Radio>
// //                   <Radio colorScheme="warning" my={jobTypeService} name='jobTypeDoctor'
// //                   value={jobTypeDoctor}
// //                   onChangeText = {handleJobTypeDoctor}>
// //                     Doctor
// //                   </Radio>
// //                  <Radio colorScheme="warning"  my={jobTypeService} name='jobTypeAmbulance'
// //                   value={jobTypeAmbulance}
// //                   onChangeText = {handleJobTypeAmbulance}>
// //                   Ambulance
// //                  </Radio>
// //                  </HStack>
// //                 </Radio.Group>
// //                 <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number"
// //                 value={value} onChange={nextValue => {  setValue(nextValue); }}>
// //       <Radio value="Doctor" my={1} >
// //         Doctor
// //       </Radio>
// //       <Radio value="Ambulance" my={1} >
// //         Ambulance
// //       </Radio>
// //       <Radio value="Service" my={1} >
// //         Service
// //       </Radio>
// //     </Radio.Group>

// //               </Stack>
// //               <Stack>
// //                   <FormControl mt="3">
// //                   <FormControl.Label>Description</FormControl.Label>
// //                   <TextArea h={20} placeholder="Tell us more ..." w="100%" maxW="300"
// //                   name='company'
// //                   value={company}
// //                   onChangeText = {handleCompany}
// //                   // handleChange={handleJobInput}
// //                   />
// //                 </FormControl>
// //               </Stack>
// //              </Stack>
// //            </FormControl>
// //     </Modal.Body>

// //     <Modal.Footer>
// //       <Button.Group space={2}>
// //         <Button variant="ghost" colorScheme="blueGray" onPress={(e) => {
// //            e.preventDefault()
// //            clearValues()
// //            setOpen(false);
// //       }}>  Cancel
// //         </Button>
// //         <Button  type='submit' onPress={handleSubmit} style={[tw`rounded-full shadow-lg`,{ backgroundColor:'#00AA13'}]}>Save</Button>
// //       </Button.Group>
// //     </Modal.Footer>
// //   </Modal.Content>
// // </Modal>

// //             <Center  px="3">
// //                 <Example />
// //                 <Fab
// //                 onPress={() =>{
// //                   // navigation.navigate('Modal')
// //                   openModal("top")
// //                  // setEditJob(_id)
// //                }}
// //                style={{backgroundColor:'#00AA13'}}
// //                 colorScheme="red-900"
// //                 size="lg"
// //                 icon={<Icon as={Feather} name="plus" size="lg" color="warmGray.50" />}

// //     />
// //             </Center>

// //           </>
// //         );
// //     };

// //     const styles = StyleSheet.create({

// //       brandView:{
// //         flex:1,
// //         justifyContent:'center',
// //         alignItems:'center',
// //         paddingTop:100,

// //         //paddingBottom:200

// //       },
// //       brandViewText:{
// //         color: "#ffffff",
// //         fontSize:40,
// //         fontWeight:'bold',

// //       },
// //       buttonView:{
// //         flex:1,
// //         backgroundColor:"#ffffff",
// //         bottom:50,
// //         borderTopStartRadius:60,
// //         borderTopEndRadius:60,
// //       },
// //       forgoPassView:{
// //         height:50,
// //         marginTop:20,

// //       },
// //       ModalContainer:{
// //         width:Dimensions.get('window').width+45,
// //         },
// //       loginBtn:{
// //         alignSelf:'center',
// //         backgroundColor:'#00AA13',
// //         width:Dimensions.get('window').width/2,
// //         justifyContent:'center',
// //         borderRadius:50,
// //         marginBottom:20,
// //         marginTop:40
// //       },
// //       top: {
// //         marginBottom: "auto",
// //         marginTop: 0
// //       },
// //       bottom: {
// //         marginBottom: 0,
// //         marginTop: "auto"
// //       },
// //       left: {
// //         marginLeft: 0,
// //         marginRight: "auto"
// //       },
// //       right: {
// //         marginLeft: "auto",
// //         marginRight: 0
// //       },
// //       center: {}

// //     })
import { View, Text } from 'react-native'
import React from 'react'

const ExploreScreen = () => {
  return (
    <View>
      <Text>ExploreScreen</Text>
    </View>
  )
}

export default ExploreScreen
