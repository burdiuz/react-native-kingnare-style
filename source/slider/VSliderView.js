import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import AbstractSliderView from './AbstractSliderView';
import SliderBackground from './SliderBackground';
import SliderThumb from './SliderThumb';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginHorizontal: 11,
    width: 10,
    borderRadius: 5,
  },
  backgroundContentContainer: {
    borderRadius: 5,
  },
});

export const defaultVBackgroundRenderer = (layoutHandler, { disabled }) => (
  <SliderBackground styles={styles} onLayout={layoutHandler} disabled={disabled} />
);

export const defaultVThumbRenderer = (layoutHandler, style, { disabled }) => (
  <SliderThumb onLayout={layoutHandler} style={style} duration={150} disabled={disabled} />
);

export const calculateVThumbPosition = (
  value,
  { backgroundX, backgroundY, backgroundWidth, backgroundHeight, thumbWidth, thumbHeight },
) => ({
  top: Math.max(0, backgroundY + (backgroundHeight - thumbHeight) * value) >> 0,
  left: Math.max(0, backgroundX - (thumbWidth - backgroundWidth) * 0.5) >> 0,
});

const VSliderView = (props) => <AbstractSliderView {...props} />;

VSliderView.propTypes = {
  backgroundRenderer: PropTypes.func,
  thumbRenderer: PropTypes.func,
  calculateThumbPosition: PropTypes.func,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  // container style
  style: PropTypes.any,
};

VSliderView.defaultProps = {
  backgroundRenderer: defaultVBackgroundRenderer,
  thumbRenderer: defaultVThumbRenderer,
  calculateThumbPosition: calculateVThumbPosition,
  value: 0,
  disabled: false,
  style: undefined,
};

export default VSliderView;
