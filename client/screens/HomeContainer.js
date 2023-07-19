import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Banner from "../components/Banner";
import Category from "../components/Category";
import FoodItems from "../components/FoodItems";

import Header from "../components/Header";

import Search from "../components/Search";

const HomeContainer = () => {
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false}>
      <SafeAreaView style={{ paddingHorizontal: 25, paddingTop: 60, gap: 20 }}>
        <Header />

        <Search />

        <Category />

        <Banner />

        <FoodItems/>

      
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeContainer;
