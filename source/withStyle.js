import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { getComponentName, callIfFunction } from './utils';

const WrapperPropTypes = {
  style: PropTypes.any,
};

const WrapperDefaultProps = {
  style: undefined,
};

const withStyle = (Component, baseStyleParam, displayName = '') => {
  const Wrapper = (props) => {
    const { style } = props;
    const baseStyle = callIfFunction(baseStyleParam, props);
    const computedStyle = useMemo(() => (style ? [baseStyle, style] : baseStyle), [style]);

    return <Component {...props} style={computedStyle} />;
  };

  Wrapper.propTypes = {
    ...WrapperPropTypes,
    ...Component.propTypes,
  };

  Wrapper.defaultProps = {
    ...WrapperDefaultProps,
    ...Component.defaultProps,
  };

  Wrapper.displayName = displayName || `withStyle(${getComponentName(Component)})`;

  return Wrapper;
};

export const withStyles = (Component, styles = {}, displayName = '') => {
  const styleKeys = Object.keys(styles);

  const Wrapper = (props) => {
    const combinedStyles = useMemo(() => {
      const styleProps = {};

      styleKeys.forEach((key) => {
        const defaultStyle = callIfFunction(styles[key], props);

        const { [key]: style } = props;

        if (defaultStyle) {
          styleProps[key] = style ? [defaultStyle, style] : defaultStyle;
        }
      });

      return styleProps;
    }, styleKeys.map((name) => props[name]));

    return <Component {...props} {...combinedStyles} />;
  };

  Wrapper.propTypes = {
    ...WrapperPropTypes,
    ...Component.propTypes,
  };

  Wrapper.defaultProps = {
    ...WrapperDefaultProps,
    ...Component.defaultProps,
  };

  Wrapper.displayName = displayName || `withStyles(${getComponentName(Component)}, "${styleKeys.join('", "')}")`;

  return Wrapper;
};

export default withStyle;
