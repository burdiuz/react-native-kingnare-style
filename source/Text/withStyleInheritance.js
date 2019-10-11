import React, { useMemo } from 'react';
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
<<<<<<< HEAD
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
=======
  const Wrapper = ({ style, inheritStyle, ...props }) => (
    <Component
      {...props}
      style={inheritStyle ? style : [defaultStyle, style]}
    />
  );

  Wrapper.propTypes = WrapperPropTypes;
  Wrapper.defaultProps = WrapperDefaultProps;
>>>>>>> 5df1ba0f96e7243d65c7d15f799005cacfcf596e

  Wrapper.displayName = displayName || `withStyleInheritance(${getComponentName(Component)})`;

  return Wrapper;
};

export default withStyleInheritance;
