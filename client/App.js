import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppProvider, UserProvider } from "@realm/react";
import { appId, baseUrl } from "./atlasConfig.json";

import { WelcomeView } from "./screens/WelcomeView";
import { realmContext } from "./screens/RealmContext";
import { ItemListView } from "./screens/ItemListView";
import ProfileScreen from "./screens/ProfileScreen";
import HomeContainer from "./screens/HomeContainer";
import AddProduct from "./screens/AddProduct";
import Payments from "./screens/Payments";
import OnboardingScreen from "./screens/OnboardingScreen";

import GetStarted from "./screens/GetStarted";
import Tabs from "./screens/Tabs";
import Details from "./screens/Details";
import Cart from "./screens/Cart";
import { Context } from "./components/Context";
import OrderPlaced from "./screens/OrderPlaced";
const { RealmProvider } = realmContext;

const Stack = createNativeStackNavigator();

const AppWrapper = () => {
  return (
    <AppProvider id={appId} baseUrl={baseUrl}>
      <UserProvider fallback={WelcomeView}>
        <App />
      </UserProvider>
    </AppProvider>
  );
};

const LoadingIndicator = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const App = () => {
  return (
    <>
      <RealmProvider
        sync={{
          flexible: true,
          onError: (_, error) => {
            // Show sync errors in the console
            console.error(error);
          },
        }}
        fallback={LoadingIndicator}
      >
        <Context>
          <SafeAreaProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Get Started"
                  component={GetStarted}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Onboarding"
                  component={OnboardingScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Tabs"
                  component={Tabs}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="ItemList"
                  component={ItemListView}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Container"
                  component={HomeContainer}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Product"
                  component={AddProduct}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Details"
                  component={Details}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Cart"
                  component={Cart}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Order"
                  component={OrderPlaced}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Payments"
                  component={Payments}
                  options={{
                    headerShown: false,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </Context>
      </RealmProvider>
    </>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 12,
    textAlign: "center",
  },
  footer: {
    padding: 24,
  },
  activityContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default AppWrapper;
