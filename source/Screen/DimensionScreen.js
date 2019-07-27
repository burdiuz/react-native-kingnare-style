import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import { styles } from '../layout/ConstraintView';
import withConstraintView from '../layout/withConstraintView';
import Layout from '../layout/Layout';

import Screen from './Screen';

export const DimensionScreen = withConstraintView(
  styles.dimension,
  Layout,
  Screen,
  'DimensionScreen',
);

export const DimensionScrollScreen = withConstraintView(
  styles.dimension,
  ScrollView,
  Screen,
  'DimensionScrollScreen',
);

export default DimensionScreen;
