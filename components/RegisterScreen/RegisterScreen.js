import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

function registerScreen() {
    return (
        <View style={styles.registerScreen}>
            <Text style={styles.headerText}>Register Screen</Text>
            <TextInput placeholder='First Name'/>
            <TextInput placeholder='Last Name'/>
            <TextInput placeholder='Email'/>
            <TextInput placeholder='Username'/>
            <TextInput placeholder='Password'/>
            <TextInput placeholder='Confirm Password'/>
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