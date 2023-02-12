import React from 'react';
import { Button, View } from 'react-native';

export default function Home({ navigation, route }) {
  console.log(route.params);

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Button title="go to TodoList" onPress={() => navigation.navigate('TodoList')}></Button>
    </View>
  );
}
