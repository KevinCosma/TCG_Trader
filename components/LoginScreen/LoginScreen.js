import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

function loginScreen() {
    return (
        <View style={styles.loginScreen}>
            <Text style={styles.headerText}>Login Screen</Text>
            <TextInput placeholder='Username'/>
            <TextInput placeholder='Password'/>
        </View>
    );
}

export default loginScreen;

const styles = StyleSheet.create({
    loginScreen: {
        padding: 20,
      },
});