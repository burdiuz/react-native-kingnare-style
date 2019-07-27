import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
});

const Spacer = () => <View style={styles.flex1} />;

export default Spacer;
