import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import React from 'react';

function UserProfileScreen({navigation}) {
    function addCardButtonHandler() {
        navigation.navigate('Login');
    }

    function searchButtonHandler() {
        navigation.navigate('Register');
    }
    
    
    return (
        <View style={styles.userProfileScreen}>
            <Text style={styles.headerText}>UserProfileScreen</Text>
            <Button 
                title='Search for a card'
                onPress={addCardButtonHandler}
            />
            <Button 
                title='Add a card'
                onPress={searchButtonHandler}
            />
            <Text>List Of Your Cards</Text>
            <ScrollView nestedScrollEnabled={true}>

            </ScrollView>
        </View>
    );
}

export default UserProfileScreen;

const styles = StyleSheet.create({
    userProfileScreen: {
        padding: 20,
        flex: 1,
    },
    headerText: {
        fontSize: 24
    }
});