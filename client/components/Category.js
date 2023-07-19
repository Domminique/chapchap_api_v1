import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../screens/Colors";

const Category = () => {
  const [selected, setSelected] = useState();
  const cats = [
    "Logistic Services",
    "Farm Experts",
    "Agro Businesses",
    "Weather",
    "Market Prices",
    "Crop Health",
    "Wate Managment",
    "Farm Trainning",
  
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={cats}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            setSelected(index);
          }}
          activeOpacity={0.9}
          style={{ marginRight: 10 }}
        >
          <View
            style={{
              width: 150,
              height: 80,
              backgroundColor: selected === index ? COLORS.primary : "orange",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          ><Text style={{ marginTop: 5, textAlign: "center" }}>{item} </Text>
            {/* <Image
              style={{ width: 100, height: 60, }}
              source={require("../images/vegetables.jpg")}
            /> */}
          </View>
          
        </TouchableOpacity>
      )}
    />
  );
};

export default Category;
