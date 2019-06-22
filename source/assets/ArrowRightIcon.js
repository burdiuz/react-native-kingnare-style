import React from 'react';
import { Image } from 'react-native';

export const ArrowRightIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/arrowright.png')} />
);

export const ArrowRightActiveIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/arrowright_active.png')} />
);

export const ArrowRightDisabledIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/arrowright_disabled.png')} />
);
