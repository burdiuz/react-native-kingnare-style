import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { getComponentName } from '../utils';

import withStyle from '../withStyle';

import styles from './styles';

export const HeaderContainer = withStyle(View, styles.container, 'HeaderContainer');

const WrapperPropTypes = {
  contentContainerStyle: PropTypes.any,
};

const WrapperDefaultProps = {
  contentContainerStyle: undefined,
};

const withHeaderContainer = (Component, displayName = '') => {
  const Wrapper = ({ contentContainerStyle, ...props }) => (
    <HeaderContainer style={contentContainerStyle}>
      <Component {...props} />
    </HeaderContainer>
  );

  Wrapper.propTypes = WrapperPropTypes;
  Wrapper.defaultProps = WrapperDefaultProps;

  Wrapper.displayName = displayName || `withHeaderContainer(${getComponentName(Component)})`;

  return Wrapper;
};

export default withHeaderContainer;
