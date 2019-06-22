import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';

import Screen from './Screen';
import { separateModalProps } from '../BaseModal';

const ModalScreen = (allProps) => {
  const { modalProps, props } = separateModalProps(allProps);

  return (
    <Modal {...modalProps} transparent>
      <Screen {...props} />
    </Modal>
  );
};

export default ModalScreen;