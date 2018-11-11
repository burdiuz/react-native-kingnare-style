import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText, StyleSheet } from 'react-native';

import withStyleInheritance from './withStyleInheritance';

import styles from './styles';

const Text = (props) => <RNText {...props} />;

export default withStyleInheritance(Text, styles.text, 'Text');
