import React, { useContext, useEffect, useState } from "react";
import Reminder_Screen from "./Reminder_Screen";
import Birthday_Screen from "./Birthday_Screen";
import Settings_Screen from "./Settings_Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  ActivityIndicator,
} from "react-native-paper";
import { Context as SettingsContext } from "../Context/SettingsContext";
import { Context as ReminderContext } from "../Context/ReminderDataContext";
import { Context as BirthdayContext } from "../Context/BirthdayDataContext";

import * as Notifications from "expo-notifications";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileFavourites from "../components/ProfileFavourites";
import HomeScreen from "./HomeScreen";
import StatsScreen from "./StatsScreen";
import ChatRow from "../components/ChatRow";
import ChatListComponent from "../components/ChatListComponent";
import MessageScreen from "./MessageScreen";
import AddServiceScreen from "./AddServiceScreen";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const lighttheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6c757d",
    accent: "#6096ba",
    background: "#eeeeee",
    tab: "#ffffff",
    elemprim: "rgb(220,120,120)",
    elemsec: "lightblue",
    text: "#777777",
  },
};
const darktheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#aaafaf",
    accent: "#6096ba",
    background: "#212529",
    tab: "#343a40",
    elemprim: "#777777",
    elemsec: "#777777",
    text: "#bbbbbb",
  },
};

const Tab = createBottomTabNavigator();

function Main() {
  // const { init_data, snooze } = useContext(ReminderContext);
  // const { init_data_Birthday } = useContext(BirthdayContext);
  // const { state, init_data_Settings } = useContext(SettingsContext);
  var currentTheme =  lighttheme ;
  const { colors } = currentTheme;
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const subscription = Notifications.addNotificationResponseReceivedListener(
  //     async (response) => {
  //       if (response.actionIdentifier === "snooze") {
  //         if (
  //           response.notification.request.content.categoryIdentifier ==
  //           "reminder"
  //         ) {
  //           snooze({
  //             text: response.notification.request.content.body,
  //             val: response.notification.request.identifier,
  //             snoozetime: 30,
  //           });
  //         }
  //       }
  //       await Notifications.dismissNotificationAsync(
  //         response.notification.request.identifier
  //       );
  //     }
  //   );
  //   return () => subscription.remove();
  // }, []);

  // useEffect(() => {
  //   init_data();
  //   init_data_Birthday();
  //   init_data_Settings();
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }, []);

  if (loading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator color="#00AA13" animating={true} size={50} />
      </View>
    );
  } else
    return (
      // <PaperProvider theme={currentTheme}>
        <PaperProvider >
        {/* <NavigationContainer> */}
          <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: colors.background }}
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: "#00AA13",
              tabBarInactiveTintColor: "gray",
              showLabel: true,
              activeBackgroundColor: colors.tab,
              inactiveBackgroundColor: colors.tab,
              activeTintColor: colors.accent,
              inactiveTintColor: colors.primary,
            }}

          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <AntDesign name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Market Prices"
              component={StatsScreen}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <AntDesign name="areachart" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Sell"
              component={AddServiceScreen}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <AntDesign name="plus" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Farm Assistant"
              component={MessageScreen}
              options={{
                tabBarIcon: ({ size, color }) => (
                  <AntDesign name="user" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        {/* </NavigationContainer> */}
         {/* <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = {
            Home: ["menu", "menu"],
            Analytics: ["graph", "graph"],
            IoT: ["drone", "drone"],
            Profile: ["calendar-clock", "calendar-clock"],
          };

          return (
            <MaterialCommunityIcons
              name={iconName[route.name][focused ? 0 : 1]}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "#00AA13",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Analytics" component={Birthday_Screen} />
      <Tab.Screen name="IoT" component={Reminder_Screen} />
      <Tab.Screen name="Profile" component={ProfileFavourites} />

      
      
    </Tab.Navigator> */}
      </PaperProvider>
    );
}

export default Main;
