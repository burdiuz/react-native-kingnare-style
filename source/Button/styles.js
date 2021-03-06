import { StyleSheet } from 'react-native';

import {
  DARK_BORDER_COLOR,
  LIGHT_BORDER_COLOR,
  DISABLED_BORDER_COLOR,
  ELEMENT_MIN_SIZE,
  ACTIVE_BACKGROUND_COLOR,
  TEXT_ACTIVE_COLOR,
  TEXT_DISABLED_COLOR,
  TEXT_COLOR,
} from '../constants';

export const BUTTON_COLOR = 0x505050ff;
export const BUTTON_DISABLED_COLOR = 0x3a3a3aff;
export const BUTTON_SELECTED_COLOR = 0x1a1a1aff;
export const BUTTON_SELECTED_DISABLED_COLOR = 0x232323ff;
export const BUTTON_HIGHLIGHT_COLOR = 0x666666ff;
export const BUTTON_SELECTED_HIGHLIGHT_COLOR = 0x5b5b5bff;

export const highlightStyles = StyleSheet.create({
  normal: {
    backgroundColor: BUTTON_COLOR,
    borderColor: LIGHT_BORDER_COLOR,
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: BUTTON_DISABLED_COLOR,
    borderColor: 0x5d5d5dff,
    borderWidth: 1,
  },
  selected: {
    backgroundColor: BUTTON_SELECTED_COLOR,
    borderColor: 0x515151ff,
    borderWidth: 1,
  },
  selectedDisabled: {
    backgroundColor: BUTTON_SELECTED_DISABLED_COLOR,
    borderColor: BUTTON_DISABLED_COLOR,
    borderWidth: 1,
  },
});

export const highlightContainerStyles = StyleSheet.create({
  normal: {
    flex: 1,
    borderWidth: 1,
    borderColor: DARK_BORDER_COLOR,
  },
  disabled: {
    flex: 1,
    borderWidth: 1,
    borderColor: 0x333333ff,
  },
  selected: {
    flex: 1,
    borderWidth: 1,
    borderColor: 0x1b1b1bff,
  },
  selectedDisabled: {
    flex: 1,
    borderWidth: 1,
    borderColor: 0x1b1b1bff,
  },
});

export const buttonStyles = StyleSheet.create({
  button: {
    flex: 0,
    height: ELEMENT_MIN_SIZE,
    borderRadius: 2,
  },
  buttonContainer: {
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const RADIO_EXT_DIAMETER = 20;
const RADIO_INT_DIAMETER = 14.2;

export const radioStyles = StyleSheet.create({
  highlight: {
    width: ELEMENT_MIN_SIZE,
    height: ELEMENT_MIN_SIZE,
    borderRadius: ELEMENT_MIN_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    flex: 0,
    width: RADIO_EXT_DIAMETER,
    height: RADIO_EXT_DIAMETER,
    borderRadius: RADIO_EXT_DIAMETER,
    margin: (ELEMENT_MIN_SIZE - RADIO_EXT_DIAMETER) / 2,
    borderWidth: 1,
  },
  innerCircle: {
    flex: 0,
    margin: 1.6,
    width: RADIO_INT_DIAMETER,
    height: RADIO_INT_DIAMETER,
    borderRadius: RADIO_INT_DIAMETER,
    borderWidth: 4,
  },
});

export const radioOuterStyles = StyleSheet.create({
  normal: {
    borderColor: LIGHT_BORDER_COLOR,
    backgroundColor: DARK_BORDER_COLOR,
  },
  disabled: {
    borderColor: DISABLED_BORDER_COLOR,
    backgroundColor: DISABLED_BORDER_COLOR,
  },
  selected: {
    borderColor: LIGHT_BORDER_COLOR,
    backgroundColor: DARK_BORDER_COLOR,
  },
  selectedDisabled: {
    borderColor: DISABLED_BORDER_COLOR,
    backgroundColor: DISABLED_BORDER_COLOR,
  },
});

export const radioInnerStyles = StyleSheet.create({
  normal: {
    borderColor: ACTIVE_BACKGROUND_COLOR,
    backgroundColor: 0x1d1d1dff,
  },
  disabled: {
    borderColor: ACTIVE_BACKGROUND_COLOR,
    backgroundColor: ACTIVE_BACKGROUND_COLOR,
  },
  selected: {
    borderColor: BUTTON_COLOR,
    backgroundColor: TEXT_ACTIVE_COLOR,
  },
  selectedDisabled: {
    borderColor: ACTIVE_BACKGROUND_COLOR,
    backgroundColor: TEXT_DISABLED_COLOR,
  },
});

const CHECKBOX_EXT_DIAMETER = 22;
const CHECKBOX_INT_DIAMETER = 16;
const CHECKBOX_BORDER_RADIUS = 2;

export const checkBoxStyles = StyleSheet.create({
  highlight: {
    width: ELEMENT_MIN_SIZE,
    height: ELEMENT_MIN_SIZE,
    borderRadius: CHECKBOX_BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    flex: 0,
    width: CHECKBOX_EXT_DIAMETER,
    height: CHECKBOX_EXT_DIAMETER,
    borderRadius: CHECKBOX_BORDER_RADIUS,
    margin: (ELEMENT_MIN_SIZE - CHECKBOX_EXT_DIAMETER) / 2,
    borderWidth: 1,
  },
  innerCircle: {
    flex: 0,
    left: 2,
    top: 2,
    width: CHECKBOX_INT_DIAMETER,
    height: CHECKBOX_INT_DIAMETER,
    borderRadius: CHECKBOX_BORDER_RADIUS,
  },
  icon: { width: 16, height: 16, left: 3, top: -14 },
});

export const checkBoxOuterStyles = StyleSheet.create({
  normal: {
    borderColor: LIGHT_BORDER_COLOR,
    backgroundColor: DARK_BORDER_COLOR,
  },
  disabled: {
    borderColor: DISABLED_BORDER_COLOR,
    backgroundColor: ACTIVE_BACKGROUND_COLOR,
  },
});

export const checkBoxInnerStyles = StyleSheet.create({
  normal: {
    backgroundColor: ACTIVE_BACKGROUND_COLOR,
  },
  disabled: {
    backgroundColor: ACTIVE_BACKGROUND_COLOR,
  },
});

export const linkStyles = StyleSheet.create({
  highlight: {
    borderRadius: 2,
    minHeight: ELEMENT_MIN_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normal: {
    margin: 2,
    color: TEXT_ACTIVE_COLOR,
    textDecorationLine: 'underline',
    textDecorationColor: TEXT_ACTIVE_COLOR,
  },
  disabled: {
    margin: 2,
    color: TEXT_DISABLED_COLOR,
    textDecorationLine: 'underline',
    textDecorationColor: TEXT_DISABLED_COLOR,
  },
});

export const iconButton = StyleSheet.create({
  icon: {
    width: ELEMENT_MIN_SIZE * 0.75,
    height: ELEMENT_MIN_SIZE * 0.75,
  },
  button: {
    width: ELEMENT_MIN_SIZE,
  },
});

export const tabStyles = StyleSheet.create({
  top: {
    borderRadius: 4,
    borderBottomWidth: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  topContent: {
    borderRadius: 4,
    borderBottomWidth: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  bottom: {
    borderRadius: 4,
    borderTopWidth: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  bottomContent: {
    borderRadius: 4,
    borderTopWidth: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
});
