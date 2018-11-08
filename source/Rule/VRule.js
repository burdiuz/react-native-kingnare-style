import React from 'react';
import { View } from 'react-native';

import withStyle from '../withStyle';
import styles from './styles';

const VRule = (props) => (
  <View {...props}>
    <View style={styles.vRule} />
  </View>
);

export default withStyle(VRule, styles.vContainer);
