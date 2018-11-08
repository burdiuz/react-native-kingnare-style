import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, StyleSheet } from 'react-native';

import { getButtonStyle } from './utils';

import {
  highlightStyles,
  highlightContainerStyles,
  buttonStyles,
  BUTTON_HIGHLIGHT_COLOR,
  BUTTON_SELECTED_HIGHLIGHT_COLOR,
} from './styles';

export const makeHighlightComponent = (
  styles,
  contentContainerStyles,
  highlightColor,
) => (props) => {
  const { disabled, style, contentContainerStyle, children } = props;
  return (
    <TouchableHighlight
      {...props}
      style={[getButtonStyle(highlightStyles, disabled), style]}
      underlayColor={highlightColor}
    >
      <View
        style={[
          getButtonStyle(highlightContainerStyles, disabled),
          contentContainerStyle,
        ]}
      >
        {children}
      </View>
    </TouchableHighlight>
  );
};

export const ButtonHighlight = makeHighlightComponent(
  highlightStyles,
  highlightContainerStyles,
  BUTTON_HIGHLIGHT_COLOR,
);

const Button = (props) => {
  const {
    selected,
    disabled,
    style,
    contentContainerStyle,
    children,
    ...highlightProps
  } = props;

  let highlightColor = selected
    ? BUTTON_SELECTED_HIGHLIGHT_COLOR
    : BUTTON_HIGHLIGHT_COLOR;

  return (
    <TouchableHighlight
      {...highlightProps}
      style={[
        getButtonStyle(highlightStyles, disabled, selected),
        buttonStyles.button,
        style,
      ]}
      disabled={disabled}
      underlayColor={highlightColor}
    >
      <View
        style={[
          getButtonStyle(highlightContainerStyles, disabled, selected),
          buttonStyles.buttonContainer,
          contentContainerStyle,
        ]}
      >
        {children}
      </View>
    </TouchableHighlight>
  );
};

export default Button;
