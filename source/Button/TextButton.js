import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import { TEXT_COLOR, TEXT_ACTIVE_COLOR, TEXT_DISABLED_COLOR } from '../constants';

import { getButtonStyle } from './utils';

import { Text } from '../Text';

import Button from './Button';

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

const TextButton = ({ label, labelStyle, selected, disabled, ...props }) => (
  <Button {...props} selected={selected} disabled={disabled}>
    <Text style={[styles.base, getButtonStyle(styles, disabled, selected), labelStyle]}>
      {label}
    </Text>
  </Button>
);

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.any,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
};

TextButton.defaultProps = {
  labelStyle: undefined,
  selected: false,
  disabled: false,
};

export default TextButton;
