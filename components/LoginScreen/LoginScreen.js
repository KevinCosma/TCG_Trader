import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';

function LoginScreen() {
    const [enteredCurrentUserInput, setCurrentUserInput] = useState('');

    function userInputHandler(enteredText) {
        setCurrentUserInput(enteredText)
    }

    function loginButtonHandler() {

    }

    return (
        <View style={styles.loginScreen}>
            <Text style={styles.headerText}>Login Screen</Text>
            <TextInput 
                placeholder='Username'
                onChangeText={userInputHandler}
                value={enteredCurrentUserInput}
            />
            {/* <TextInput placeholder='Password'/> */}
            <Button title='Login'/>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    loginScreen: {
        padding: 20,
    },
    headerText: {
        fontSize: 24
    }
});