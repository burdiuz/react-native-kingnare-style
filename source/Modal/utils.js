import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';

export const makeHostedModalRenderer = (Component) => (props, close) => (
  <Component {...props} close={close} />
);

export const BIG_MODAL_PREFERED_WIDTH = 450;
export const BIG_MODAL_PREFERED_HEIGHT = 550;

export const bigModalStyleProps = (
  preferredWidth = BIG_MODAL_PREFERED_WIDTH,
  preferredHeight = BIG_MODAL_PREFERED_HEIGHT,
  margins = 40,
) => {
  const { width, height } = Dimensions.get('window');

  return {
    style: {
      width: Math.min(width - margins, height - margins, preferredWidth),
      height: Math.min(height - margins, preferredHeight),
    },
  };
};

export const { style: bigModalDefaultStyle } = StyleSheet.create(bigModalStyleProps());
