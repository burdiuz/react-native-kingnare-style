import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LIGHT_BORDER_COLOR } from '../constants';
import withStyle from '../withStyle';
import { ArrowRightIcon, ArrowRightActiveIcon } from '../assets/ArrowRightIcon';
import { DropDownIcon, DropDownActiveIcon } from '../assets/DropDownIcon';
import { SlimHeaderText } from './SlimHeader';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_BORDER_COLOR,
    marginBottom: 10,
  },
  icon: { width: 18, height: 18, margin: 7 },
  text: { flexShrink: 0, flexGrow: 1, textAlign: 'left' },
});

const SectionHeaderView = ({ expanded, active, style, text, children }) => {
  let Icon;

  if (active) {
    Icon = expanded ? DropDownActiveIcon : ArrowRightActiveIcon;
  } else {
    Icon = expanded ? DropDownIcon : ArrowRightIcon;
  }

  return (
    <View style={style}>
      <Icon style={styles.icon} />
      <SlimHeaderText style={styles.text}>{text}</SlimHeaderText>
      {children}
    </View>
  );
};

export default withStyle(SectionHeaderView, styles.container, 'SectionHeader');
