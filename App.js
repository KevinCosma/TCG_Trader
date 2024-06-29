import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainScreen}>
        <Text>Main Screen</Text>
        <Text>Register</Text>
        <Text>Login</Text>
      </View>

      <View style={styles.loginScreen}>
        <Text>Login Screen</Text>
        <TextInput placeholder='Username'/>
        <TextInput placeholder='Password'/>
      </View>

      <View style={styles.registerScreen}>
        <Text>Register Screen</Text>
        <TextInput placeholder='First Name'/>
        <TextInput placeholder='Last Name'/>
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Username'/>
        <TextInput placeholder='Password'/>
        <TextInput placeholder='Confirm Password'/>
      </View>

      <View style={styles.userMainScreen}>
        <Text>UserMainScreen</Text>
        <Button title='Search for a card'/>
        <Button title='Add a card'/>
        <Text>List Of Your Cards</Text>
      </View>

      <View style={styles.addCardScreen}>
        <Text>Add Card Screen</Text>
        <Text>Choose Card Game</Text>
        <TextInput placeholder='Card Name'/>
        <Text>Choose Damage Level</Text>
        <TextInput placeholder='Price'/>
        <Text>(Anything else we should add???)</Text>
      </View>

      <View style={styles.searchScreen}>
        <Text>Search Screen</Text>
        <Text>Filter TCG Dropdown</Text>
        <Text>(Add filters that depend on which TCG you picked???)</Text>
        <TextInput placeholder='Search'/>
      </View>

      <View style={styles.discussion}>
        <Text>Message function?</Text>
        <Text>Anything else that I haven't thought of???</Text>
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

  mainScreen: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  loginScreen: {
    padding: 20
  },

  registerScreen: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  userMainScreen: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  addCardScreen: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  searchScreen: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  discussion: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
