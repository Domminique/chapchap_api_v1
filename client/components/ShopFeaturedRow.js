import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
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

const ShopFeaturedRow = ({ id, title, description }) => {
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

  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchStatus, searchType, sort])

  const allCategories = jobs.filter((item) => item.jobType == 'Shop')
  //console.log(jobs)
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
          data={allCategories}
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
            },
            item,
          }) => (
            <RestaurantCard
              id={_id}
              imgUrl={image}
              title={name}
              rating={4.5}
              genre={category}
              address=''
              short_description={description}
              dishes={images}
              long={longitude}
              lat={latitude}
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

export default ShopFeaturedRow
