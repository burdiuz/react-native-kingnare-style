import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SectionButton from '../Button/SectionButton';

const Section = ({
  label,
  style,
  labelContainerStyle,
  expanded: initialExpanded,
  locked,
  onExpanded,
  onCollapsed,
  children,
  headerChildren,
  ...props,
}) => {
  const [expanded, setExpanded] = useState(initialExpanded);

  return (
    <>
      <SectionButton
        {...props}
        style={style}
        label={label}
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
        {headerChildren}
      </SectionButton>
      {expanded ? children : null}
    </>
  );
};

export default Section;
