import React from 'react';
import { Image } from 'react-native';

export const ArrowRightIcon = (props) => (
  <Image {...props} source={require('./arrowright.png')} />
);

export const ArrowRightActiveIcon = (props) => (
  <Image {...props} source={require('./arrowright_active.png')} />
);

export const ArrowRightDisabledIcon = (props) => (
  <Image {...props} source={require('./arrowright_disabled.png')} />
);
