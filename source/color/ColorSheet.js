import React, { Component, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, PanResponder } from 'react-native';

const ColorView = ({ size, color, margin }) => (
  <View
    pointerEvents="none"
    style={{
      width: size,
      height: size,
      backgroundColor: color,
      margin,
    }}
  />
);

ColorView.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.number.isRequired,
  margin: PropTypes.number,
};

ColorView.defaultProps = {
  margin: 0,
};

export const ColorSheetView = forwardRef(
  ({ multiplier, red, margin, cellSize, cellMargin, ...props }, ref) => {
    const redPart = red << 16;
    const step = (0xff / (multiplier - 1)) >> 0;
    const size = (cellSize + cellMargin * 2) * multiplier;
    const count = multiplier * multiplier;
    const colors = new Array(count)
      .fill(0, 0, count)
      .map(
        (_, index) =>
          (redPart |
            ((step * (index % multiplier >> 0)) << 8) |
            ((step * ((index / multiplier) >> 0)) >> 0)) *
            256 +
          0xff,
      );

    return (
      <View
        ref={ref}
        {...props}
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: size,
          height: size,
          margin,
          backgroundColor: 0x00000000,
        }}
      >
        {colors.map((color) => (
          <ColorView key={color} size={cellSize} color={color} margin={cellMargin} />
        ))}
      </View>
    );
  },
);

ColorSheetView.propTypes = {
  multiplier: PropTypes.number.isRequired,
  cellSize: PropTypes.number.isRequired,
  red: PropTypes.number,
  margin: PropTypes.number,
  cellMargin: PropTypes.number,
};

ColorSheetView.defaultProps = {
  red: 0x00,
  margin: 0,
  cellMargin: 0,
};

export const getGBFromPosition = (
  locationX,
  locationY,
  multiplier,
  cellSize,
  margin = 0,
  cellMargin = 0,
) => {
  const coordStep = cellSize + cellMargin;
  const colorStep = (0xff / (multiplier - 1)) >> 0;
  const x = Math.max(0, (locationX - margin) / coordStep) >> 0;
  const y = Math.max(0, (locationY - margin) / coordStep) >> 0;
  const value =
    ((x >= multiplier ? 0xff : colorStep * x) << 8) | (y >= multiplier ? 0xff : colorStep * y);

  return value;
};

/**
<ColorSheet
  red={0x66}
  multiplier={6}
  cellSize={40}
  onValue={(value) => console.log('ColorSheet:', `0x${value.toString(16)}`)}
/>
 */
class ColorSheet extends Component {
  static propTypes = {
    ...ColorSheetView.propTypes,
    onValue: PropTypes.func,
  };

  static defaultProps = {
    ...ColorSheetView.defaultProps,
    onValue: undefined,
  };

  constructor(props) {
    super(props);

    this.responder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease,
    });

    this.state = { lastValue: -1 };
  }

  getValueFromGesture({ locationX, locationY }) {
    const { multiplier, red, margin, cellSize, cellMargin } = this.props;
    const value =
      (red << 16) |
      getGBFromPosition(locationX, locationY, multiplier, cellSize, margin, cellMargin);

    return value;
  }

  handleValue(nativeEvent) {
    const { onValue } = this.props;
    const { lastValue } = this.state;
    const value = this.getValueFromGesture(nativeEvent);

    if (value === lastValue) {
      return;
    }

    this.setState({
      lastValue: value,
    });

    if (onValue) {
      onValue(value);
    }
  }

  /**
   * @private
   */
  handleStartShouldSetPanResponder = ({ nativeEvent }, gestureState) => {
    const { onValue } = this.props;
    const { numberActiveTouches } = gestureState;

    if (!onValue || numberActiveTouches !== 1) {
      return false;
    }

    this.handleValue(nativeEvent);

    return true;
  };

  /**
   * @private
   */
  handleMoveShouldSetPanResponder = ({ nativeEvent }, gestureState) => {
    const { onValue } = this.props;
    const { numberActiveTouches } = gestureState;

    if (!onValue || numberActiveTouches !== 1) {
      return false;
    }

    this.handleValue(nativeEvent);

    return true;
  };

  /**
   * @private
   */
  handlePanResponderMove = ({ nativeEvent }) => {
    this.handleValue(nativeEvent);
  };

  /**
   * @private
   */
  handlePanResponderRelease = ({ nativeEvent }) => {
    this.handleValue(nativeEvent);
  };

  render() {
    const { onValue, ...props } = this.props;

    return <ColorSheetView {...props} {...this.responder.panHandlers} />;
  }
}

export default ColorSheet;
