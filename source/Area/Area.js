import React from 'react';
import { View } from 'react-native';

import { withStyles } from '../withStyle';

import styles from './styles';

const Area = ({ children, contentContainerStyle, ...props }) => (
  <View {...props}>
    <View style={contentContainerStyle}>{children}</View>
  </View>
);

export default withStyles(Area, {
  style: styles.area,
  contentContainerStyle: styles.areaInternal,
}, 'Area');
