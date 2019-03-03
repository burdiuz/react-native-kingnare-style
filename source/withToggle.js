import React from 'react';

import { getComponentName } from './utils';

const withToggle = (Component, toggleFn, displayName) => {
  const Wrapper = (props) => (toggleFn(props) ? <Component {...props} /> : null);

  Wrapper.displayName = displayName || `withToggle(${getComponentName(Component)})`;

  return Wrapper;
};

export default withToggle;
