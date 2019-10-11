import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PanResponder } from 'react-native';
import throttle from 'lodash/throttle';

/**
  To work properly its internal Views for background and thumb
  must have pointerEvents set to "none".
*/
class Slider extends Component {
  static propTypes = {
    viewComponent: PropTypes.func.isRequired,
    calculateValueFromPosition: PropTypes.func.isRequired,
    value: PropTypes.number,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: 0,
    disabled: false,
    onChange: undefined,
  };

  constructor(props) {
    super(props);

    this.responder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease,
      onPanResponderReject: this.handlePanResponderTerminate,
      onPanResponderTerminate: this.handlePanResponderTerminate,
    });

    const { value: currentValue } = props;

    this.state = { layout: {}, moving: false, currentValue };
  }

  recalculateCurrentValue(nativeEvent, updateCallback) {
    const { calculateValueFromPosition } = this.props;
    const { currentValue, layout } = this.state;
    const nextValue = calculateValueFromPosition(nativeEvent, layout);

    if ((currentValue * 100) >> 0 === (nextValue * 100) >> 0) {
      return;
    }

    this.setState(
      {
        currentValue: nextValue,
      },
      updateCallback,
    );
  }

  recalculateCurrentValueThrottled = throttle(this.recalculateCurrentValue, 250, {
    leading: true,
    trailing: false,
  });

  handleChange = () => {
    const { onChange } = this.props;
    const { currentValue } = this.state;

    if (onChange) {
      onChange(currentValue);
    }
  };

  /**
   * @private
   */
  handleStartShouldSetPanResponder = ({ nativeEvent }, gestureState) => {
    const { disabled } = this.props;
    const { numberActiveTouches } = gestureState;

    if (disabled || numberActiveTouches !== 1) {
      return false;
    }

    this.recalculateCurrentValue(nativeEvent, this.handleChange);

    return true;
  };

  /**
   * @private
   */
  handleMoveShouldSetPanResponder = ({ nativeEvent }, gestureState) => {
    const { disabled } = this.props;
    const { numberActiveTouches } = gestureState;

    if (disabled || numberActiveTouches !== 1) {
      return false;
    }

    this.recalculateCurrentValueThrottled(nativeEvent, this.handleChange);

    return true;
  };

  /**
   * @private
   */
  handlePanResponderGrant = () => {
    this.setState({ moving: true });
  };

  /**
   * @private
   */
  handlePanResponderMove = ({ nativeEvent }) => {
    this.recalculateCurrentValueThrottled(nativeEvent, this.handleChange);
    // console.log('Move:', gestureState.moveX >> 0, gestureState.moveY >> 0);
  };

  /**
   * @private
   */
  handlePanResponderRelease = ({ nativeEvent }) => {
    this.recalculateCurrentValueThrottled.cancel();
    this.recalculateCurrentValue(nativeEvent, this.handleChange);
    this.setState({ moving: false });
    // console.log('release -------------------------------- ');
  };

  /**
   * @private
   */
  handlePanResponderTerminate = () => {
    this.setState({ moving: false });
  };

  handleSliderLayout = (layout) => {
    this.setState({ layout });
  };

  render() {
    const { viewComponent: SliderView, value } = this.props;
    const { moving, currentValue } = this.state;

    // console.log('Slider rendered', moving ? currentValue : value);
    return (
      <SliderView
        {...this.props}
        {...this.responder.panHandlers}
        value={moving ? currentValue : value}
        onSliderLayout={this.handleSliderLayout}
      />
    );
  }
}

export default Slider;
