import React from 'react';
import isFunction from '@actualwave/is-function';

import { getComponentName } from './utils';

const withProps = (Component, augmentProps, displayName = '') => {
  const Wrapper = (props) => {
    if (isFunction(augmentProps)) {
      return <Component {...augmentProps(props)} />;
    }

    return <Component {...props} {...augmentProps} />;
  };

  Wrapper.displayName = displayName || `withProps(${getComponentName(Component)})`;

  return Wrapper;
};

export default withProps;
