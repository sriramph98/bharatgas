import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Create a new stack navigator
const Stack = createStackNavigator();

// Screen component for the initial screen
const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button
        title="Go to Next Screen"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

// Screen component for the next screen
const Register = () => {
  return (
    <View style={styles.container}>
      {/* Contents of the next screen */}
    </View>
  );
};

// App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;