import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Feather, AntDesign } from "@expo/vector-icons";
import HomeContainer from "./HomeContainer";
import { COLORS } from "./Colors";
import Cart from "./Cart";
import StatsScreen from "./StatsScreen";
import ProfileScreen from "./ProfileScreen";
import { ItemListView } from "./ItemListView";
import AtlasSearch from "./AtlasSearch";
import Search from "../components/Search";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  width: 35,
                  height: 35,
                  borderRadius: 30,
                  justifycontent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons name="home" size={28} color="white" />
              </View>
            ) : (
              <MaterialCommunityIcons name="home" size={28} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  width: 35,
                  height: 35,
                  borderRadius: 30,
                  justifycontent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="chart-bar-stacked"
                  size={28}
                  color="white"
                />
              </View>
            ) : (
              <MaterialCommunityIcons name="chart-bar" size={28} color="grey" />
            ),
        }}
      />
     
      <Tab.Screen
        name="Searches"
        component={AtlasSearch}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  width: 35,
                  height: 35,
                  borderRadius: 30,
                  justifycontent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="search1" size={28} color="white" />
              </View>
            ) : (
              <AntDesign name="search1" size={28} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  width: 35,
                  height: 35,
                  borderRadius: 30,
                  justifycontent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="cart"
                  size={28}
                  color="white"
                />
              </View>
            ) : (
              <MaterialCommunityIcons name="cart" size={28} color="grey" />
            ),
        }}
      />
       <Tab.Screen
        name="Add"
        component={ProfileScreen}
        // component={Search}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor: COLORS.primary,
                  width: 35,
                  height: 35,
                  borderRadius: 30,
                  justifycontent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons name="account" size={28} color="white" />
              </View>
            ) : (
              <MaterialCommunityIcons name="account" size={28} color="grey" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
