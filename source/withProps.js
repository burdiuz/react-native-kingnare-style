import React from 'react';

import { getComponentName, callIfFunction } from './utils';

const withProps = (Component, augmentProps, displayName = '') => {
  const Wrapper = (props) => <Component {...props} {...callIfFunction(augmentProps, props)} />;

  Wrapper.displayName = displayName || `withProps(${getComponentName(Component)})`;

  Wrapper.propTypes = Component.propTypes;
  Wrapper.defaultProps = Component.defaultProps;

  return Wrapper;
};

export default withProps;
