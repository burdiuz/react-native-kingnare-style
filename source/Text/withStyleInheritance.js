import React from 'react';
import PropTypes from 'prop-types';

const WrapperPropTypes = {
  style: PropTypes.any,
  inheritStyle: PropTypes.bool,
};

const WrapperDefaultProps = {
  style: undefined,
  inheritStyle: false,
};

const withStyleInheritance = (Component, defaultStyle) => {
  const Wrapper = ({ style, inheritStyle, ...props }) => (
    <Component
      {...props}
      style={inheritStyle ? style : [defaultStyle, style]}
    />
  );

  Wrapper.propTypes = WrapperPropTypes;
  Wrapper.defaultProps = WrapperDefaultProps;

  Wrapper.displayName = `withStyleInheritance(${Component.name})`;

  return Wrapper;
};

export default withStyleInheritance;
