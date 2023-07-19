import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Search from "../components/Search";
import Category from "../components/Category";

const AtlasSearch = () => {
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false}>
      <SafeAreaView style={{ paddingHorizontal: 25, paddingTop: 60, gap: 20 }}>
    
        <Search />
        <Category />

      </SafeAreaView>
    </ScrollView>
  )
}

export default AtlasSearch