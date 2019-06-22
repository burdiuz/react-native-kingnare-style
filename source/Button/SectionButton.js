import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

import SectionHeader from '../Header/SectionHeader';

import { BUTTON_HIGHLIGHT_COLOR } from './styles';

const SectionButton = ({
  style,
  label,
  children,
  expanded,
  disabled,
  highlightStyle,
  ...props
}) => {
  return (
    <TouchableHighlight
      {...props}
      style={highlightStyle}
      disabled={disabled}
      underlayColor={BUTTON_HIGHLIGHT_COLOR}
    >
      <SectionHeader style={style} text={label} expanded={expanded} active={!disabled}>
        {children}
      </SectionHeader>
    </TouchableHighlight>
  );
};

export default SectionButton;
