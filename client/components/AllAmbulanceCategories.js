import { ScrollView, View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import { useSelector, useDispatch } from 'react-redux'
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice'
import { distance, poslat, poslng } from '../utils/geodata'
import AsyncStorage from '@react-native-async-storage/async-storage'


const AllCategories = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs)
    const { user } = useSelector((store) => store.user)
    const [userInfo, setUserInfo] = useState(null);
  const {
    jobTypeOptions,
    statusOptions,
    categoryOptions,
    categoryServiceOptions,
    categoryDoctorOptions,
    categoryAmbulanceOptions,
  } = useSelector((store) => store.job)


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


// Filter verifield
const  verified = categoryAmbulanceOptions?.filter((item) => item?.availability == true)


// filter availability

const onduty = verified?.filter((item) => item?.verified == true)
  setTimeout(() => { 

  }, 3000)
 // Finding nearby
 
 const nearBy = [];
//  const poslat = userInfo?.location.coords.latitude ;
//  const poslng = userInfo?.location.coords.longitude;
 
 
 const data =  onduty || {}
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

 console.log("nearby featured", nearBy )
 


  //console.log(jobTypeOptions)
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsVerticalScrollIndicator={false}
    >
      <FlatList
        horizontal
        data={nearBy}
        renderItem={({
          item: { _id, title, multiplier, name, position, image },
          item,
        }) => <CategoriesCard title={item} />}
      />
    </ScrollView>
  )
}

export default AllCategories
