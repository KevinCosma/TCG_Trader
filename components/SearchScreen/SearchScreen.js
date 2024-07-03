import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';

function searchScreen() {
    return (
        <View style={styles.searchScreen}>
            <Text style={styles.headerText}>Search Screen</Text>
            <Text>Filter TCG Dropdown</Text>
            <Text>(Add filters that depend on which TCG you picked???)</Text>
            <TextInput placeholder='Search'/>
      </View>
    );
    
}

export default searchScreen;

const styles = StyleSheet.create({
    searchScreen: {
        padding: 20,
      },
});