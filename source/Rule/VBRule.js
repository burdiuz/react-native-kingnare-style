import React from 'react';
import { View } from 'react-native';

import withStyle from '@actualwave/react-native-with-style';

import styles from './styles';

const VBRule = (props) => (
  <View {...props}>
    <View style={styles.vbRule} />
  </View>
);

export default withStyle(VBRule, styles.vContainer, 'VBRule');
