import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

function searchScreen() {
    const [enteredSearchInput, setEnteredSearchInput] = useState('');

    function searchInputHandler(enteredText) {
        setEnteredSearchInput(enteredText);
    }

    function searchButtonHandler() {
        
    }
    
    return (
        <View style={styles.searchScreen}>
            <Text style={styles.headerText}>Search Screen</Text>
            <Text>Filter TCG Dropdown</Text>
            <Text>(Add filters that depend on which TCG you picked???)</Text>
            <TextInput 
                placeholder='Search'
                onChangeText={searchInputHandler}
                value={enteredSearchInput}    
            />
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