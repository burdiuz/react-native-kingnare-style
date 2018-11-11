import React from 'react';
import { View } from 'react-native';

import withStyle from '../withStyle';
import styles from './styles';

const HRule = (props) => (
  <View {...props}>
    <View style={styles.hRule} />
  </View>
);

export default withStyle(HRule, styles.hContainer, 'HRule');
