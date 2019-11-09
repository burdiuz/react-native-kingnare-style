import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { getComponentName } from '../utils';

import InputLabel from './InputLabel';
import ErrorMessage from './ErrorMessage';
import { withErrorBorder } from './withBorderColor';

const InputPlaceholder = ({ label, errorMessage, children, keepErrorMessageSpace, ...props }) => (
  <View {...props}>
    <InputLabel label={label} />
    {children}
    {errorMessage || keepErrorMessageSpace ? <ErrorMessage message={errorMessage} /> : null}
  </View>
);

InputPlaceholder.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
  keepErrorMessageSpace: PropTypes.bool,
};

InputPlaceholder.defaultProps = {
  errorMessage: '',
  keepErrorMessageSpace: true,
};

const hasErrorBorder = ({ errorMessage }) => !!errorMessage;

export const withInputPlaceholder = (Component, displayName = '') => {
  const ComponentWithBorder = withErrorBorder(Component, hasErrorBorder);

  const Wrapper = ({
    label,
    errorMessage,
    keepErrorMessageSpace,
    style,
    contentContainerStyle,
    children,
    ...props
  }) => (
    <InputPlaceholder
      label={label}
      errorMessage={errorMessage}
      keepErrorMessageSpace={keepErrorMessageSpace}
      style={contentContainerStyle}
    >
      {children}
      <ComponentWithBorder errorMessage={errorMessage} style={style} {...props} />
    </InputPlaceholder>
  );

  Wrapper.displayName = displayName || `withInputPlaceholder(${getComponentName(Component)})`;

  return Wrapper;
};

export default InputPlaceholder;
