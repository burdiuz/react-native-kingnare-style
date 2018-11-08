import React from 'react';
import PropTypes from 'prop-types';

import withStyle from '../withStyle';
import Text from './Text';

import styles from './styles';

const Italic = withStyle(Text, styles.italic);

export default Italic;
