import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

function AppInitialScreen() {
    return (
        <View style={styles.appInitialScreen}>
            <Text style={styles.headerText}>Main Screen</Text>
            <Button title='Login'/>
            <Button title='Register'/>
            <LoginScreen />
            <RegisterScreen />
            <UserProfileScreen />
            <AddCardScreen />
            <SearchScreen />
        </View>
    );
}

export default AppInitialScreen;

const styles = StyleSheet.create({
    appInitialScreen: {
      padding: 20,
    },
    discussion: {
      padding: 20,
    },
    headerText: {
      fontSize: 24
    }
  });