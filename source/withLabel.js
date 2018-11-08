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
import { Text } from './Text';

const ContainerPropTypes = {
  placement: PropTypes.oneOf([
    PLACEMENT_LEFT,
    PLACEMENT_RIGHT,
    PLACEMENT_TOP,
    PLACEMENT_BOTTOM,
  ]),
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
  placement: PLACEMENT_LEFT,
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

const withLabel = (Component) => {
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
      labelNode = (
        <Text
          style={getButtonStyle(styles, disabled)}
          onPress={onLabelPress || onPress}
          onLongPress={onLabelLongPress || onLongPress}
        >
          {label}
        </Text>
      );
    }

    return (
      <View style={[getPlacementStyle(placement), contentContainerStyle]}>
        <Component {...props} onPress={onPress} onLongPress={onLongPress} />
        {labelNode}
        {children}
      </View>
    );
  };

  Container.propTypes = ContainerPropTypes;
  Container.defaultProps = ContainerDefaultProps;

  Container.displayName = `withLabel(${Component.name})`;

  return Container;
};

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

export default withLabel;
