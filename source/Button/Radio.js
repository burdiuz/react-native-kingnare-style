import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';

import { getButtonStyle } from './utils';

import withLabel from '../withLabel';

import {
  radioStyles,
  radioOuterStyles,
  radioInnerStyles,
  BUTTON_HIGHLIGHT_COLOR,
  BUTTON_SELECTED_HIGHLIGHT_COLOR,
} from './styles';

export const RadioButton = ({ selected, disabled, style, ...props }) => {
  const highlightColor = selected ? BUTTON_SELECTED_HIGHLIGHT_COLOR : BUTTON_HIGHLIGHT_COLOR;

  return (
    <TouchableHighlight
      {...props}
      style={[radioStyles.highlight, style]}
      disabled={disabled}
      underlayColor={highlightColor}
    >
      <View style={[radioStyles.outerCircle, getButtonStyle(radioOuterStyles, disabled, selected)]}>
        <View
          style={[radioStyles.innerCircle, getButtonStyle(radioInnerStyles, disabled, selected)]}
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

export const Radio = withLabel(RadioButton, radioStyles.label, 'Radio');
