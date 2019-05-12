import { StyleSheet } from 'react-native';

import { ELEMENT_MIN_SIZE } from '../constants';
import { GROUP_PADDING } from '../Form/Group';

export const selectStyles = StyleSheet.create({
  touchableWrapper: {
    alignItems: 'stretch',
    minWidth: ELEMENT_MIN_SIZE * 3,
    height: ELEMENT_MIN_SIZE,
    backgroundColor: 0xff0000ff,
  },
  touchable: {
    alignItems: 'stretch',
    minWidth: ELEMENT_MIN_SIZE * 3,
    height: ELEMENT_MIN_SIZE,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  area: {
    flex: 1,
  },
  areaContent: {
    paddingLeft: 2,
  },
  list: {
    flex: 1,
    alignSelf: 'stretch',
  },
  listItem: {
    alignItems: 'stretch',
    padding: 4,
  },
  listItemSelectedLabel: {
    textDecorationLine: 'none',
  },
});

export const tabBarStyles = StyleSheet.create({
  top: {
    position: 'relative',
    paddingTop: GROUP_PADDING,
    paddingBottom: 0,
    height: ELEMENT_MIN_SIZE + 10,
  },
  topRule: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomRule: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});
