import React, { useState } from 'react';
import PropTypes from 'prop-types';
import callIfFunction from '@actualwave/call-if-function';

import SectionButton from '../Button/SectionButton';

const Section = (props) => {
  const {
    label,
    style,
    iconStyle,
    labelStyle,
    labelContainerStyle,
    expanded: initialExpanded,
    locked,
    onExpanded,
    onCollapsed,
    children,
    headerChildren,
    ...buttonProps
  } = props;
  const [expanded, setExpanded] = useState(initialExpanded);

  return (
    <>
      <SectionButton
        {...buttonProps}
        style={style}
        label={label}
        iconStyle={iconStyle}
        labelStyle={labelStyle}
        labelContainerStyle={labelContainerStyle}
        expanded={expanded}
        disabled={locked}
        onPress={() => {
          setExpanded(!expanded);

          if (expanded) {
            onCollapsed && onCollapsed();
          } else {
            onExpanded && onExpanded();
          }
        }}
      >
        {callIfFunction(headerChildren, props)}
      </SectionButton>
      {expanded ? callIfFunction(children, props) : null}
    </>
  );
};

export default Section;
