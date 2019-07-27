import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions, StyleSheet } from 'react-native';

import withConstraintView from './withConstraintView';

export const styles = StyleSheet.create({
  dimension: {
    maxWidth: (() => {
      const { width, height } = Dimensions.get('screen');

      return Math.min(width, height);
    })(),
  },
});

const ConstraintView = withConstraintView(
  ({ maxWidth }) => ({ maxWidth }),
  View,
  View,
  'ConstraintView',
);

ConstraintView.propTypes = {
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export const DimensionView = withConstraintView(styles.dimension, View, View, 'DimensionView');

export default ConstraintView;
