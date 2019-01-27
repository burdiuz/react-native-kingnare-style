import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { TEXT_ACTIVE_COLOR } from '../constants';

import { getComponentName } from '../utils';

import Text from '../Text/Text';

const InputLabel = ({ label }) => <Text style={styles.inputLabel}>{label}</Text>;

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

InputLabel.defaultProps = {};

const styles = StyleSheet.create({
  inputLabel: {
    color: TEXT_ACTIVE_COLOR,
  },
});

export const withInputLabel = (Component, displayName = '') => {
  const Wrapper = ({label, ...props}) => (
    <>
      <InputLabel label={label} />
      <Component {...props} />
    </>
  );

  Wrapper.displayName = displayName || `withLabel(${getComponentName(Component)})`;

  return Wrapper;
};

export default InputLabel;
