import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import TodoList from './TodoList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerRight: () => (
            <Button title="header right" onPress={() => alert('this is header right')}></Button>
          ),
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          options={{
            title: 'Home',
          }}
          name="Home"
          component={Home}
        ></Stack.Screen>
        <Stack.Screen
          options={{ title: 'TodoList' }}
          name="TodoList"
          component={TodoList}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 200,
    width: 200,
    backgroundColor: 'black',
  },

  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'red',
  },
});

export default App;
