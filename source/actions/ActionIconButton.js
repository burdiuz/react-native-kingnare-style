import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

import { IconButton } from '../Button';
import { ActionPropType, getAction, getActionType, renderIconFromAction } from './actions';
import withActionButton from './withActionButton';

const ActionIconButton = withActionButton(IconButton, {
  iconRenderer: ({ action, iconSize, iconStyle }) => {
    return renderIconFromAction(action, iconSize, iconStyle);
  },
});

ActionIconButton.propTypes = {
  ...ActionIconButton.propTypes,
  iconSize: PropTypes.number,
  iconStyle: PropTypes.any,
};

ActionIconButton.defaultProps = {
  ...ActionIconButton.defaultProps,
  iconSize: 20,
  iconStyle: undefined,
};

export default ActionIconButton;
