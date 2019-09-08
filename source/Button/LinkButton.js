import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

import Text from '../Text/Text';

import { linkStyles, BUTTON_HIGHLIGHT_COLOR } from './styles';

import { getButtonStyle } from './utils';

const LinkButton = (props) => {
  const {
    disabled,
    label,
    labelStyle,
    numberOfLines,
    adjustsFontSizeToFit,
    allowFontScaling,
    ellipsizeMode,
    maxFontSizeMultiplier,
    minimumFontScale,
    selectable,
    selectionColor,
    suppressHighlighting,
    textBreakStrategy,
    style,
    children,
    ...highlightProps
  } = props;

  return (
    <TouchableHighlight
      {...highlightProps}
      style={[linkStyles.highlight, style]}
      underlayColor={BUTTON_HIGHLIGHT_COLOR}
      disabled={disabled}
    >
      <Text
        style={[getButtonStyle(linkStyles, disabled), labelStyle]}
        numberOfLines={numberOfLines}
        adjustsFontSizeToFit
        allowFontScaling={allowFontScaling}
        ellipsizeMode={ellipsizeMode}
        maxFontSizeMultiplier={maxFontSizeMultiplier}
        minimumFontScale={minimumFontScale}
        selectable={selectable}
        selectionColor={selectionColor}
        suppressHighlighting={suppressHighlighting}
        textBreakStrategy={textBreakStrategy}
      >
        {label}
      </Text>
    </TouchableHighlight>
  );
};

export default LinkButton;
