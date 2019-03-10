import React from 'react';
import PropTypes from 'prop-types';

import { getComponentName, callIfFunction } from './utils';

const WrapperPropTypes = {
  style: PropTypes.any,
};

const WrapperDefaultProps = {
  style: undefined,
};

const withStyle = (Component, componentStyle, displayName = '') => {
  const Wrapper = (props) => (
    <Component
      {...props}
      style={props.style ? [componentStyle, props.style] : componentStyle}
    />
  );

  Wrapper.propTypes = WrapperPropTypes;
  Wrapper.defaultProps = WrapperDefaultProps;

  Wrapper.displayName = displayName || `withStyle(${getComponentName(Component)})`;

  return Wrapper;
};

export const withStyles = (Component, styles = {}, displayName = '') => {
  const styleKeys = Object.keys(styles);

  const Wrapper = (props) => {
    const styleProps = {};

    styleKeys.forEach((key) => {
      const defaultStyle = callIfFunction(styles[key], props);

      const { [key]: style } = props;

      if(defaultStyle) {
        styleProps[key] = style ? [defaultStyle, style] : defaultStyle;
      }
    });

    return <Component {...props} {...styleProps} />;
  };

  Wrapper.propTypes = WrapperPropTypes;
  Wrapper.defaultProps = WrapperDefaultProps;

  Wrapper.displayName =
    displayName || `withStyles(${getComponentName(Component)}, "${styleKeys.join('", "')}")`;

  return Wrapper;
};

export default withStyle;
