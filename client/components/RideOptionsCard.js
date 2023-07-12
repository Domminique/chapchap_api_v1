import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import tw from 'tailwind-react-native-classnames' 
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import DefaultImage from '../assets/chapchap4.png'
import { useDispatch, useSelector  } from 'react-redux'
import { setOrigin,setDestination, setTravelTimeInformation, setCardIndex,setUserSwipes } from '../features/nav/navSlice'
import TinderCard from "react-tinder-card";
// import tw from "twrnc";
import PlaceCard from "../components/PlaceCard";
import Swiper from 'react-native-deck-swiper'
import { MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import { distance, poslat, poslng } from '../utils/geodata'
import {selectDestination,selectOrigin, selectTravelTimeInformation,selectInformation,selectUserSwipes } from '../features/nav/navSlice'
  import {
    getSavedPlaceIds,
    getSurveyResults,
  } from "../Services/storageServices";


// If we have SURGE pricing this goes up
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation()
  const [selected , setSelected] = useState(null);
  // const { origin, destination,travelTimeInformation } = useSelector((store) => store.nav);
  const dispatch = useDispatch()
  const swiperRef = useRef(null)
  const NoImage = Image.resolveAssetSource(DefaultImage).uri
  const { user } = useSelector((store) => store.user)
  console.log(selected, "selected")

  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  const information = useSelector(selectInformation)

  const {
    products,
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
  const [surveyResults, setSurveyResults] = useState(null); 
  const [allInformation, setAllInformation] = useState(null);
  const [allUserSwipes, setAllUserSwipes] = useState(null);
  const [finaldestination, setFinaldestination] = useState(null);


 // get surveyResults
 getSurveyResults().then((r) => {
  setSurveyResults(r);
  

  // // get route details
  // getCurrentLocation().then((location) =>
  //   getRoutes(
  //     location,
  //     place ? place.place_id : placeId,
  //     r.travelMode
  //   ).then((routes) => setRoutes(routes))
  // );
});
  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, searchType, sort])

  const  swipeRight = async(cardIndex) =>{
    setAllInformation(information )
  // setAllUserSwipes(userSwipes)
  setFinaldestination(destination)
    const UserSwiped = products[cardIndex];
    console.log(`You swiped on ${UserSwiped.name}`)
    setSelected(UserSwiped)
    const {
      id,
      id:product,
      image,
      name,
      price,
      description,
      date,
      time,
      amount=1
    } = UserSwiped
    dispatch(setUserSwipes({
      id,
      product,
      image,
      name,
      price,
      description,
      date,
      time,
      amount:1,
      surveyResults,
      allInformation,
      finaldestination,
    }))


  }

 

  // console.log(title, 'title')

  // const allCategories = products.filter((item) => item?.jobType === 'Logistics')

  // Filter verifield
// const  verified = allCategories?.filter((item) => item?.availability == true)


// filter availability

// const onduty = verified?.filter((item) => item?.verified == true)

  // 
  
  // console.log(products, "onduty")


  return ( 
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[tw`absolute top-3 left-5 z-50 p-3 rounded-full`]}
        >
          <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-lg`}>Best Matches - 
          { travelTimeInformation?.distance?.text }  </Text>
      </View> 
     
      <View className="flex-1 -mt-20">
      <Swiper 
      ref={swiperRef}
      containerStyle={{backgroundColor:"transparent"}}
      cards={jobs}
      stackSize={5}
      cardIndex={0}
      animateCardOpacity
      verticalSwipe={true}
      onSwiped={(cardIndex) => {dispatch(setCardIndex(cardIndex))}}
      onSwipedTop={(cardIndex) =>{
        navigation.navigate("LogisticsDetails")
        swipeUp(cardIndex)   
      }}
      onSwipedRight={(cardIndex)=>{
     
         swipeRight(cardIndex)     
      }}
      overlayLabels= {{
        left:{
          title:"PASS",
          style:{
            label:{
              textAlign:"right",
              color:"red",
            },
          },
        },
        right:{
          title:"CHOOSE",
          style:{
            label:{
              color:"green"
            },
          },
        },
        top:{
          title:"Details",
          style:{
            label:{
              color:"green",
             
            },
          },
        },
      }}
      renderCard={(card) => card ? (
        <View key ={card._id} className="relative bg-white h-60 rounded-xl">
         <Image
              style={tw`h-full rounded-xl`}
              source={{ uri: card.image }}
            />
        <View style={[tw`absolute bottom-0 bg-white  w-full flex-row justify-between 
        items-center h-20 px-6 py-2 rounded-b-xl`,
        styles.cardShadow]}>
          
        <View style={tw``}>
              <Text style={tw`text-lg font-bold`}>{card.name}</Text>
              <Text> {travelTimeInformation?.duration?.text }  {travelTimeInformation?.distance.text } Travel Time ..</Text>
              <Text style={tw`font-extrabold`}>
                  {new Intl.NumberFormat('en-gb',{
                    style:'currency',
                    currency: 'KES'
                  }).format(
                    (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * card?.inventory)/100
                  )}
                 </Text>
                 </View>
              {/* <Text> {travelTimeInformation?.distance?.text } away</Text> */}
            </View>
        </View>
      ):(
        <View style={[tw`absolute bottom-0 bg-white  w-full flex-row justify-between 
        items-center h-20 px-6 py-2 rounded-b-xl`,
        styles.cardShadow]}> 
         <Text style={tw`text-lg font-bold`}>No more Logistics service providers </Text>
          <Image
              style={tw`h-full rounded-xl`}
              source={{ uri: NoImage }}
            />
        
        
        </View>
      )}/>
      </View>
      
      <View style={tw`mt-auto `}>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('LogisticsBasket')}
        disabled={!selected} 
        style={[tw`bg-black py-3 m-3 rounded-full ${!selected && "bg-gray-300 rounded-full"}`, { backgroundColor: '#3e0d08' }]}>
          <Text style={tw`text-center text-white  text-xl`} > Request {selected?.name}</Text>
        </TouchableOpacity>
      </View> 

      {/* <View style={tw`flex flex-row justify-evenly`} >
       <TouchableOpacity
       onPress={()=> swiperRef.current.swipeLeft() }
       className="items-center justify-center rounded-full w-16 h-16
       bg-red-200">
        <Entypo name='cross' size={24} color="red"/>
       </TouchableOpacity>

       <TouchableOpacity
        onPress={()=> swiperRef.current.swipeRight() }
        className="items-center justify-center rounded-full w-16 h-16
        bg-green-200">
        <AntDesign name='heart'  size={24} color="green"/>
       </TouchableOpacity>
      </View> */}
     
    </SafeAreaView> 
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({
  cardShadow:{
    shadowColor:"#000",
  shadowOffset:{
  width:0,
  height:1,
},
shadowOpacity:0.2,
shadowRadius:1.41,
elevation:2
,}
});
