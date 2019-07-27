import { View, StyleSheet } from 'react-native';

import { withStyles } from '../withStyle';

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

const noHorizontalPaddings = {
  paddingBottom: GROUP_PADDING,
};

const hGroup = {
  flexDirection: 'row',
  alignItems: 'center',
};

const rGroup = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const sbGroup = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const saGroup = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
};

const styles = StyleSheet.create({
  vgroup: {
    ...paddings,
  },
  vgroupNoHorizontalPadding: {
    ...noHorizontalPaddings,
  },
  vgroupNoPadding: {},
  hgroup: {
    ...paddings,
    ...hGroup,
  },
  hgroupNoHorizontalPadding: {
    ...noHorizontalPaddings,
    ...hGroup,
  },
  hgroupNoPadding: {
    ...hGroup,
  },
  rgroup: {
    ...paddings,
    ...rGroup,
  },
  rgroupNoHorizontalPadding: {
    ...noHorizontalPaddings,
    ...rGroup,
  },
  rgroupNoPadding: {
    ...rGroup,
  },
  sbgroup: {
    ...paddings,
    ...sbGroup,
  },
  sbgroupNoHorizontalPadding: {
    ...noHorizontalPaddings,
    ...sbGroup,
  },
  sbgroupNoPadding: {
    ...sbGroup,
  },
  sagroup: {
    ...paddings,
    ...saGroup,
  },
  sagroupNoHorizontalPadding: {
    ...noHorizontalPaddings,
    ...saGroup,
  },
  sagroupNoPadding: {
    ...saGroup,
  },
});

const getStyle = (normal, hPadding, padding) => ({ noPadding, noHorizontalPadding }) => {
  if (noPadding) {
    return padding;
  }

  if (noHorizontalPadding) {
    return hPadding;
  }

  return normal;
};

export const VGroup = withStyles(
  View,
  {
    style: getStyle(styles.vgroup, styles.vgroupNoHorizontalPadding, styles.vgroupNoPadding),
  },
  'VGroup',
);

export const HGroup = withStyles(
  View,
  {
    style: getStyle(styles.hgroup, styles.hgroupNoHorizontalPadding, styles.hgroupNoPadding),
  },
  'HGroup',
);

export const RGroup = withStyles(
  View,
  {
    style: getStyle(styles.rgroup, styles.rgroupNoHorizontalPadding, styles.rgroupNoPadding),
  },
  'RGroup',
);

export const SBGroup = withStyles(
  View,
  {
    style: getStyle(styles.sbgroup, styles.sbgroupNoHorizontalPadding, styles.sbgroupNoPadding),
  },
  'RGroup',
);

export const SAGroup = withStyles(
  View,
  {
    style: getStyle(styles.sagroup, styles.sagroupNoHorizontalPadding, styles.sagroupNoPadding),
  },
  'RGroup',
);
