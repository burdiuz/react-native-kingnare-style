import isFunction from '@actualwave/is-function';

import { getComponentName } from './utils';

const withProps = (Component, augmentProps, displayName = '') => {
  const Wrapper = (props) => {
    if(isFunction(augmentProps)) {
      return <Component {...augmentProps(props)} />;
    }

    return <Component {...props} {...augmentProps} />;
  };

  Wrapper.displayName = displayName || `withProps(${getComponentName(Component)})`;

  return Wrapper;
};

export const withPropsToggle = (Component, shouldAugment, augmentProps, displayName = '') => {
  const Augmented = withProps(Component, augmentProps);

  const Wrapper = (props) => {
    if(shouldAugment(props)) {
      return <Augmented {...props} />;
    }

    return <Component {...props} />;
  };

  Wrapper.displayName = displayName || `withPropsToggle(${getComponentName(Component)})`;

  return Wrapper;
};

export default withProps;
