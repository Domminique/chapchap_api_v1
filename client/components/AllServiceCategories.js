import { ScrollView, View, Text, FlatList } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'
import { useSelector, useDispatch } from 'react-redux'
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice'

const AllCategories = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs)

  const {
    jobTypeOptions,
    statusOptions,
    categoryOptions,
    categoryServiceOptions,
    categoryDoctorOptions,
    categoryAmbulanceOptions,
  } = useSelector((store) => store.job)

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
        data={categoryServiceOptions}
        renderItem={({
          item: { _id, title, multiplier, name, position, image },
          item,
        }) => <CategoriesCard title={item} />}
      />
    </ScrollView>
  )
}

export default AllCategories
