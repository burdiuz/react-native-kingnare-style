import React from 'react';

import { DropDownIcon, DropDownSelectedIcon, DropDownDisabledIcon } from '../assets/DropDownIcon';
import { BmpIconButton } from './IconButton';
import { iconButton } from './styles';

const {
  defaultProps: { iconRenderer: defaultBmpIconRenderer },
} = BmpIconButton;

const dropDownIconRenderer = (props) => {
  const Icon = defaultBmpIconRenderer(props);

  return <Icon style={iconButton.icon} />;
};

const DropDownButton = (props) => (
  <BmpIconButton
    iconRenderer={dropDownIconRenderer}
    icon={DropDownIcon}
    selectedIcon={DropDownSelectedIcon}
    disabledIcon={DropDownDisabledIcon}
    {...props}
  />
);

export default DropDownButton;
