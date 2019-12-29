import React from 'react';
import PropTypes from 'prop-types';
import withStyle from '@actualwave/react-native-with-style';

import Text from '../Text/Text';
import withHeaderContainer from './withHeaderContainer';

import styles from './styles';

export const SlimHeaderText = withStyle(Text, styles.slim, 'SlimHeaderText');

export default withHeaderContainer(SlimHeaderText, 'SlimHeader');
