import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export const defaultIconRenderer = ({ icon }) => icon;

const IconButton = (props) => {
  const { iconRenderer } = props;
  return <Button {...props}>{iconRenderer(props)}</Button>;
};

IconButton.propTypes = {
  iconRenderer: PropTypes.func,
  icon: PropTypes.any,
};

IconButton.defaultProps = {
  iconRenderer: defaultIconRenderer,
  icon: null,
};

export default IconButton;
