import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const nav = useNavigation()
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30 }}>Hello , Dominic</Text>
      <TouchableOpacity
      onPress={()=> nav.navigate('Profile')}>
      <Image
      
      source={require("../images/vegetables.jpg")}
      style={{ width: 50, height: 50 ,  borderRadius: 50, }}
     
    />
      </TouchableOpacity>
     
    </View>
  );
};

export default Header;
