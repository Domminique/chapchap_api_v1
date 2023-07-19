import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoList from './TodoList';
import AddProduct from './AddProduct';
import TodoListRealm from './TodoListRealm';
import ProfileScreen from './ProfileScreen';
import { ItemListView } from './ItemListView';
import HomeContainer from './HomeContainer';
import StatsScreen from './StatsScreen';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = {
            Home: ["menu", "menu"],
            Market: ["graph", "graph"],
            Add : ["plus", "plus"],
            Search: ["drone", "drone"],
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
      
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="Market" component={StatsScreen} />
      <Tab.Screen name="Add" component={ItemListView} />
      <Tab.Screen name="Search" component={ItemListView} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      
    </Tab.Navigator> 
  );
}

export default HomeScreen
