/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
  StatusBar,
  Animated,
  Button,
} from 'react-native';

const App = () => {
  const fadeIn = new Animated.Value(0);
  const tranY = new Animated.Value(0);

  const setFadeOut = () => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(setFadeIn);
  };

  const setFadeIn = () => {
    Animated.timing(fadeIn, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(setFadeOut);
  };

  const setMoveLine = () => {
    tranY.setValue(0);
    Animated.timing(tranY, {
      toValue: 200,
      duration: 500,
      useNativeDriver: true,
    }).start(setMoveLine);
  };

  // const setReverseLine = () => {
  //   Animated.timing(tranY, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start(setMoveLine);
  // };

  return (
    <View>
      <Animated.View style={[styles.view, {opacity: fadeIn}]}>
        <Text>FadeINininin</Text>
      </Animated.View>
      <Button title="FadeIN" onPress={setFadeOut} />

      <View style={[styles.view]}>
        <Animated.View
          style={[
            styles.line,
            {
              transform: [
                {
                  translateY: tranY,
                },
              ],
            },
          ]}
        />
      </View>
      <Button title="FadeIN" onPress={setMoveLine} />
    </View>
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
