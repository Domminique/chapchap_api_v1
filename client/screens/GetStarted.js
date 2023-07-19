import {
  View,
  Text,
  Image,
  Touchableopacity,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "./Colors";

const GetStarted = () => {
  const nav = useNavigation();

  return (
    <LinearGradient
      style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}
      colors={[COLORS.primary, COLORS.secondaryB]}
    >
      <View
        style={{
          width: 300,
          height: 300,
          backgroundColor: "white",
          borderRadius: 300,
          justifyContent: "center",
          alignItems: "center",
          top: 58,
        }}
      >
        <Image
          style={{ width: 280, height: 280, borderRadius: 300 }}
          source={require("../images/vegetables.jpg")}
        />
      </View>

      <Text
        style={{
          fontSize: 40,
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: 55,
          letterSpacing: 2.5,
          top: -15,
        }}
      >
        Good Quality Food
      </Text>

      <TouchableOpacity
        onPress={() => nav.navigate("Onboarding")}
        style={{
          backgroundColor: "white",
          width: 200,
          height: 55,
          padding: 10,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: COLORS.primary,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 30,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GetStarted;
