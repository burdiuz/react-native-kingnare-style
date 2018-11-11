import React from 'react';
import PropTypes from 'prop-types';

import withStyle from '../withStyle';
import Text from './Text';

import styles from './styles';

export default withStyle(Text, styles.strong, 'Strong');
