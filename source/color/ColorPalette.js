import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, PanResponder } from 'react-native';

import { ColorSheetView, getGBFromPosition } from './ColorSheet';

const ColorPaletteView = ({ multiplier, cellSize, cellMargin, sheetMargin, ...props }) => {
  const step = (0xff / (multiplier - 1)) >> 0;
  const steps = new Array(multiplier).fill(0, 0, multiplier).map((_, index) => (step * index) >> 0);

  return (
    <View
      {...props}
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 0x00000000,
      }}
    >
      {steps.map((red) => (
        <ColorSheetView
          key={red}
          pointerEvents="none"
          multiplier={multiplier}
          cellSize={cellSize}
          cellMargin={cellMargin}
          margin={sheetMargin}
          red={red}
        />
      ))}
    </View>
  );
};

ColorPaletteView.propTypes = {
  multiplier: PropTypes.number.isRequired,
  cellSize: PropTypes.number.isRequired,
  cellMargin: PropTypes.number,
  sheetMargin: PropTypes.number,
};

ColorPaletteView.defaultProps = {
  cellMargin: 0,
  sheetMargin: 0,
};

/**
<ColorPalette
  multiplier={6}
  cellSize={30}
  onValue={(value) => console.log('ColorPalette:', `0x${value.toString(16)}`)}
/>     
 */
class ColorPalette extends Component {
  static propTypes = {
    ...ColorPaletteView.propTypes,
    onValue: PropTypes.func,
  };

  static defaultProps = {
    ...ColorPaletteView.defaultProps,
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

    this.state = { lastValue: -1, width: 0 };
  }

  handleLayout = ({ nativeEvent: { layout } }) => this.setState(layout);

  getValueFromGesture({ locationX, locationY }) {
    const { multiplier, sheetMargin, cellSize, cellMargin } = this.props;
    const { width } = this.state;
    const colorStep = (0xff / (multiplier - 1)) >> 0;
    const sheetSize = sheetMargin * 2 + (cellSize + cellMargin) * multiplier;
    const maxSheetsPerLine = (width / sheetSize) >> 0;
    const sheetX = (locationX / sheetSize) >> 0;
    const sheetY = (locationY / sheetSize) >> 0;
    const sheetIndex = Math.max(0, Math.min(multiplier - 1, sheetX + sheetY * maxSheetsPerLine));
    const value =
      ((colorStep * sheetIndex) << 16) |
      getGBFromPosition(
        locationX - sheetX * sheetSize,
        locationY - sheetY * sheetSize,
        multiplier,
        cellSize,
        sheetMargin,
        cellMargin,
      );

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

    return (
      <ColorPaletteView {...props} onLayout={this.handleLayout} {...this.responder.panHandlers} />
    );
  }
}

export default ColorPalette;
