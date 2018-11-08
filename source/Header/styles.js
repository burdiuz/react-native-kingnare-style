import { StyleSheet } from 'react-native';

import { TEXT_ACTIVE_COLOR } from '../constants';

const HEADER_COLOR = TEXT_ACTIVE_COLOR;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  super: {
    color: TEXT_ACTIVE_COLOR,
    lineHeight: 28,
    fontSize: 26,
  },
  big: {
    color: TEXT_ACTIVE_COLOR,
    lineHeight: 26,
    fontSize: 24,
  },
  header: {
    color: TEXT_ACTIVE_COLOR,
    fontSize: 22,
  },
  small: {
    color: TEXT_ACTIVE_COLOR,
    fontSize: 20,
  },
  slim: {
    color: TEXT_ACTIVE_COLOR,
    fontSize: 18,
  },
});
