import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import getComponentName from '@actualwave/react-component-name';

import { ERROR_COLOR } from '../constants';

import Small from '../Text/Small';

const ErrorMessage = ({ message, occupySpace }) => {
  if (!occupySpace && !message) {
    return null;
  }

  return <Small style={styles.errorMessage}>{message || ''}</Small>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
  occupySpace: PropTypes.bool,
};

ErrorMessage.defaultProps = {
  message: '',
  occupySpace: true,
};

const styles = StyleSheet.create({
  errorMessage: {
    color: ERROR_COLOR,
    fontStyle: 'italic',
  },
});

export const withErrorMessage = (Component) => {
  const Wrapper = ({ errorMessage, ...props }) => (
    <>
      <Component {...props} />
      <ErrorMessage message={errorMessage} />
    </>
  );

  Wrapper.displayName = displayName || `withErrorMessage(${getComponentName(Component)})`;

  return Wrapper;
};

export default ErrorMessage;
