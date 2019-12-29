import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withStyles } from '@actualwave/react-native-with-style';

import { LIGHT_BORDER_COLOR } from '../constants';
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
  text: { flex: 1, textAlign: 'left' },
});

const SectionHeaderView = ({
  expanded,
  active,
  style,
  iconStyle,
  textStyle,
  text,
  children,
  ...props
}) => {
  let Icon;

  if (active) {
    Icon = expanded ? DropDownActiveIcon : ArrowRightActiveIcon;
  } else {
    Icon = expanded ? DropDownIcon : ArrowRightIcon;
  }

  return (
    <View style={style}>
      <Icon style={iconStyle} />
      <SlimHeaderText style={textStyle} {...props}>
        {text}
      </SlimHeaderText>
      {children}
    </View>
  );
};

export default withStyles(
  SectionHeaderView,
  {
    style: styles.container,
    iconStyle: styles.icon,
    textStyle: styles.text,
  },
  'SectionHeader',
);
