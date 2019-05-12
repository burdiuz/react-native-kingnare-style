import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Area, ActiveArea } from '@actualwave/react-native-kingnare-style';

const SliderBackground = memo(({ styles, onLayout, disabled }) => {
  const Bg = disabled ? Area : ActiveArea;

  return (
    <Bg
      pointerEvents="none"
      onLayout={onLayout}
      selected
      style={styles.background}
      contentContainerStyle={styles.backgroundContentContainer}
      disabled={disabled}
    />
  );
});

export default SliderBackground;
