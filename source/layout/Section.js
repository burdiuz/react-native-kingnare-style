import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SectionButton from '../Button/SectionButton';

const Section = ({
  label,
  style,
  expanded: initialExpanded,
  locked,
  onExpanded,
  onCollapsed,
  children,
  headerChildren,
}) => {
  const [expanded, setExpanded] = useState(initialExpanded);

  return (
    <>
      <SectionButton
        style={style}
        label={label}
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
