import React from 'react';

import Slider from './Slider';
import HSliderView from './HSliderView';

export const calculateValueFromHPosition = ({ locationX }, { backgroundX, backgroundWidth }) =>
  Math.max(0, Math.min(1, (locationX - backgroundX) / backgroundWidth)) || 0;

const HSlider = (props) => (
  <Slider
    {...props}
    viewComponent={HSliderView}
    calculateValueFromPosition={calculateValueFromHPosition}
  />
);

export default HSlider;
