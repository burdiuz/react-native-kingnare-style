import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import AbstractSliderView from './AbstractSliderView';
import SliderBackground from './SliderBackground';
import SliderThumb from './SliderThumb';

const styles = StyleSheet.create({
  background: {
    marginVertical: 11,
    height: 10,
    borderRadius: 5,
  },
  backgroundContentContainer: {
    borderRadius: 5,
  },
});

export const defaultHBackgroundRenderer = (layoutHandler, { disabled }) => (
  <SliderBackground styles={styles} onLayout={layoutHandler} disabled={disabled} />
);

export const defaultHThumbRenderer = (layoutHandler, style, { disabled }) => (
  <SliderThumb onLayout={layoutHandler} style={style} duration={150} disabled={disabled} />
);

export const calculateHThumbPosition = (
  value,
  { backgroundX, backgroundY, backgroundWidth, backgroundHeight, thumbWidth, thumbHeight },
) => ({
  top: Math.max(0, backgroundY - (thumbHeight - backgroundHeight) * 0.5) >> 0,
  left: Math.max(0, backgroundX + (backgroundWidth - thumbWidth) * value) >> 0,
});

const HSliderView = (props) => <AbstractSliderView {...props} />;

HSliderView.propTypes = {
  backgroundRenderer: PropTypes.func,
  thumbRenderer: PropTypes.func,
  calculateThumbPosition: PropTypes.func,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  // container style
  style: PropTypes.any,
};

HSliderView.defaultProps = {
  backgroundRenderer: defaultHBackgroundRenderer,
  thumbRenderer: defaultHThumbRenderer,
  calculateThumbPosition: calculateHThumbPosition,
  value: 0,
  disabled: false,
  style: undefined,
};

export default HSliderView;
