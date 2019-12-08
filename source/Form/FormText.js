import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';
import { withInputPlaceholder } from './InputPlaceholder';

const TextValue = ({ value }) => <Text>{value}</Text>;

const FormText = withInputPlaceholder(TextValue, 'FormText');

FormText.propTypes = {
  value: PropTypes.node,
};

FormText.defaultProps = {
  value: '',
};

export default FormText;
