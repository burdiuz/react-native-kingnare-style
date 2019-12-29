import React from 'react';
import { View } from 'react-native';

import withStyle from '@actualwave/react-native-with-style';

import styles from './styles';

const HBRule = (props) => (
  <View {...props}>
    <View style={styles.hbRule} />
  </View>
);

export default withStyle(HBRule, styles.hContainer, 'HBRule');
