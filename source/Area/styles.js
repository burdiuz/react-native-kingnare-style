import { StyleSheet } from 'react-native';

import {
  LIGHT_BORDER_COLOR,
  DARK_BORDER_COLOR,
  BACKGROUND_COLOR,
  ACTIVE_BACKGROUND_COLOR,
  BLOCKING_ZINDEX,
  BLOCKING_COLOR,
} from '../constants';

export default StyleSheet.create({
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
    borderRadius: 2,
    borderWidth: 2,
    borderColor: DARK_BORDER_COLOR,
    backgroundColor: BACKGROUND_COLOR,
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
  scroll: {
    borderRadius: 2,
    borderWidth: 1,
    padding: 2,
    borderColor: LIGHT_BORDER_COLOR,
    backgroundColor: 0x000000ff,
  },
  scrollContent: {
    borderRadius: 2,
    backgroundColor: BACKGROUND_COLOR,
  },
});
