import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, StyleSheet } from 'react-native';

import {
  TEXT_COLOR,
  TEXT_ACTIVE_COLOR,
  TEXT_DISABLED_COLOR,
  DARK_BORDER_COLOR,
  LIGHT_BORDER_COLOR,
  ELEMENT_MIN_SIZE,
} from '../constants';

import { getButtonStyle } from './utils';

import withLabel from '../withLabel';

import {
  radioStyles,
  radioOuterStyles,
  radioInnerStyles,
  BUTTON_HIGHLIGHT_COLOR,
  BUTTON_SELECTED_HIGHLIGHT_COLOR,
} from './styles';

import Button from './Button';

export const RadioButton = ({ selected, disabled, style, ...props }) => {
  let highlightColor = selected
    ? BUTTON_SELECTED_HIGHLIGHT_COLOR
    : BUTTON_HIGHLIGHT_COLOR;

  return (
    <TouchableHighlight
      {...props}
      style={[radioStyles.highlight, style]}
      disabled={disabled}
      underlayColor={highlightColor}
    >
      <View
        style={[
          radioStyles.outerCircle,
          getButtonStyle(radioOuterStyles, disabled, selected),
        ]}
      >
        <View
          style={[
            radioStyles.innerCircle,
            getButtonStyle(radioInnerStyles, disabled, selected),
          ]}
        />
      </View>
    </TouchableHighlight>
  );
};

RadioButton.propTypes = {
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
};

RadioButton.defaultProps = {
  disabled: false,
  selected: false,
};

export const Radio = withLabel(RadioButton);
