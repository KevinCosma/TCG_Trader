import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import LoginScreen from '../LoginScreen/LoginScreen';
import RegisterScreen from '../RegisterScreen/RegisterScreen';

function AppInitialScreen({navigation}) {
    function loginButtonHandler() {
        navigation.navigate('Login');
    }

    function registerButtonHandler() {
        navigation.navigate('Register');
    }

    return (
        <View style={styles.appInitialScreen}>
            <Text style={styles.headerText}>Main Screen</Text>
            <Button 
                title='Login'
                onPress={loginButtonHandler}
            />
            <Button 
                title='Register'
                onPress={registerButtonHandler}
            />
            {/* <LoginScreen />
            <RegisterScreen />
            <UserProfileScreen />
            <AddCardScreen />
            <SearchScreen /> */}
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