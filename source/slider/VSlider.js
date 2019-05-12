import React from 'react';

import Slider from './Slider';
import VSliderView from './VSliderView';

export const calculateValueFromVPosition = ({ locationY }, { backgroundY, backgroundHeight }) =>
  Math.max(0, Math.min(1, (locationY - backgroundY) / backgroundHeight)) || 0;

const VSlider = (props) => (
  <Slider
    {...props}
    viewComponent={VSliderView}
    calculateValueFromPosition={calculateValueFromVPosition}
  />
);

export default VSlider;
