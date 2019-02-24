import React from 'react';
import { Image } from 'react-native';

export const DropDownIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/dropdown.png')} />
);

export const DropDownActiveIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/dropdown_active.png')} />
);

export const DropDownDisabledIcon = (props) => (
  <Image {...props} source={require('react-native-kingnare-style-assets/dropdown_disabled.png')} />
);
