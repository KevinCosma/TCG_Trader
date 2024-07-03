import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';

function searchScreen() {
    return (
        <View style={styles.searchScreen}>
            <Text style={styles.headerText}>Search Screen</Text>
            <Text>Filter TCG Dropdown</Text>
            <Text>(Add filters that depend on which TCG you picked???)</Text>
            <TextInput placeholder='Search'/>
            <Button title='Search'/>
      </View>
    );
    
}

export default searchScreen;

const styles = StyleSheet.create({
    searchScreen: {
        padding: 20,
    },
    headerText: {
        fontSize: 24
    }
});