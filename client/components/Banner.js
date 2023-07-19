import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS } from "../screens/Colors";

const Banner = () => {
  return (
    <View style={{ gap: 20 }}>
      <Text style={{ fontSize: 20 , gap:10}}>Events Near You</Text>
      <View
        style={{
          backgroundColor: COLORS.secondary,
          height: 180,
          borderRadius: 10,
          paddingHorizontal: 20,
          flexDirection: "row",
          paddingVertical: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ gap: 12 }}>
          <Text style={{ fontSize: 15, color: "white" }}>
            KK Largest Conference{" "}
          </Text>

          <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
            {" "}
            BOOK NOW & SAVE!{" "}
          </Text>
          <Text style={{ fontSize: 8, color: "white" }}>
            For Farmers, Agro processors & SMEs.
          </Text>
          <Text style={{ fontSize: 8, color: "white" }}>
            25 - 26 October | Kakamega, Kenya
          </Text>
          <Text style={{ fontSize: 6, color: "white" }}>
            EARLY BIRD DISCOUNTS AVAILABALE
          </Text>
        </View>
        <Image
          style={{ width: 85, height: 85, borderRadius: 100 }}
          source={require("../images/vegetables.jpg")}
        />
      </View>
    </View>
  );
};

export default Banner;
