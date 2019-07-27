import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';

import { getButtonStyle } from './utils';

import withLabel from '../withLabel';

import {
  checkBoxStyles,
  checkBoxOuterStyles,
  checkBoxInnerStyles,
  BUTTON_HIGHLIGHT_COLOR,
  BUTTON_SELECTED_HIGHLIGHT_COLOR,
} from './styles';

import { CheckIcon, CheckDisabledIcon } from '../assets/CheckIcon';

export const CheckBoxButtonView = ({ selected, disabled }) => {
  let icon = null;

  if (selected) {
    const Icon = disabled ? CheckDisabledIcon : CheckIcon;
    icon = <Icon style={checkBoxStyles.icon} />;
  }

  return (
    <View style={[checkBoxStyles.outerCircle, getButtonStyle(checkBoxOuterStyles, disabled)]}>
      <View style={[checkBoxStyles.innerCircle, getButtonStyle(checkBoxInnerStyles, disabled)]} />
      {icon}
    </View>
  );
};

export const CheckBoxButton = ({ selected, disabled, style, ...props }) => {
  const highlightColor = selected ? BUTTON_SELECTED_HIGHLIGHT_COLOR : BUTTON_HIGHLIGHT_COLOR;

  return (
    <TouchableHighlight
      {...props}
      style={[checkBoxStyles.highlight, style]}
      disabled={disabled}
      underlayColor={highlightColor}
    >
      <CheckBoxButtonView selected={selected} disabled={disabled} />
    </TouchableHighlight>
  );
};

CheckBoxButton.propTypes = {
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
};

CheckBoxButton.defaultProps = {
  disabled: false,
  selected: false,
};

export const CheckBox = withLabel(CheckBoxButton, null, 'CheckBox');
