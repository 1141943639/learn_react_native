import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Text, TextInput, TouchableHighlight, View } from 'react-native';
import MyTextInput from '../components/MyTextInput';

export default function Item(props) {
  const { value, index, onDel, onChange } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputEl = useRef(null);

  const handleDel = useCallback(() => {
    onDel(index);
  }, [onDel]);

  const handleEdit = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  const handleEditEnd = useCallback(() => {
    onChange(inputValue, index);
    setIsEdit(false);
  }, [onChange, inputValue]);

  const handleInput = useCallback((e) => {
    setInputValue(e.nativeEvent?.text);
  }, []);

  useEffect(() => {
    if (isEdit) {
      setTimeout(() => {
        inputEl.current?.focus();
      });
    }
  }, [isEdit]);

  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginBottom: 10,
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          // paddingVertical: 10,
          backgroundColor: '#999',
          borderRadius: 10,
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            height: 60,
          }}
        >
          {isEdit ? (
            <TextInput
              ref={inputEl}
              onChange={handleInput}
              onBlur={handleEditEnd}
              onSubmitEditing={handleEditEnd}
              defaultValue={value}
            ></TextInput>
          ) : (
            <Text>{value}</Text>
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View>
            <Button onPress={handleDel} title="Delete"></Button>
          </View>
          <View>
            <Button
              // onStartShouldSetResponderCapture={() => true}
              onPress={handleEdit}
              title="Edit"
            ></Button>
          </View>
        </View>
      </View>
    </View>
  );
}
