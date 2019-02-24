import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import { iconButton } from './styles';

export const defaultIconRenderer = ({ icon }) => icon;

const IconButton = (props) => {
  const { style, iconRenderer } = props;
  return (
    <Button {...props} style={style ? [iconButton.button, style] : iconButton.button}>
      {iconRenderer(props)}
    </Button>
  );
};

IconButton.propTypes = {
  iconRenderer: PropTypes.func,
  icon: PropTypes.any,
};

IconButton.defaultProps = {
  iconRenderer: defaultIconRenderer,
  icon: null,
};

export const bmpIconRenderer = ({
  icon,
  selectedIcon,
  selectedDisabledIcon,
  disabledIcon,
  disabled,
  selected,
}) => {
  if (selected && disabled) {
    return selectedDisabledIcon;
  }

  if (selected) {
    return selectedIcon;
  }

  if (disabled) {
    return disabledIcon;
  }

  return icon;
};

export const BmpIconButton = (props) => <IconButton {...props} />;

BmpIconButton.propTypes = {
  iconRenderer: PropTypes.func,
  icon: PropTypes.any,
  selectedIcon: PropTypes.any,
  disabledIcon: PropTypes.any,
  selectedDisabledIcon: PropTypes.any,
};

BmpIconButton.defaultProps = {
  iconRenderer: bmpIconRenderer,
  icon: null,
  selectedIcon: null,
  disabledIcon: null,
  selectedDisabledIcon: null,
};

export default IconButton;
