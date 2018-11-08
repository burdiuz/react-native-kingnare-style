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
  checkBoxStyles,
  checkBoxOuterStyles,
  checkBoxInnerStyles,
  BUTTON_HIGHLIGHT_COLOR,
  BUTTON_SELECTED_HIGHLIGHT_COLOR,
} from './styles';

import Button from './Button';

import { CheckIcon, CheckDisabledIcon } from '../assets/CheckIcon';

export const CheckBoxButton = ({ selected, disabled, style, ...props }) => {
  let highlightColor = selected
    ? BUTTON_SELECTED_HIGHLIGHT_COLOR
    : BUTTON_HIGHLIGHT_COLOR;

  let icon = null;

  if (selected) {
    const Icon = disabled ? CheckDisabledIcon : CheckIcon;
    icon = <Icon style={checkBoxStyles.icon} />;
  }

  return (
    <TouchableHighlight
      {...props}
      style={[checkBoxStyles.highlight, style]}
      disabled={disabled}
      underlayColor={highlightColor}
    >
      <View
        style={[
          checkBoxStyles.outerCircle,
          getButtonStyle(checkBoxOuterStyles, disabled),
        ]}
      >
        <View
          style={[
            checkBoxStyles.innerCircle,
            getButtonStyle(checkBoxInnerStyles, disabled),
          ]}
        />
        {icon}
      </View>
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

export const CheckBox = withLabel(CheckBoxButton);
