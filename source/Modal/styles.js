import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const PADDING = 5;
export const MAX_SIZE = Math.min(width, height) - PADDING * 2;
export const MIN_WIDTH = MAX_SIZE * 0.75;
export const MIN_HEIGHT = MAX_SIZE * 0.5;

const areaStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  padding: PADDING,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export const modalStyles = StyleSheet.create({
  blocking: {
    ...areaStyle,
    backgroundColor: 0x00000099,
  },
  nonblocking: {
    ...areaStyle,
    backgroundColor: 'transparent',
  },
  container: {
    maxWidth: MAX_SIZE,
    maxHeight: MAX_SIZE,
    minWidth: MIN_WIDTH,
    minHeight: MIN_HEIGHT,
  },
  content: {
    flex: 1,
    padding: 5,
  },
});

export const alertStyles = StyleSheet.create({
  title: { margin: 5 },
  contentGroup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    alignSelf: 'stretch',
  },
  hRule: { alignSelf: 'stretch' },
  bottomGroup: {
    alignSelf: 'stretch',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
