import React from 'react';
import { View } from 'react-native';

import withStyle from '@actualwave/react-native-with-style';

import styles from './styles';

const createHRuleView = (ruleStyle) => {
  const HRuleView = (props) => (
    <View {...props}>
      <View style={ruleStyle} />
    </View>
  );

  HRuleView.displayName = 'HRuleView';

  return HRuleView;
};

const HRule = withStyle(createHRuleView(styles.hRule), styles.hContainer, 'HRule');

// HRule with inverted colors
export const HIRule = withStyle(createHRuleView(styles.hiRule), styles.hContainer, 'HIRule');

export default HRule;
