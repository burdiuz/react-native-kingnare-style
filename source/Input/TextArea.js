import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { withStyles } from '@actualwave/react-native-with-style';

import { ELEMENT_MIN_SIZE } from '../constants';

import TextInput from './TextInput';

const areaStyles = StyleSheet.create({
  style: { height: ELEMENT_MIN_SIZE * 3 },
  inputStyle: { textAlignVertical: 'top' },
});

const TextArea = (props) => <TextInput {...props} multiline />;

export default withStyles(TextArea, areaStyles, 'TextArea');
