import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import {
  TEXT_COLOR,
  TEXT_ACTIVE_COLOR,
  TEXT_DISABLED_COLOR,
} from '../constants';

import { getButtonStyle } from './utils';

import { Text } from '../Text';

import Button from './Button';

const TextButton = ({ text, textStyle, selected, disabled, ...props }) => (
  <Button {...props} selected={selected} disabled={disabled}>
    <Text
      style={[
        styles.base,
        getButtonStyle(styles, disabled, selected),
        textStyle,
      ]}
    >
      {text}
    </Text>
  </Button>
);

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
};

TextButton.defaultProps = {};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 6,
  },
  normal: {
    color: TEXT_COLOR,
  },
  disabled: {
    color: TEXT_DISABLED_COLOR,
  },
  selected: {
    color: TEXT_ACTIVE_COLOR,
  },
  selectedDisabled: {
    color: TEXT_DISABLED_COLOR,
  },
});

export default TextButton;
