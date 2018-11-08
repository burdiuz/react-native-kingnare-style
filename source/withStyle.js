import React from 'react';
import PropTypes from 'prop-types';
import isFunction from '@actualwave/is-function';

const WrapperPropTypes = {
  style: PropTypes.any,
};

const WrapperDefaultProps = {
  style: undefined,
};

const withStyle = (Component, componentStyle) => {
  const Wrapper = (props) => (
    <Component
      {...props}
      style={props.style ? [componentStyle, props.style] : componentStyle}
    />
  );

  Wrapper.propTypes = WrapperPropTypes;
  Wrapper.defaultProps = WrapperDefaultProps;

  Wrapper.displayName = `withStyle(${Component.name})`;

  return Wrapper;
};

export const withStyles = (Component, styles = {}) => {
  const styleKeys = Object.keys(styles);

  const Wrapper = (props) => {
    const styleProps = {};

    styleKeys.forEach((key) => {
      let defaultStyle;
      const value = styles[key];

      if (isFunction(value)) {
        defaultStyle = value(props);
      } else {
        defaultStyle = value;
      }

      const { [key]: style } = props;

      styleProps[key] = style ? [defaultStyle, style] : defaultStyle;
    });

    return <Component {...props} {...styleProps} />;
  };

  Wrapper.propTypes = WrapperPropTypes;
  Wrapper.defaultProps = WrapperDefaultProps;

  Wrapper.displayName = `withStyles(${Component.name}, "${styleKeys.join('", "')}")`;

  return Wrapper;
};

export default withStyle;
