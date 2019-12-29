import React from 'react';
import {
  CanvasImage,
  CanvasImageDark,
  CanvasBackground,
  CanvasBackgroundDark,
} from './assets/CanvasBackground';

export const TransparencyImage = (props) => (
  <CanvasImage resizeMode="repeat" {...props} />
);

TransparencyImage.propTypes = Image.propTypes;
TransparencyImage.defaultProps = Image.defaultProps;


export const TransparencyDarkImage = (props) => (
  <CanvasImageDark resizeMode="repeat" {...props} />
);

TransparencyDarkImage.propTypes = Image.propTypes;
TransparencyDarkImage.defaultProps = Image.defaultProps;

const TransparencyBackground = (props) => (
  <CanvasBackground resizeMode="repeat" {...props} />
);

TransparencyBackground.propTypes = ImageBackground.propTypes;
TransparencyBackground.defaultProps = ImageBackground.defaultProps;

export const TransparencyDarkBackground = (props) => (
  <CanvasBackgroundDark resizeMode="repeat" {...props} />
);

TransparencyDarkBackground.propTypes = ImageBackground.propTypes;
TransparencyDarkBackground.defaultProps = ImageBackground.defaultProps;

export default TransparencyBackground;
