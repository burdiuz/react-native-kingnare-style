import React from 'react';
import { View } from 'react-native';

import withStyle from '../withStyle';
import styles from './styles';

const HBRule = (props) => (
  <View {...props}>
    <View style={styles.hbRule} />
  </View>
);

export default withStyle(HBRule, styles.hContainer);
