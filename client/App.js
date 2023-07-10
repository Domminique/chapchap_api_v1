import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AppProvider, UserProvider} from '@realm/react';

import {appId, baseUrl} from './atlasConfig.json';
import {LogoutButton} from './screens/LogoutButton';
import {WelcomeView} from './screens/WelcomeView';
import {ItemListView} from './screens/ItemListView';
import {realmContext} from './screens/RealmContext';
import {OfflineModeButton} from './screens/OfflineModeButton';
import Home from './screens/Home';
import TodoList from './screens/TodoList';
import AddProduct from './screens/AddProduct';

const {RealmProvider} = realmContext;

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

const headerRight = () => {
  return <OfflineModeButton />;
};

const headerLeft = () => {
  return <LogoutButton />;
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
        fallback={LoadingIndicator}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
              <Stack.Screen
                name="Your To-Do List"
                component={ItemListView}
                options={{
                  headerTitleAlign: 'center',
                  headerLeft,
                  headerRight,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Log in with the same account on another device or simulator to see
              your list sync in real time
            </Text>
          </View>
        </SafeAreaProvider>
      </RealmProvider>
    </>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 12,
    textAlign: 'center',
  },
  footer: {
    padding: 24,
  },
  activityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default AppWrapper;
