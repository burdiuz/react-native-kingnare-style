import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import {
  LIGHT_BORDER_COLOR,
  DARK_BORDER_COLOR,
  ACTIVE_BACKGROUND_COLOR,
  BLOCKING_ZINDEX,
  BLOCKING_COLOR,
} from './constants';

import withStyle, { withStyles } from './withStyle';

const styles = StyleSheet.create({
  active: {
    borderRadius: 2,
    borderWidth: 2,
    borderColor: DARK_BORDER_COLOR,
    backgroundColor: ACTIVE_BACKGROUND_COLOR,
  },
  area: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: LIGHT_BORDER_COLOR,
  },
  areaInternal: {
    flex: 1,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: DARK_BORDER_COLOR,
  },
  blocking: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: DARK_BORDER_COLOR,
    backgroundColor: BLOCKING_COLOR,
    zIndex: BLOCKING_ZINDEX,
  },
  scrollContent: {
    borderRadius: 2,
    borderWidth: 2,
    borderBottomWidth: 10,
    borderColor: DARK_BORDER_COLOR,
  },
});

export const ActiveArea = withStyle(View, styles.active);

const Area = ({ children, contentContainerStyle, ...props }) => (
  <View {...props}>
    <View style={contentContainerStyle}>{children}</View>
  </View>
);

export const BlockingArea = withStyle(View, styles.blocking);

export const ScrollArea = withStyles(ScrollView, {
  style: styles.area,
  contentContainerStyle: styles.scrollContent,
});

export default withStyles(Area, {
  style: styles.area,
  contentContainerStyle: styles.areaInternal,
});
