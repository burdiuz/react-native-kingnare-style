import React from 'react';
import { View, Modal, ScrollView, StyleSheet } from 'react-native';

import { BACKGROUND_COLOR } from './constants';
import withStyle, { withStyles } from './withStyle';

const styles = StyleSheet.create({
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
  },
  scrollContent: {
    backgroundColor: BACKGROUND_COLOR,
  },
});

const Screen = withStyle(View, styles.screen);

const BlockingModal = ({
  visible,
  supportedOrientations,
  onRequestClose,
  onShow,
  animationType,
  hardwareAccelerated,
  onDismiss,
  onOrientationChange,
  presentationStyle,
  animated,
  ...props
}) => {
  const modalProps = {
    visible,
    supportedOrientations,
    onRequestClose,
    onShow,
    animationType,
    hardwareAccelerated,
    onDismiss,
    onOrientationChange,
    presentationStyle,
    animated,
  };

  return (
    <Modal {...modalProps} transparent>
      <View {...props} />
    </Modal>
  );
};

export const BlockingScreen = withStyle(BlockingModal, styles.blocking);

export const ScrollScreen = withStyles(ScrollView, {
  style: styles.scroll,
  contentContainerStyle: styles.scrollContent,
});

export default Screen;
