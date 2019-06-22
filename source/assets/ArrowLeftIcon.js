import React from 'react';
import { Image } from 'react-native';

export const ArrowLeftIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/arrowleft.png')} />
);

export const ArrowLeftActiveIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/arrowleft_active.png')} />
);

export const ArrowLeftDisabledIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/arrowleft_disabled.png')} />
);
