import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import MyTextInput from '../components/MyTextInput';
import Item from './Item';

export default function TodoList({ navigation }) {
  const [list, setList] = useState(Array.from({ length: 20 }).map(() => '124'));

  const inputEl = useRef(null);

  const handleKeyPress = useCallback(
    (e) => {
      const value = e.nativeEvent.text;

      if (!value) return;

      setList([...list, value]);
      inputEl.current?.clear?.();
    },
    [list]
  );

  const handleDel = useCallback(
    (index) => {
      const listCopy = [...list];

      listCopy.splice(index, 1);

      setList(listCopy);
    },
    [list, setList]
  );

  const handleItemChange = useCallback(
    (value, index) => {
      const listCopy = [...list];
      value ? listCopy.splice(index, 1, value) : listCopy.splice(index, 1);

      setList(listCopy);
    },
    [list]
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <Button
        title="goBack"
        onPress={() =>
          navigation.navigate('Home', {
            test: 'id',
          })
        }
      ></Button>
      <View
        style={{
          width: '100%',
          backgroundColor: '#fff',
        }}
      >
        <TextInput
          style={{
            color: '#000',
          }}
          blurOnSubmit={false}
          autoDismissKeyboard={false}
          ref={inputEl}
          onSubmitEditing={handleKeyPress}
        ></TextInput>
      </View>
      <View
        style={{
          flex: 1,
          paddingVertical: 10,
        }}
      >
        <FlatList
          keyboardShouldPersistTaps="handled"
          data={list}
          renderItem={({ item, index }) => (
            <Item
              value={item}
              key={index}
              onDel={handleDel}
              index={index}
              onChange={handleItemChange}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
}
