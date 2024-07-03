import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AddCardScreen from './components/AddCardScreen/AddCardScreen';
import LoginScreen from './components/LoginScreen/LoginScreen';
import RegisterScreen from './components/RegisterScreen/RegisterScreen';
import SearchScreen from './components/SearchScreen/SearchScreen';
import UserProfileScreen from './components/UserProfileScreen/UserProfileScreen';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
          <View style={styles.mainMenuScreen}>
            <Text style={styles.headerText}>Main Screen</Text>
            <Button title='Login'/>
            <Button title='Register'/>
            <LoginScreen />
            <RegisterScreen />
            <UserProfileScreen />
            <AddCardScreen />
            <SearchScreen />
          </View>
          <View style={styles.discussion}>
            <Text style={styles.headerText}>Message function?</Text>
            <Text style={styles.headerText}>Anything else that I haven't thought of???</Text>
          </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

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
