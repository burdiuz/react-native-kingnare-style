import React from 'react';
import PropTypes from 'prop-types';

import withStyle from '../withStyle';
import Text from './Text';

import styles from './styles';

const Strong = withStyle(Text, styles.strong);

export default Strong;
