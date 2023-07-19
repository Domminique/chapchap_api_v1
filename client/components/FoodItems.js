import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../screens/Colors";
import { useNavigation } from "@react-navigation/native";

const food = [
  {
    id: 1,
    name: "Avacado",
    price: 100,
    image: "../images/avacado.jpg",
    description:"Welcome to our farm, where we proudly cultivate and offer a delightful selection of cassavas, sweet potatoes, sunflower seeds, and avocados.As a part of the thriving online agritech marketplace, we are committed to providing you with the finest quality produce right at your fingertips"
  },
  {
    id: 2,
    name: "Sweet potatoes",
    price: 300,
    image: "../images/sweet-potato.jpg",
  },
  {
    id: 3,
    name: "Sunflower Seeds",
    price: 4000,
    image: "../images/farm1.jpg",
  },
  {
    id: 4,
    name: "Casava",
    price: 500,
    image: "../images/yuca.jpg",
  },
];
const farm = [
  {
    id: 1,
    name: "Avacado",
    price: 100,
    image: "../images/avacado.jpg",
    description:"Welcome to our farm, where we proudly cultivate and offer a delightful selection of cassavas, sweet potatoes, sunflower seeds, and avocados.As a part of the thriving online agritech marketplace, we are committed to providing you with the finest quality produce right at your fingertips"
  },
  // {
  //   id: 2,
  //   name: "Sweet potatoes",
  //   price: 300,
  //   image: "../images/sweet-potato.jpg",
  // },
  // {
  //   id: 3,
  //   name: "Sunflower Seeds",
  //   price: 4000,
  //   image: "../images/farm1.jpg",
  // },
  // {
  //   id: 4,
  //   name: "Casava",
  //   price: 500,
  //   image: "../images/yuca.jpg",
  // },
];
const FoodItems = () => {
  const nav = useNavigation();
  return (
    <View style={{ gap: 15 }}>
      <Text style={{ fontSize: 20 }}>Popular</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={food}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              nav.navigate("Details", {data:item});
            }}
            style={{
              backgroundColor: "#E3E3E3",
              width: 170,
              height: 220,
              marginRight: 20,
              borderRadius: 20,
           
            
              gap: 10,
            }}
          >
            <Image
              style={{
                width: 170,
                height: 120,
                borderRadius: 20,
                alignSelf: "center",
              }}
              source={require("../images/avacado.jpg")}

              //   source={{uri:item.image}}
            />
            <Text
              style={{ fontSize: 16, fontWeight: "700", textAlign: "center" }}
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
              paddingVertical: 20,
              }}
            >
              <Text
                style={{
                  color: COLORS.primary,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                KES. {item.price}
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "700",
                  }}
                >
                  /kg
                </Text>
              </Text>
              <Ionicons name="ios-add-circle" size={25} color="green" />
            </View>
          </TouchableOpacity>
        )}
      />
      <Text></Text>
    </View>
  );
};

export default FoodItems;
