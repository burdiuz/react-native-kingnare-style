import { StyleSheet } from 'react-native';

import { BACKGROUND_COLOR } from '../constants';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  blocking: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: BACKGROUND_COLOR,
  },
  scroll: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  scrollContent: {},
});
