import React from 'react';
import { Image } from 'react-native';

export const CheckIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/check.png')} />
);

export const CheckActiveIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/check_active.png')} />
);

export const CheckDisabledIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/check_disabled.png')} />
);
