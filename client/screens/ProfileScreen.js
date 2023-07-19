import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { Button, Overlay, ListItem, Icon, Avatar } from "react-native-elements";
import { OfflineModeButton } from "./OfflineModeButton";
import { LogoutButton } from "./LogoutButton";
import { useUser } from "@realm/react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "./Colors";
import { FontAwesome } from "@expo/vector-icons";
export default function ProfileScreen() {
  nav = useNavigation();
  const user = useUser();

  const makePayments = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: input,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://192.168.42.37:80/api/v1/payements",
        options
      );
      const data = await response.json();
      console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: COLORS.primary }}>
      <View
        style={{
          height: 180,
          backgroundColor: COLORS.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text style={{ fontSize: 20 }}>Hello </Text>

          <Image
            source={require("../images/vegetables.jpg")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </View>

        <OfflineModeButton />
      </View>

      <View
        style={{
          height: 600,
          borderTopLeftRadius: 60,
          backgroundColor: "white",
          paddingHorizontal: 30,
          paddingTop: 40,
          gap: 20,
        }}
      >
        <TouchableOpacity
        onPress={()=>nav.navigate('ItemListView')}
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              gap: 40,
            }}
          >
            <FontAwesome name="edit" size={35} color="gold" />
            <Text
              style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
            ></Text>
          </View>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Manage My Farm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 17,
              gap: 40,
            }}
          >
            <FontAwesome name="calendar" size={35} color="gold" />
            <Text
              style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
            ></Text>
          </View>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            My Orders & Bookings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 17,
              gap: 45,
            }}
          >
            <FontAwesome name="user" size={35} color="gold" />
            <Text
              style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
            ></Text>
          </View>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 17,
              gap: 35,
            }}
          >
            <FontAwesome name="book" size={35} color="gold" />
            <Text
              style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
            ></Text>
          </View>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Terms and Services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              gap: 60,
            }}
          >
            <FontAwesome name="info" size={35} color="gold" />
            <Text
              style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
            ></Text>
          </View>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Support
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              gap: 30,
            }}
          >
            <FontAwesome name="diamond" size={35} color="gold" />
            <Text
              style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
            ></Text>
          </View>
          <Text
            style={{
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Upgrade to premium
          </Text>
        </TouchableOpacity>

        <Text>Logout</Text>

        <LogoutButton />
      </View>
    </ScrollView>
  );
}
