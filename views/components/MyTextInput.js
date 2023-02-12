import React, { useContext, useEffect, useRef } from 'react';
import { Keyboard, TextInput } from 'react-native';
import { globalEvent } from '..';
import setRef from '../utils/setRef';

export default React.forwardRef(function MyTextInput(props, ref) {
  const { autoDismissKeyboard = true, ...rest } = props || {};

  const inputEl = useRef(null);
  const { addGlobalEvent } = useContext(globalEvent);

  useEffect(() => {
    addGlobalEvent({
      name: 'press',
      cb() {
        autoDismissKeyboard && inputEl.current?.blur();
      },
    });
  }, []);

  return <TextInput ref={setRef(inputEl, ref)} {...rest}></TextInput>;
});
