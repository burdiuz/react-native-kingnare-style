import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { getComponentName } from '../utils';

import withStyle from '../withStyle';

import styles from './styles';

export const HeaderContainer = withStyle(
  View,
  (props) => {
    const { spaceAbove, spaceBelow } = props;
    if (spaceAbove && spaceBelow) {
      return styles.containerVerticalSpace;
    } if (spaceAbove) {
      return styles.containerTopSpace;
    } if (spaceBelow) {
      return styles.containerBottomSpace;
    }
    return styles.containerNoSpace;

  },
  'HeaderContainer',
);

const WrapperPropTypes = {
  contentContainerStyle: PropTypes.any,
  spaceAbove: PropTypes.bool,
  spaceBelow: PropTypes.bool,
};

const WrapperDefaultProps = {
  contentContainerStyle: undefined,
  spaceAbove: false,
  spaceBelow: true,
};

const withHeaderContainer = (Component, displayName = '') => {
  const Wrapper = ({ contentContainerStyle, spaceAbove, spaceBelow, ...props }) => (
    <HeaderContainer style={contentContainerStyle} spaceAbove={spaceAbove} spaceBelow={spaceBelow}>
      <Component {...props} />
    </HeaderContainer>
  );

  Wrapper.propTypes = { ...(Component.propTypes || {}), ...WrapperPropTypes };
  Wrapper.defaultProps = { ...(Component.defaultProps || {}), ...WrapperDefaultProps };

  Wrapper.displayName = displayName || `withHeaderContainer(${getComponentName(Component)})`;

  return Wrapper;
};

export default withHeaderContainer;
