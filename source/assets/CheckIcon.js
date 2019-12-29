import React from 'react';
import { Image } from 'react-native';

export const CheckIcon = (props) => (
  <Image {...props} source={require('./check.png')} />
);

export const CheckActiveIcon = (props) => (
  <Image {...props} source={require('./check_active.png')} />
);

export const CheckDisabledIcon = (props) => (
  <Image {...props} source={require('./check_disabled.png')} />
);
