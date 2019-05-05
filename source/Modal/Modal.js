import React from 'react';
import { View } from 'react-native';

import { withStyles } from '../withStyle';
import Area from '../Area/Area';
import { createBaseModal, renderPassiveBlockingView, separateModalProps } from '../BaseModal';

import { modalStyles } from './styles';

const crateModal = (ContainerComponent = Area, renderBackground = undefined) => {
  const BaseModal = createBaseModal(renderBackground);

  return ({ areaStyle, onRequestClose, ...allProps }) => {
    const { modalProps, props } = separateModalProps(allProps);

    return (
      <BaseModal {...modalProps} onRequestClose={onRequestClose}>
        <View style={areaStyle}>
          <ContainerComponent {...props} />
        </View>
      </BaseModal>
    );
  };
};

export const BlockingModal = withStyles(
  crateModal(undefined, renderPassiveBlockingView),
  {
    areaStyle: modalStyles.blocking,
    style: modalStyles.container,
    contentContainerStyle: modalStyles.content,
  },
  'BlockingModal',
);

export default withStyles(
  crateModal(),
  {
    areaStyle: modalStyles.nonblocking,
    style: modalStyles.container,
    contentContainerStyle: modalStyles.content,
  },
  'Modal',
);
