import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  ArrowRightIcon,
  BeakerIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from '../features/allJobs/allJobsSlice'
import { distance, poslat, poslng } from '../utils/geodata'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AllCategoriesFeaturedRow = ({ id, title, description }) => {
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
  const { user } = useSelector((store) => store.user)
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch()


  useEffect(() => {
    getLocalUser();
  }, []);



  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    // return JSON.parse(data);
    setUserInfo(JSON.parse(data));
  };
  

  console.log(userInfo)

  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, searchType, sort])

//   console.log(title, 'title')

//   const allCategories = products.filter((item) => item.category == title)

//   // Filter verifield
// const  verified = allCategories?.filter((item) => item?.availability == true)


// filter availability

// const onduty = verified?.filter((item) => item?.verified == true)
  setTimeout(() => { 

  }, 3000)
 // Finding nearby
 
//  const nearBy = [];
//  const poslat = userInfo?.location.coords.latitude ;
//  const poslng = userInfo?.location.coords.longitude;
 
 
 const data =  {}
 for (var i = 0; i < data.length; i++) {
  // if this location is within 0.1KM of the user, add it to the list
  if (distance(poslat, poslng, data[i].lat, data[i].lng, "K") <= 5.0) {  
      Array.prototype.push.call(nearBy ,{
        name:data[i].name , 
        name:data[i].name , 
        category:data[i].category,
        _id:data[i]._id,
        title:data[i].title,
        imageLogo:data[i].imageLogo,
        images:data[i].images,
        image:data[i].image,
        jobType:data[i].jobType,
        multiplier:data[i].multiplier,
        description:data[i].description,
        position:data[i].position,
        image:data[i].image,
        availability:data[i].availability, 
        phonenumber:data[i].phonenumber,     
      } );
  }
 }

//  console.log("nearby featured", nearBy )
 

  // console.log(allCategories, "allCategories")

  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon size={35} color='#00AA13' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        showsVerticalScrollIndicator={false}
        className='pt-4'
      >
        {/* RestaurantCards */}

        <FlatList
          horizontal
          data={jobs}
          keyExtractor={(item) => item._id}
          renderItem={({
            item: {
              _id,
              title,
              imageLogo,
              images,
              category,
              company,
              profession,
              jobType,
              multiplier,
              name,
              description,
              longitude,
              latitude,
              location,
              position,
              image,
              availability,
              phonenumber
            },
            item,
          }) => (
            <RestaurantCard
            name={name}
            id={_id}
            imgUrl={image}
            title={name}
            logoUrl={imageLogo}
            jobType={jobType}
            rating={4.5}
            company={company}
            profession={profession}
            genre={category}
            address=''
            short_description={description}  
            dishes={images}
            long={longitude}
            lat={latitude}
            availability={availability}
            location={location}
            phonenumber={phonenumber}
            product={_id}
            amount={4}
            />
          )}
        />
        {/* <RestaurantCard
   id={123}
   imgUrl="http://192.168.43.19:80/uploads/catalogs/lazulihomehotchiily.png"
   title='Yo ! Honey'
   rating={4.5}
   genre="value addition"
   address="Kimani Road"
   short_description="This is a Test"
   dishes={[]}
   long={20}
   lat={0}
   
   /> */}
        {/* <RestaurantCard
   id={123}
   imgUrl="http://192.168.43.19:80/uploads/catalogs/lazulihomehotchiily.png"
   title='Yo ! Honey'
   rating={4.5}
   genre="value addition"
   address="Kimani Road"
   short_description="This is a Test"
   dishes={[]}
   long={20}
   lat={0}
   
   /> */}
      </ScrollView>
    </View>
  )
}

export default AllCategoriesFeaturedRow
