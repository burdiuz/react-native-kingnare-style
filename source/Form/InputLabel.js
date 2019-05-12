import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import { TEXT_ACTIVE_COLOR } from '../constants';
import { getComponentName } from '../utils';
import withStyle from '../withStyle';

import Text from '../Text/Text';

const styles = StyleSheet.create({
  inputLabel: {
    color: TEXT_ACTIVE_COLOR,
  },
});

const InputLabel = withStyle(
  ({ label, style }) => <Text style={style}>{label}</Text>,
  styles.inputLabel,
  'InputLabel',
);

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

InputLabel.defaultProps = {};

const propTypes = {
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.any,
};

const defaultProps = {
  labelStyle: undefined,
};

export const withInputLabel = (Component, displayName = '') => {
  const Wrapper = ({ label, labelStyle, ...props }) => (
    <>
      <InputLabel label={label} style={labelStyle} />
      <Component {...props} />
    </>
  );

  Wrapper.displayName = displayName || `withInputLabel(${getComponentName(Component)})`;
  Wrapper.propTypes = propTypes;
  Wrapper.defaultProps = defaultProps;

  return Wrapper;
};

export default InputLabel;
