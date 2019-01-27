import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { getComponentName } from '../utils';

import InputLabel from './InputLabel';
import ErrorMessage from './ErrorMessage';
import { withErrorBorder } from './withBorderColor';

const InputPlaceholder = ({ label, errorMessage, children, ...props }) => (
  <View {...props}>
    <InputLabel label={label} />
    {children}
    <ErrorMessage message={errorMessage} />
  </View>
);

InputPlaceholder.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
};

InputPlaceholder.defaultProps = {
  errorMessage: '',
};

const hasErrorBorder = ({ errorMessage }) => !!errorMessage;

export const withInputPlaceholder = (Component, displayName = '') => {
  const ComponentWithBorder = withErrorBorder(Component, hasErrorBorder);

  const Wrapper = ({label, errorMessage, ...props}) => (
    <InputPlaceholder label={label} errorMessage={errorMessage}>
      <ComponentWithBorder errorMessage={errorMessage} {...props} />
    </InputPlaceholder>
  );

  Wrapper.displayName = displayName || `withInputPlaceholder(${getComponentName(Component)})`;

  return Wrapper;
};

export default InputPlaceholder;
