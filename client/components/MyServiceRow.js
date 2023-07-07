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
import { getMyJobs } from '../features/allJobs/allJobsSlice'
import MyServiceCard from './MyServiceCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
const ServiceFeaturedRow = ({ id, title, description }) => {
  const {
    jobs,
    products,
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

  const { user } = useSelector((store) => store.user)
  const [userInfo, setUserInfo] = useState(null);
  // const userId = userInfo.userId
  // console.log("My userId1", user)
  // const userId = '63faa80dc2035a777fb17fb8'
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
  }, [page, search, searchStatus,products, searchType, sort])
  

  // const allCategories =  products.filter((item) => item.user === userId)
  // console.log("My services", allCategories)
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
              images,
              category,
              multiplier,
              name,
              description,
              longitude,
              latitude,
              location,
              position,
              image,
              phonenumber,
              lng,
              lat,
              user, 
              price, 
              verified,
              availability, 
              featured
            },
            item,
          }) => (

            
            <MyServiceCard
              id={_id}
              imgUrl={image}
              title={name}
              rating={4.5}
              genre={category}
              address=''
              short_description={description}
              dishes={images}
              phonenumber={phonenumber}
              lng={lng}
              lat={lat}
              user={user}
              price={price}
              verified={verified}
              availability={availability}
              featured={featured}
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

export default ServiceFeaturedRow
