import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';
import { withStyles } from '@actualwave/react-native-with-style';

import {
  LIGHT_BORDER_COLOR,
  DARK_BORDER_COLOR,
  DISABLED_BORDER_COLOR,
  ACTIVE_BACKGROUND_COLOR,
  ELEMENT_MIN_SIZE,
  TEXT_COLOR,
  TEXT_ACTIVE_COLOR,
  TEXT_DISABLED_COLOR,
} from '../constants';

import { getButtonStyle } from '../Button/utils';

const styles = StyleSheet.create({
  container: {
    height: ELEMENT_MIN_SIZE,
    borderRadius: 2,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 5,
    textAlignVertical: 'center',
    borderRadius: 2,
    borderWidth: 1,
  },
});

const containerStyles = StyleSheet.create({
  normal: StyleSheet.flatten([
    styles.container,
    {
      borderColor: LIGHT_BORDER_COLOR,
    },
  ]),
  disabled: StyleSheet.flatten([
    styles.container,
    {
      borderColor: DISABLED_BORDER_COLOR,
    },
  ]),
});

const inputStyles = StyleSheet.create({
  normal: StyleSheet.flatten([
    styles.input,
    {
      color: TEXT_ACTIVE_COLOR,
      backgroundColor: ACTIVE_BACKGROUND_COLOR,
      borderColor: DARK_BORDER_COLOR,
    },
  ]),
  disabled: StyleSheet.flatten([
    styles.input,
    {
      color: TEXT_DISABLED_COLOR,
      backgroundColor: ACTIVE_BACKGROUND_COLOR,
      borderColor: DARK_BORDER_COLOR,
    },
  ]),
});

const TextInput = ({ style, disabled, editable, focusOnMount, inputStyle, ...props }) => {
  const ref = useRef();

  useEffect(() => {
    if (focusOnMount && ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <View style={style}>
      <RNTextInput
        ref={ref}
        underlineColorAndroid="transparent"
        placeholderTextColor={TEXT_COLOR}
        editable={!disabled && editable}
        disableFullscreenUI
        {...props}
        style={inputStyle}
      />
    </View>
  );
};

TextInput.propTypes = {
  style: PropTypes.any,
  inputStyle: PropTypes.any,
  disabled: PropTypes.bool,
  editable: PropTypes.bool,
  focusOnMount: PropTypes.bool,
};

TextInput.defaultProps = {
  style: undefined,
  inputStyle: undefined,
  disabled: false,
  editable: true,
  focusOnMount: false,
};

export default withStyles(
  TextInput,
  {
    style: ({ disabled }) => getButtonStyle(containerStyles, disabled),
    inputStyle: ({ disabled }) => getButtonStyle(inputStyles, disabled),
  },
  'TextInput',
);
