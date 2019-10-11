import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { getButtonStyle } from './Button/utils';

import {
  TEXT_ACTIVE_COLOR,
  TEXT_DISABLED_COLOR,
  PLACEMENT_LEFT,
  PLACEMENT_RIGHT,
  PLACEMENT_TOP,
  PLACEMENT_BOTTOM,
} from './constants';

import { getComponentName } from './utils';

import { Text } from './Text';

const styles = StyleSheet.create({
  normal: {
    marginHorizontal: 5,
    color: TEXT_ACTIVE_COLOR,
  },
  disabled: {
    marginHorizontal: 5,
    color: TEXT_DISABLED_COLOR,
  },
  containerLeft: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerTop: {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerBottom: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const ContainerPropTypes = {
  placement: PropTypes.oneOf([PLACEMENT_LEFT, PLACEMENT_RIGHT, PLACEMENT_TOP, PLACEMENT_BOTTOM]),
  contentContainerStyle: PropTypes.any,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node,
  onPress: PropTypes.func,
  onLabelPress: PropTypes.func,
  onLongPress: PropTypes.func,
  onLabelLongPress: PropTypes.func,
};

const ContainerDefaultProps = {
  placement: PLACEMENT_RIGHT,
  contentContainerStyle: null,
  disabled: false,
  label: '',
  children: undefined,
  onPress: undefined,
  onLabelPress: undefined,
  onLongPress: undefined,
  onLabelLongPress: undefined,
};

const getPlacementStyle = (placement) => {
  switch (placement) {
    case PLACEMENT_RIGHT:
      return styles.containerRight;
    case PLACEMENT_TOP:
      return styles.containerTop;
    case PLACEMENT_BOTTOM:
      return styles.containerBottom;
  }

  return styles.containerLeft;
};

const withLabel = (Component, defaultLabelStyle, displayName = '') => {
  const Container = ({
    contentContainerStyle,
    placement,
    disabled,
    label,
    children,
    onPress,
    onLabelPress,
    onLongPress,
    onLabelLongPress,
    ...props
  }) => {
    let labelNode = null;

    if (label) {
      let labelStyle = getButtonStyle(styles, disabled);

      if (defaultLabelStyle) {
        labelStyle = [labelStyle, defaultLabelStyle];
      }

      labelNode = (
        <Text
          style={labelStyle}
          onPress={onLabelPress || onPress}
          onLongPress={onLabelLongPress || onLongPress}
        >
          {label}
        </Text>
      );
    }

    return (
      <View style={[getPlacementStyle(placement), contentContainerStyle]}>
        <Component {...props} disabled={disabled} onPress={onPress} onLongPress={onLongPress} />
        {labelNode}
        {children}
      </View>
    );
  };

  Container.propTypes = {
    ...Component.propTypes,
    ...ContainerPropTypes,
  };
  Container.defaultProps = {
    ...Component.defaultProps,
    ...ContainerDefaultProps,
  };

  Container.displayName = displayName || `withLabel(${getComponentName(Component)})`;

  return Container;
};

export default withLabel;
