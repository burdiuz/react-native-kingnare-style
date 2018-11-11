import React from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';

export const separateModalProps = ({
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
}) => ({
  modalProps: {
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
  },
  props,
});

export const createBaseModal = (
  ContainerComponent = TouchableWithoutFeedback,
) => (allProps) => {
  const { modalProps, props } = separateModalProps(allProps);

  return (
    <Modal {...modalProps} transparent style={{ alignItems: 'center', justifyContent: 'center' }}>
      <ContainerComponent {...props} />
    </Modal>
  );
};

const BaseModal = createBaseModal();

export default BaseModal;
