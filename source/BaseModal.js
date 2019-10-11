import React from 'react';
import { Modal, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modal: { position: 'relative', alignItems: 'center', justifyContent: 'center' },
  touchable: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 0xff00ffff,
  },
  blocking: { width: '100%', height: '100%', backgroundColor: 0x00000033 },
});

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

export const BlockingView = (props) => (
  <TouchableWithoutFeedback style={styles.blocking} {...props}>
    <View style={styles.blocking} />
  </TouchableWithoutFeedback>
);

export const renderPassiveBlockingView = () => <BlockingView />;

export const renderActiveBlockingView = ({ onRequestClose }) => (
  <BlockingView onPress={onRequestClose} />
);

export const createBaseModal = (renderBackground = () => null) => {
  const ModalWrapper = (allProps) => {
    const {
      modalProps,
      props: { children },
    } = separateModalProps(allProps);

    return (
      <Modal {...modalProps} transparent style={styles.modal}>
        {renderBackground(allProps)}
        {children}
      </Modal>
    );
  };

  ModalWrapper.propTypes = Modal.propTypes;
  ModalWrapper.defaultProps = Modal.defaultProps;

  return ModalWrapper;
};

const BaseModal = createBaseModal();

export default BaseModal;
