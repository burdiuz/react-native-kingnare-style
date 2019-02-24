import React from 'react';
import { View } from 'react-native';

import { withStyles } from '../withStyle';
import Area from '../Area/Area';
import BaseModal, { separateModalProps } from '../BaseModal';

import { modalStyles } from './styles';

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
    areaStyle: modalStyles.blocking,
    style: modalStyles.container,
    contentContainerStyle: modalStyles.content,
  },
  'BlockingModal',
);

export default withStyles(
  Modal,
  {
    areaStyle: modalStyles.nonblocking,
    style: modalStyles.container,
    contentContainerStyle: modalStyles.content,
  },
  'Modal',
);
