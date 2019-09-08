import { StyleSheet } from 'react-native';

import {
  LIGHT_BORDER_COLOR,
  DARK_BORDER_COLOR,
  DISABLED_BORDER_COLOR,
  ACTIVE_BACKGROUND_COLOR,
} from '../constants';

export default StyleSheet.create({
  hContainer: { alignItems: 'stretch', justifyContent: 'center' },
  hRule: {
    height: 1,
    borderTopWidth: 1,
    borderTopColor: LIGHT_BORDER_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: DARK_BORDER_COLOR,
  },
  hiRule: {
    height: 1,
    borderTopWidth: 1,
    borderTopColor: DARK_BORDER_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_BORDER_COLOR,
  },
  hbRule: {
    height: 4,
    backgroundColor: ACTIVE_BACKGROUND_COLOR,
    borderTopWidth: 1,
    borderTopColor: DISABLED_BORDER_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: DISABLED_BORDER_COLOR,
  },
  vContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  vRule: {
    width: 2,
    borderLeftWidth: 1,
    borderLeftColor: LIGHT_BORDER_COLOR,
    borderRightWidth: 1,
    borderRightColor: DARK_BORDER_COLOR,
  },
  viRule: {
    width: 2,
    borderLeftWidth: 1,
    borderLeftColor: DARK_BORDER_COLOR,
    borderRightWidth: 1,
    borderRightColor: LIGHT_BORDER_COLOR,
  },
  vbRule: {
    width: 4,
    backgroundColor: ACTIVE_BACKGROUND_COLOR,
    borderLeftWidth: 1,
    borderLeftColor: DISABLED_BORDER_COLOR,
    borderRightWidth: 1,
    borderRightColor: DISABLED_BORDER_COLOR,
  },
});
