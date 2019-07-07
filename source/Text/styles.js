import { StyleSheet } from 'react-native';

import { TEXT_COLOR, TEXT_ACTIVE_COLOR,TEXT_DISABLED_COLOR } from '../constants';

export default StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: TEXT_COLOR,
    /*
    borderWidth: 1,
    borderColor: '#f00',
    //*/
  },
  italic: {
    fontStyle: 'italic',
  },
  active: {
    color: TEXT_ACTIVE_COLOR,
  },
  disabled: {
    color: TEXT_DISABLED_COLOR,
  },
  strong: {
    fontWeight: '600',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  small: {
    fontSize: 12,
    textAlignVertical: 'bottom',
  },
  sub: {
    fontSize: 10,
    lineHeight: 10,
    marginBottom: -11,
  },
  sup: {
    fontSize: 10,
    lineHeight: 10,
    marginTop: -11,
  },
});
