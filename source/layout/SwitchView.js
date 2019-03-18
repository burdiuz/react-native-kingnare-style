import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { callIfFunction } from '../utils';

export const SwitchView = ({ index, children, emptyRenderer }) => {
  if (children instanceof Array) {
    return callIfFunction(children[index]) || emptyRenderer();
  }

  if (children && index === 0) {
    return callIfFunction(children);
  }

  return emptyRenderer();
};

SwitchView.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  emptyRenderer: PropTypes.func,
};

SwitchView.defaultProps = {
  emptyRenderer: () => null,
};

export default SwitchView;
