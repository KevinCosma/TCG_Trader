import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import AddCardScreen from './components/AddCardScreen/AddCardScreen';
// import LoginScreen from './components/LoginScreen/LoginScreen';
// import RegisterScreen from './components/RegisterScreen/RegisterScreen';
// import SearchScreen from './components/SearchScreen/SearchScreen';
// import UserProfileScreen from './components/UserProfileScreen/UserProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='AddCard' component={AddCardScreen}/>
        <Stack.Screen name='SearchCard' component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainMenuScreen: {
    padding: 20,
  },
  discussion: {
    padding: 20,
  },
  headerText: {
    fontSize: 24
  }
});
