import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { withStyles } from '../withStyle';
import Area from '../Area/Area';
import BaseModal, { separateModalProps } from '../BaseModal';

const { width } = Dimensions.get('window');
const PADDING = 20;
const MAX_SIZE = width - PADDING * 2;
const MIN_WIDTH = MAX_SIZE * 0.75;
const MIN_HEIGHT = MAX_SIZE * 0.5;

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

const styles = StyleSheet.create({
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

const crateModal = (ContainerComponent = Area) => ({
  areaStyle,
  onCloseOutside,
  onRequestClose,
  ...allProps
}) => {
  const { modalProps, props } = separateModalProps(allProps);

  return (
    <BaseModal
      {...modalProps}
      onPress={onCloseOutside}
      onRequestClose={onRequestClose}
    >
      <View style={areaStyle}>
        <ContainerComponent {...props} />
      </View>
    </BaseModal>
  );
};

const Modal = crateModal();

export const BlockingModal = withStyles(
  Modal,
  {
    areaStyle: styles.blocking,
    style: styles.container,
    contentContainerStyle: styles.content,
  },
  'BlockingModal',
);

export default withStyles(
  Modal,
  {
    areaStyle: styles.nonblocking,
    style: styles.container,
    contentContainerStyle: styles.content,
  },
  'Modal',
);
