import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import { ELEMENT_MIN_SIZE } from './constants';
import { withStyles } from './withStyle';

import TextInput from './TextInput';

const areaStyles = StyleSheet.create({
  style: { height: ELEMENT_MIN_SIZE * 3 },
  inputStyle: { textAlignVertical: 'top' },
});

const TextArea = (props) => <TextInput {...props} multiline={true} />;

export default withStyles(TextArea, areaStyles);
