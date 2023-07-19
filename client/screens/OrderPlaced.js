import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "./Colors";

const OrderPlaced = () => {
  nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      nav.navigate("Tabs");
    }, 3000);
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: COLORS.primary,
        flex: 1,
      }}
    >
      <AntDesign name="checkcircle" size={70} color="white" />
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          textAlign: "center",
          color: "white",
          lineHeight: 40,
        }}
      >
        Hurray! Your Order Placed Succesfully
      </Text>
    </View>
  );
};

export default OrderPlaced;
