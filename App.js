import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Index from './views/index.js';
import { Provider } from 'react-redux';
import store from './views/store/index.js';
import { SafeAreaView } from 'react-native';

export default () => {
  return (
    // <SafeAreaView>
    <Provider store={store}>
      <Index></Index>
    </Provider>
    // </SafeAreaView>
  );
};
