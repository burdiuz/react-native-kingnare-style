import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import { Animated, View, StyleSheet } from 'react-native';

import { Button, ELEMENT_MIN_SIZE } from '@actualwave/react-native-kingnare-style';

const SIZE = (ELEMENT_MIN_SIZE * 0.75) >> 0;

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
  },
  thumb: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  },
  thumbContentContainer: {
    borderRadius: SIZE / 2,
  },
});

const ThumbButton = memo(
  ({ disabled }) => (
    <Button
      style={styles.thumb}
      contentContainerStyle={styles.thumbContentContainer}
      disabled={disabled}
    />
  ),
  ({ disabled: a }, { disabled: b }) => a === b,
);

class SliderThumb extends Component {
  static propTypes = {
    onLayout: PropTypes.func,
    duration: PropTypes.number,
    disabled: PropTypes.bool,
    style: PropTypes.any.isRequired,
  };

  static defaultProps = {
    onLayout: undefined,
    duration: 0,
    disabled: false,
  };

  constructor(props) {
    super(props);

    this.position = new Animated.ValueXY();
  }

  componentDidMount() {
    const { onLayout } = this.props;

    if (onLayout) {
      onLayout({
        nativeEvent: {
          // "optimization"
          layout: { width: SIZE, height: SIZE },
        },
      });
    }
  }

  componentDidUpdate() {
    const {
      duration,
      style: { top: y = 0, left: x = 0 },
    } = this.props;

    if (duration) {
      this.position.stopAnimation();

      Animated.timing(this.position, {
        toValue: { x, y },
        duration,
        useNativeDriver: true,
      }).start();
    }
  }

  renderAnimated() {
    const { disabled } = this.props;

    return (
      <Animated.View
        pointerEvents="none"
        style={[
          styles.view,
          {
            transform: this.position.getTranslateTransform(),
          },
        ]}
      >
        <ThumbButton disabled={disabled} />
      </Animated.View>
    );
  }

  renderStatic() {
    const { style, disabled } = this.props;

    return (
      <View pointerEvents="none" style={[styles.view, style]}>
        <ThumbButton disabled={disabled} />
      </View>
    );
  }

  render() {
    const { duration } = this.props;

    if (duration > 0) {
      return this.renderAnimated();
    }

    return this.renderStatic();
  }
}

export default SliderThumb;
