import { View, StyleSheet } from 'react-native';

import withStyle from '../withStyle';

export const GROUP_PADDING = 10;

const paddings = {
  paddingLeft: GROUP_PADDING,
  paddingRight: GROUP_PADDING,
  paddingBottom: GROUP_PADDING,
  /*
  borderWidth: 1,
  borderColor: 0x00ff00ff,
  */
};

const styles = StyleSheet.create({
  vgroup: {
    ...paddings,
  },
  hgroup: {
    ...paddings,
    flexDirection: 'row',
  },
  rgroup: {
    ...paddings,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export const VGroup = withStyle(View, styles.vgroup, 'VGroup');

export const HGroup = withStyle(View, styles.hgroup, 'HGroup');

export const RGroup = withStyle(View, styles.rgroup, 'RGroup');
