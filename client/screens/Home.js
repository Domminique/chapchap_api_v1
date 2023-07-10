import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoList from './TodoList';
import AddProduct from './AddProduct';
import TodoListRealm from './TodoListRealm';
import Register from './Register';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Todo" component={TodoList} />
    //   <Tab.Screen name="Add" component={AddProduct} />
    // </Tab.Navigator>

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = {
            Todo: ["menu", "menu"],
            Add: ["graph", "graph"],
            RealmTodo: ["drone", "drone"],
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
      

      <Tab.Screen name="Todo" component={TodoList} />
      <Tab.Screen name="Add" component={AddProduct} />

      <Tab.Screen name="RealmTodo" component={ItemListView} />
      <Tab.Screen name="Profile" component={Register} />
      
    </Tab.Navigator> 
  );
}

export default Home