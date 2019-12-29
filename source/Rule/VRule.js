import React from 'react';
import { View } from 'react-native';

import withStyle from '@actualwave/react-native-with-style';

import styles from './styles';

const createVRuleView = (ruleStyle) => {
  const VRuleView = (props) => (
    <View {...props}>
      <View style={ruleStyle} />
    </View>
  );

  VRuleView.displayName = 'VRuleView';

  return VRuleView;
};

const VRule = withStyle(createVRuleView(styles.vRule), styles.vContainer, 'VRule');

// VRule with inverted colors
export const VIRule = withStyle(createVRuleView(styles.viRule), styles.vContainer, 'VIRule');

export default VRule;
