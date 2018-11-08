import React from 'react';
import PropTypes from 'prop-types';

import withStyle from '../withStyle';
import Text from './Text';

import styles from './styles';

const Small = withStyle(Text, styles.small);

export default Small;
