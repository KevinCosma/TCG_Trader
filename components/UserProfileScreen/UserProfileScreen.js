import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import React from 'react';

function userProfileScreen() {
    return (
        <View style={styles.userProfileScreen}>
            <Text style={styles.headerText}>UserProfileScreen</Text>
            <Button title='Search for a card'/>
            <Button title='Add a card'/>
            <Text>List Of Your Cards</Text>
            <ScrollView nestedScrollEnabled={true}>

            </ScrollView>
        </View>
    );
}

export default userProfileScreen;

const styles = StyleSheet.create({
    userProfileScreen: {
        padding: 20,
        flex: 1,
    },
    headerText: {
        fontSize: 24
    }
});