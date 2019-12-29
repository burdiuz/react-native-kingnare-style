import React from 'react';
import { Image, ImageBackground } from 'react-native';

export const CanvasImage = (props) => (
  <Image {...props} source={require('./canvas_background.png')} />
);

export const CanvasImageDark = (props) => (
  <Image {...props} source={require('./canvas_background_dark.png')} />
);

export const CanvasBackground = (props) => (
  <ImageBackground {...props} source={require('./canvas_background.png')} />
);

export const CanvasBackgroundDark = (props) => (
  <ImageBackground {...props} source={require('./canvas_background_dark.png')} />
);
