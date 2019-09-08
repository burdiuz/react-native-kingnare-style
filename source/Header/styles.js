import { StyleSheet } from 'react-native';

import { TEXT_ACTIVE_COLOR } from '../constants';

const HEADER_COLOR = TEXT_ACTIVE_COLOR;

const PADDING = 10;

const container = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export default StyleSheet.create({
  containerNoSpace: container,
  containerTopSpace: {
    ...container,
    paddingTop: PADDING,
  },
  containerBottomSpace: {
    ...container,
    paddingBottom: PADDING,
  },
  containerVerticalSpace: {
    ...container,
    paddingVertical: PADDING,
  },
  super: {
    color: TEXT_ACTIVE_COLOR,
    lineHeight: 28,
    fontSize: 26,
    textAlign: 'center',
  },
  big: {
    color: TEXT_ACTIVE_COLOR,
    lineHeight: 26,
    fontSize: 24,
    textAlign: 'center',
  },
  header: {
    color: TEXT_ACTIVE_COLOR,
    fontSize: 22,
    textAlign: 'center',
  },
  small: {
    color: TEXT_ACTIVE_COLOR,
    fontSize: 20,
    textAlign: 'center',
  },
  slim: {
    color: TEXT_ACTIVE_COLOR,
    fontSize: 18,
    textAlign: 'center',
  },
});
