import React from 'react';
import { Image } from 'react-native';

export const DropDownIcon = (props) => (
  <Image {...props} source={require('./dropdown.png')} />
);

export const DropDownActiveIcon = (props) => (
  <Image {...props} source={require('./dropdown_active.png')} />
);

export const DropDownDisabledIcon = (props) => (
  <Image {...props} source={require('./dropdown_disabled.png')} />
);
