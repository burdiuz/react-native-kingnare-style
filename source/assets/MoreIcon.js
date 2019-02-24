import React from 'react';
import { Image } from 'react-native';

export const MoreIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/more.png')} />
);

export const MoreActiveIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/more_active.png')} />
);

export const MoreDisabledIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/more_disabled.png')} />
);
