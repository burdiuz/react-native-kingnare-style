import React from 'react';
import PropTypes from 'prop-types';

import withStyle from '../withStyle';
import Text from './Text';

import styles from './styles';

const Underline = withStyle(Text, styles.underline);

export default Underline;
