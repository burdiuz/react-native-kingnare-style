import React from 'react';
import PropTypes from 'prop-types';

import { getComponentName } from '../utils';

const WrapperPropTypes = {
  style: PropTypes.any,
  inheritStyle: PropTypes.bool,
};

const WrapperDefaultProps = {
  style: undefined,
  inheritStyle: false,
};

const withStyleInheritance = (Component, defaultStyle, displayName = '') => {
  const Wrapper = ({ style, inheritStyle, ...props }) => (
    <Component
      {...props}
      style={inheritStyle ? style : [defaultStyle, style]}
    />
  );

  Wrapper.propTypes = WrapperPropTypes;
  Wrapper.defaultProps = WrapperDefaultProps;

  Wrapper.displayName = displayName || `withStyleInheritance(${getComponentName(Component)})`;

  return Wrapper;
};

export default withStyleInheritance;
