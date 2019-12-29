import React from 'react';
import PropTypes from 'prop-types';

import withStyle from '@actualwave/react-native-with-style';

import Text from './Text';

import styles from './styles';

export default withStyle(Text, styles.disabled, 'DisabledText');
