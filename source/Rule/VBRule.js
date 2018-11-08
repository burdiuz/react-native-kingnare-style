import React from 'react';
import { View } from 'react-native';

import withStyle from '../withStyle';
import styles from './styles';

const VBRule = (props) => (
  <View {...props}>
    <View style={styles.vbRule} />
  </View>
);

export default withStyle(VBRule, styles.vContainer);
