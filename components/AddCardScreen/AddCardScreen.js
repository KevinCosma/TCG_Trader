import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';

function addCardScreen() {
    return (
        <View style={styles.addCardScreen}>
            <Text style={styles.headerText}>Add Card Screen</Text>
            <Text>Choose Card Game</Text>
            <TextInput placeholder='Card Name'/>
            <Text>Choose Damage Level</Text>
            <TextInput placeholder='Price'/>
            <Text>(Anything else we should add???)</Text>
            <Button title='Add Card' />
        </View>
    );
}

export default addCardScreen;

const styles = StyleSheet.create({
    addCardScreen: {
        padding: 20,
    },
    headerText: {
        fontSize: 24
    }
});