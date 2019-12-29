import React from 'react';
import { Image } from 'react-native';

export const ArrowLeftIcon = (props) => (
  <Image {...props} source={require('./arrowleft.png')} />
);

export const ArrowLeftActiveIcon = (props) => (
  <Image {...props} source={require('./arrowleft_active.png')} />
);

export const ArrowLeftDisabledIcon = (props) => (
  <Image {...props} source={require('./arrowleft_disabled.png')} />
);
