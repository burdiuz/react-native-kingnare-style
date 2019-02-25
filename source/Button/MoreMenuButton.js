import React from 'react';

import { MoreIcon, MoreSelectedIcon, MoreDisabledIcon } from '../assets/MoreIcon';
import { BmpIconButton } from './IconButton';
import { iconButton } from './styles';

const {
  defaultProps: { iconRenderer: defaultBmpIconRenderer },
} = BmpIconButton;

const moreIconRenderer = (props) => {
  const Icon = defaultBmpIconRenderer(props);

  return <Icon style={iconButton.icon} />;
};

const MoreMenuButton = (props) => (
  <BmpIconButton
    iconRenderer={moreIconRenderer}
    icon={MoreIcon}
    selectedIcon={MoreSelectedIcon}
    disabledIcon={MoreDisabledIcon}
    {...props}
  />
);

export default MoreMenuButton;
