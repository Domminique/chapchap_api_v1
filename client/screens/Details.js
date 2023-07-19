import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "./Colors";
import { useNavigation } from "@react-navigation/native";
import { item } from "../components/Context";

const Details = ({ route }) => {
  const { myBag, setmyBag } = React.useContext(item);
  const content = route.params.data;
  const [pressed, SetPressed] = useState(false);
  nav = useNavigation();

  console.log(content, "content");
  const LoadingIndicator = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: COLORS.primary }}>
      <View
        style={{
          height: 300,
          backgroundColor: COLORS.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 250, height: 250, borderRadius: 150 }}
          source={require("../images/avacado.jpg")}
          // source={{uri:content.image}}
        />
      </View>

      <View
        style={{
          borderTopLeftRadius: 60,
          backgroundColor: "white",
          paddingHorizontal: 30,
          paddingTop: 40,
          gap: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              backgroundColor: COLORS.primary,
              height: 35,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              gap: 10,
            }}
          >
            <FontAwesome name="star" size={21} color="gold" />
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              4.5
            </Text>
          </View>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            KES. {content.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "500",
              fontSize: 22,
            }}
          >
            {content.name}
          </Text>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <AntDesign name="pluscircle" size={24} color={COLORS.primary} />

            <Text style={{ fontWeight: "bold", fontSize: 19, color: "black" }}>
              {" "}
              1
            </Text>

            <AntDesign name="minuscircle" size={24} color={COLORS.primary} />
          </View>
        </View>

        <Text style={{ fontSize: 15, fontWeight: "400" }}>
          {" "}
          Welcome to our farm, where we proudly cultivate and offer a delightful
          selection of cassavas, sweet potatoes, sunflower seeds, and avocados.
          As a part of the thriving online agritech marketplace, we are
          committed to providing you with the finest quality produce right at
          your fingertips
        </Text>

        <Text
          style={{
            color: "black",
            fontWeight: "500",
            fontSize: 20,
          }}
        >
          More products from our farm
        </Text>

        <View style={{ flexDirection: "row", gap: 20 }}>
          <View>
            <Image
              style={{ width: 85, height: 85, borderRadius: 50 }}
              source={require("../images/farm1.jpg")}
            />
            <AntDesign
              style={{ position: "absolute", bottom: 0, right: 0 }}
              name="pluscircle"
              size={24}
              color={COLORS.primary}
            />
          </View>
          <View>
            <Image
              style={{ width: 85, height: 85, borderRadius: 50 }}
              source={require("../images/sweet-potato.jpg")}
            />
            <AntDesign
              style={{ position: "absolute", bottom: 0, right: 0 }}
              name="pluscircle"
              size={24}
              color={COLORS.primary}
            />
          </View>
          <View>
            <Image
              style={{ width: 85, height: 85, borderRadius: 50 }}
              source={require("../images/yuca.jpg")}
            />
            <AntDesign
              style={{ position: "absolute", bottom: 0, right: 0 }}
              name="pluscircle"
              size={24}
              color={COLORS.primary}
            />
          </View>
        </View>

        {myBag.includes(content) ? (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: "red",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 55,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              {" "}
              Added to Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setmyBag([...myBag, content]);
              // nav.navigate("Cart");
            }}
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              height: 55,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              {" "}
              Add to Cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default Details;
