
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import TodoList from './screens/TodoList';
import AddProduct from './screens/AddProduct';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Todo" component={TodoList} />
        <Stack.Screen name="AddProduct" component={AddProduct} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;