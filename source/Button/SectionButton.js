import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

import SectionHeader from '../Header/SectionHeader';

import { BUTTON_HIGHLIGHT_COLOR } from './styles';

const SectionButton = ({
  label,
  labelContainerStyle,
  children,
  expanded,
  disabled,
  style,
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
  ...props
}) => (
  <TouchableHighlight
    {...props}
    style={style}
    disabled={disabled}
    underlayColor={BUTTON_HIGHLIGHT_COLOR}
  >
    <SectionHeader
      text={label}
      expanded={expanded}
      active={!disabled}
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
      style={labelContainerStyle}
    >
      {children}
    </SectionHeader>
  </TouchableHighlight>
);

export default SectionButton;
