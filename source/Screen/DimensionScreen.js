import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import { styles } from '../layout/ConstraintView';
import withConstraintView from '../layout/withConstraintView';

import Screen from './Screen';

export const DimensionScreen = withConstraintView(
  styles.dimension,
  View,
  Screen,
  'DimensionScreen',
);

const RerouteScrollViewStyle = ({ scrollStyle, ...props }) => (
  <ScrollView {...props} contentContainerStyle={scrollStyle} />
);

export const DimensionScrollScreen = withConstraintView(
  styles.dimension,
  RerouteScrollViewStyle,
  Screen,
  'DimensionScrollScreen',
);

export default DimensionScreen;
