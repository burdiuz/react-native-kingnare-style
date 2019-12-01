import React, { useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { View, Keyboard } from 'react-native';

const Context = createContext();
const { Provider, Consumer } = Context;

export const KeyboardHeightProvider = (props) => {
  const [height, updateHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ({ endCoordinates: { height } }) =>
      updateHeight(height),
    );

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => updateHeight(0));

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return <Provider {...props} value={height} />;
};

export const withKeyboardHeight = (ContentComponent) => (props) => (
  <Consumer>{(value) => <ContentComponent {...props} keyboardHeight={value} />}</Consumer>
);

export const useKeyboardHeight = () => useContext(Context);
