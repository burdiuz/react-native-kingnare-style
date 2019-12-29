import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import getComponentName from '@actualwave/react-component-name';
import callIfFunction from '@actualwave/call-if-function';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

const withConstraintView = (
  constraintStyle,
  ContentContainer = View,
  ParentContainer = View,
  displayName = '',
) => {
  const Wrapper = ({ children, style, contentContainerStyle, ...props }) => {
    const combinedStyle = useMemo(() => [styles.container, style], [style]);
    const combinedCCStyle = useMemo(
      () => [contentContainerStyle, callIfFunction(constraintStyle, props)],
      [contentContainerStyle],
    );

    return (
      <ParentContainer style={combinedStyle}>
        <ContentContainer style={combinedCCStyle} {...props}>
          {children}
        </ContentContainer>
      </ParentContainer>
    );
  };

  Wrapper.displayName = displayName || `withConstraintView(${getComponentName(ContentContainer)})`;

  return Wrapper;
};

export default withConstraintView;
