import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.mainScreen}>
          <Text style={styles.headerText}>Main Screen</Text>
          <Button title='Login'/>
          <Button title='Register'/>
        </View>

        <View style={styles.loginScreen}>
          <Text style={styles.headerText}>Login Screen</Text>
          <TextInput placeholder='Username'/>
          <TextInput placeholder='Password'/>
        </View>

        <View style={styles.registerScreen}>
          <Text style={styles.headerText}>Register Screen</Text>
          <TextInput placeholder='First Name'/>
          <TextInput placeholder='Last Name'/>
          <TextInput placeholder='Email'/>
          <TextInput placeholder='Username'/>
          <TextInput placeholder='Password'/>
          <TextInput placeholder='Confirm Password'/>
        </View>

        <View style={styles.userMainScreen}>
          <Text style={styles.headerText}>UserMainScreen</Text>
          <Button title='Search for a card'/>
          <Button title='Add a card'/>
          <Text>List Of Your Cards</Text>
        </View>

        <View style={styles.addCardScreen}>
          <Text style={styles.headerText}>Add Card Screen</Text>
          <Text>Choose Card Game</Text>
          <TextInput placeholder='Card Name'/>
          <Text>Choose Damage Level</Text>
          <TextInput placeholder='Price'/>
          <Text>(Anything else we should add???)</Text>
        </View>

        <View style={styles.searchScreen}>
          <Text style={styles.headerText}>Search Screen</Text>
          <Text>Filter TCG Dropdown</Text>
          <Text>(Add filters that depend on which TCG you picked???)</Text>
          <TextInput placeholder='Search'/>
        </View>

        <View style={styles.discussion}>
          <Text style={styles.headerText}>Message function?</Text>
          <Text style={styles.headerText}>Anything else that I haven't thought of???</Text>
        </View>
      </ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainScreen: {
    padding: 20,
  },

  loginScreen: {
    padding: 20,
  },

  registerScreen: {
    padding: 20,
  },

  userMainScreen: {
    padding: 20,
    flex: 1,
  },

  addCardScreen: {
    padding: 20,
  },

  searchScreen: {
    padding: 20,
  },

  discussion: {
    padding: 20,
  },

  headerText: {
    fontSize: 24
  }
});
