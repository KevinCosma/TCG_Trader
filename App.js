import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainMenuScreen}>
        <Text style={styles.headerText}>Main Screen</Text>
        <Button title='Login'/>
        <Button title='Register'/>
      </View>

      <View style={styles.discussion}>
        <Text style={styles.headerText}>Message function?</Text>
        <Text style={styles.headerText}>Anything else that I haven't thought of???</Text>
      </View>
        
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

  mainMenuScreen: {
    padding: 20,
  },
  discussion: {
    padding: 20,
  },
  headerText: {
    fontSize: 24
  }
});
