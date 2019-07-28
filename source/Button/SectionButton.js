import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

import SectionHeader from '../Header/SectionHeader';

import { BUTTON_HIGHLIGHT_COLOR } from './styles';

const SectionButton = ({ label, children, expanded, disabled, style, ...props }) => {
  return (
    <TouchableHighlight
      {...props}
      style={style}
      disabled={disabled}
      underlayColor={BUTTON_HIGHLIGHT_COLOR}
    >
      <SectionHeader text={label} expanded={expanded} active={!disabled}>
        {children}
      </SectionHeader>
    </TouchableHighlight>
  );
};

export default SectionButton;
