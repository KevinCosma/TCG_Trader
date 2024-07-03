import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';

function registerScreen() {
    const [enteredInput, setEnteredText] = useState('');

    function textInputHandler(enteredText) {
        setEnteredText(enteredText)
    }
    
    function registerButtonHandler() {

    }

    return (
        <View style={styles.registerScreen}>
            <Text style={styles.headerText}>Register Screen</Text>
            <TextInput placeholder='First Name'/>
            <TextInput placeholder='Last Name'/>
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Username'/>
            <TextInput placeholder='Password'/>
            <TextInput placeholder='Confirm Password'/>
            <Button 
                title='Register'
                onChangeText={textInputHandler}
                value={enteredInput}
            />
        </View>
    );
}

export default registerScreen;

const styles = StyleSheet.create({
    registerScreen: {
        padding: 20,
    },
    headerText: {
        fontSize: 24
    }
});