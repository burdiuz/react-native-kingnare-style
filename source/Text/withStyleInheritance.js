import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import getComponentName from '@actualwave/react-component-name';

const WrapperPropTypes = {
  style: PropTypes.any,
  inheritStyle: PropTypes.bool,
};

const WrapperDefaultProps = {
  style: undefined,
  inheritStyle: false,
};

const withStyleInheritance = (Component, defaultStyle, displayName = '') => {
  const Wrapper = ({ style: propStyle, inheritStyle, ...props }) => {
    const style = useMemo(() => (inheritStyle ? propStyle : [defaultStyle, propStyle]), [
      propStyle,
      inheritStyle,
    ]);

    return <Component {...props} style={style} />;
  };

  Wrapper.propTypes = {
    ...Component.propTypes,
    ...WrapperPropTypes,
  };
  Wrapper.defaultProps = {
    ...Component.defaultProps,
    ...WrapperDefaultProps,
  };

  Wrapper.displayName = displayName || `withStyleInheritance(${getComponentName(Component)})`;

  return Wrapper;
};

export default withStyleInheritance;
