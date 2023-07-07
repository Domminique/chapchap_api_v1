import { ScrollView, View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { useSelector, useDispatch } from 'react-redux'
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice'

// import Image1 from '../assets/yellow.jpg'
// import Image2 from '../assets/Untitled3.png'
// import Image3 from '../assets/Untitled4.png'
// import Image4 from '../assets/Untitled1.png'
import ActionRow from './ActionRow'

import { translations } from '../translations/translations'
import { I18n } from 'i18n-js'
import { useState } from 'react'


const Categories = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs)
    const { cartItems, locale, total, amount } = useSelector(
      (store) => store.translation
    )

  //const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  //console.log(jobTypeOptions)
  //let [locale, SetLocale] = useState('fr')

 const [language, setLanguage] = useState('English')

 const i18n = new I18n(translations)

 console.log(locale,"home")

 // Set the locale once at the beginning of your app.
 i18n.locale = locale

 // When a value is missing from a language it'll fallback to another language with the key present.
 i18n.enableFallback = true

  //const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  //console.log(jobTypeOptions)


  // shop:"Shop",
  //   professional:"Professional",
  //   services:"Service",
  //   grocery:"Grocery",
  //   artisan:"Artisan",

  const doctor = [i18n.t('doctor')]
  const jobTypeOptions = [
   {
      id: '265',
      // name: [i18n.t('creator')],
      name: 'Market prices',
      screen: 'Creator',
      image:'',
      title:"Track ",
      screen:"Creator",
      color:"#23967F",
      icon:"calculator",
      vertical:true
    },
    {
      id: '123',
      // name: [i18n.t('professional')],
      name: 'Logistics Services',
      screen: 'Grocery',
      image:'',
      title:"Track workout",
      screen:"Logistics",
      color:"#1982C4",
      icon:"truck",
      vertical:true
    },
    {
      id: '124',
      // name: [i18n.t('services')],
      name: 'Agribusinesses',
      screen: 'Service',
      // image: Image.resolveAssetSource(Image2).uri,
      title:"Track workout",
      color:"#F44174",
      icon:"shopping-store",
      image:'',
      vertical:true
    },
    {
      id: '175',
      name: 'Crop Health',
      screen: 'Professional' ,
      // image: Image.resolveAssetSource(Image2).uri,
      title:"Track workout",
      color:"#8AC926",
      icon:"laboratory",
      image:'',
      vertical:true
    },
   
    {
      id: '125',
      name: 'Weather Conditions',
      screen: 'Professional' ,
      // image: Image.resolveAssetSource(Image2).uri,
      title:"Track workout",
      color:"#C03221",
      icon:"rain",
      image:'',
      vertical:true
    },
  
    {
      id: '1265',
      name: 'Waste Management',
      screen: 'Artisan',
      image:'',
      title:"Track workout",
      screen:"Artisan",
      color:"#8AC926",
      icon:"earth",
      vertical:true
    },
    
    
   
  ]
  return (
    <ScrollView
      contentContainerStyle={{
        
        paddingHorizontal: 15,
        padding: 10,
        paddingBottom: 10,
        
      }}
      showsVerticalScrollIndicator={false}
    >
      <FlatList
        data={jobTypeOptions}
        horizontal
        renderItem={({
          item: { _id, title, multiplier, name, screen, position, image, color,icon,vertical},
          item,
        }) => <ActionRow title={screen} screen={name} imgUrl={image} color={color} icon={icon} vertical={vertical} />}
      />

      
    </ScrollView>
  )
}

export default Categories
