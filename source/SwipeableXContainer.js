import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Animated, Easing, PanResponder } from 'react-native';

export const SWIPE_CENTER = 0;
export const SWIPE_LEFT = -1;
export const SWIPE_RIGHT = 1;

const calculateTopPosition = (swipe, width, shift) => {
  switch (swipe) {
    case SWIPE_RIGHT:
      return width * shift;
    case SWIPE_LEFT:
      return -width * shift;
    case SWIPE_CENTER:
    default:
      return 0;
  }
};

class SwipeableXContainer extends Component {
  static propTypes = {
    onSwipeStart: PropTypes.func,
    onSwipeConfirm: PropTypes.func,
    onSwipeFinish: PropTypes.func,
    onSwipeStateChange: PropTypes.func,
    children: PropTypes.node.isRequired,
    swipeLeftPanelRenderer: PropTypes.func,
    swipeRightPanelRenderer: PropTypes.func,
    swipeThresholdMultiplier: PropTypes.number,
    swipeThroughThresholdMultiplier: PropTypes.number,
    swipeThroughVelocity: PropTypes.number,
    swipeShiftMultiplier: PropTypes.number,
    contentContainerStyle: PropTypes.any,
  };
  static defaultProps = {
    onSwipeStateChange: undefined,
    onSwipeRight: undefined,
    onSwipeLeft: undefined,
    onSwipeCenter: undefined,
    swipeLeftPanelRenderer: undefined,
    swipeRightPanelRenderer: undefined,
    swipeThresholdMultiplier: 0.15,
    swipeThroughThresholdMultiplier: 0.4,
    swipeThroughVelocity: 1,
    swipeShiftMultiplier: 0.85,
    contentContainerStyle: undefined,
  };

  constructor(props) {
    super(props);

    this.topPosX = new Animated.Value(0);
    this.topPosXValue = 0;
    this.touchPosXValue = 0;

    this.state = { x: 0, y: 0, width: 0, height: 0, position: SWIPE_CENTER };

    this.responder = PanResponder.create({
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this.handleMoveShouldSetPanResponder,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderRelease,
      onPanResponderReject: this.handlePanResponderTerminate,
      onPanResponderTerminate: this.handlePanResponderTerminate,
    });
  }

  /**
   * @public
   */
  isLeftSwapable() {
    return !!this.props.swipeLeftPanelRenderer;
  }

  /**
   * @public
   */
  isRightSwapable() {
    return !!this.props.swipeRightPanelRenderer;
  }

  /**
   * @public
   */
  left(callback, duration) {
    this.animateTopTo(SWIPE_LEFT, callback, duration);
  }

  /**
   * @public
   */
  right(callback, duration) {
    this.animateTopTo(SWIPE_RIGHT, callback, duration);
  }

  /**
   * @public
   */
  center(callback, duration) {
    this.animateTopTo(SWIPE_CENTER, callback, duration);
  }

  /**
   * @private
   */
  handleStartShouldSetPanResponder = ({ nativeEvent: { pageX, pageY } }) => {
    const { x, y } = this.state;

    this.touchX = pageX - x;
    this.touchY = pageY - y;
    this.touchPosXValue = this.topPosXValue;

    return false;
  };

  /**
   * @private
   */
  handleMoveShouldSetPanResponder = (_, { dx, dy, numberActiveTouches }) => {
    const adx = Math.abs(dx);

    if (numberActiveTouches === 1 && adx > 10 && adx > Math.abs(dy) * 3) {
      const { swipeLeftPanelRenderer, swipeRightPanelRenderer } = this.props;
      const { position } = this.state;
      return (
        (dx < 0 &&
          ((position === SWIPE_CENTER && swipeLeftPanelRenderer) || position === SWIPE_RIGHT)) ||
        (dx > 0 &&
          ((position === SWIPE_CENTER && swipeRightPanelRenderer) || position === SWIPE_LEFT))
      );
    }

    return false;
  };

  /**
   * @private
   */
  handlePanResponderGrant = (_, { dx }) => {
    const { onSwipeStart } = this.props;

    this.moveTopPositionTo(dx);

    if (onSwipeStart) {
      onSwipeStart();
    }
  };

  /**
   * @private
   */
  handlePanResponderMove = (_, { dx }) => {
    this.moveTopPositionTo(dx);
  };

  /**
   * @private
   */
  handlePanResponderRelease = (_, { dx, vx }) => {
    const {
      swipeThresholdMultiplier,
      swipeThroughThresholdMultiplier,
      swipeThroughVelocity,
    } = this.props;
    const adx = Math.abs(dx);
    const { onSwipeConfirm, onSwipeFinish } = this.props;
    const { position, width } = this.state;
    const swipeThreshold = width * swipeThresholdMultiplier;
    const swipeThroughThreshold = width * swipeThroughThresholdMultiplier;

    let next = SWIPE_CENTER;

    // swipe left
    if (dx < -swipeThreshold && this.isLeftSwapable()) {
      switch (position) {
        case SWIPE_RIGHT:
          if (adx >= swipeThroughThreshold || vx >= swipeThroughVelocity) {
            next = SWIPE_LEFT;
          } else {
            next = SWIPE_CENTER;
          }
          break;
        case SWIPE_LEFT:
        case SWIPE_CENTER:
        default:
          next = SWIPE_LEFT;
          break;
      }
      // swipe right
    } else if (dx > swipeThreshold && this.isRightSwapable()) {
      switch (position) {
        case SWIPE_LEFT:
          if (adx > swipeThroughThreshold || vx <= -swipeThroughVelocity) {
            next = SWIPE_RIGHT;
          } else {
            next = SWIPE_CENTER;
          }
          break;
        case SWIPE_RIGHT:
        case SWIPE_CENTER:
        default:
          next = SWIPE_RIGHT;
          break;
      }
    }

    this.animateTopTo(next, onSwipeFinish);

    if (onSwipeConfirm) {
      onSwipeConfirm(position, next);
    }
  };

  /**
   * @private
   */
  handlePanResponderTerminate = () => {
    const { onSwipeFinish } = this.props;
    this.animateTopTo(this.state.position, onSwipeFinish);
  };

  /**
   * @private
   */
  setTopPositionTo(swipe) {
    const { width } = this.state;
    const value = calculateTopPosition(swipe, width, this.props.swipeShiftMultiplier);

    this.topPosX.setValue(value);
  }

  /**
   * @private
   */
  setTopPositionState(next) {
    const { position } = this.state;

    if (position === next) {
      return;
    }

    this.setState({ position: next }, () => {
      const { onSwipeStateChange } = this.props;

      if (onSwipeStateChange) {
        onSwipeStateChange(position, next);
      }
    });
  }

  /**
   * @private
   */
  moveTopPositionTo(dx) {
    const currentXPos = dx + this.touchPosXValue;

    if (currentXPos < 0) {
      if (!this.isLeftSwapable()) {
        this.topPosX.setValue(0);
        return;
      }

      this.setTopPositionState(SWIPE_LEFT);
    } else if (currentXPos > 0) {
      if (!this.isRightSwapable()) {
        this.topPosX.setValue(0);
        return;
      }

      this.setTopPositionState(SWIPE_RIGHT);
    }

    this.topPosX.setValue(currentXPos);
  }

  /**
   * @private
   */
  animateTopTo(swipe, handler, duration = 300) {
    const { width, position } = this.state;
    const toValue = calculateTopPosition(swipe, width, this.props.swipeShiftMultiplier);

    const handlerCallback = () => {
      if (handler) {
        handler(position, swipe);
      }
    };

    const animation = Animated.timing(this.topPosX, {
      toValue,
      duration,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    });

    if (swipe === SWIPE_CENTER) {
      animation.start(() => {
        this.setTopPositionState(swipe);
        handlerCallback();
      });
    } else {
      this.setTopPositionState(swipe);
      animation.start(handlerCallback);
    }
  }

  componentDidMount() {
    this.topPosX.addListener(({ value }) => {
      this.topPosXValue = value;
    });
  }

  /**
   * @private
   */
  renderBottomContent() {
    const { swipeLeftPanelRenderer, swipeRightPanelRenderer } = this.props;
    const { position } = this.state;
    let renderer;

    switch (position) {
      case SWIPE_RIGHT:
        renderer = swipeRightPanelRenderer;
        break;
      case SWIPE_LEFT:
        renderer = swipeLeftPanelRenderer;
        break;
      case SWIPE_CENTER:
      default:
        renderer = null;
        break;
    }

    return renderer && renderer(this.props);
  }

  render() {
    const { children, contentContainerStyle, ...props } = this.props;
    const { width: currentWidth, height: currentHeight } = this.state;

    return (
      <View
        {...props}
        onLayout={({
          nativeEvent: {
            layout: { x, y, width, height },
          },
        }) => {
          this.setState({ x, y, width, height });
        }}
        {...this.responder.panHandlers}
      >
        {this.renderBottomContent()}
        <Animated.View
          style={[
            {
              transform: [
                {
                  translateX: this.topPosX,
                },
              ],
              height: currentHeight,
              width: currentWidth,
              position: 'absolute',
            },
            contentContainerStyle,
          ]}
        >
          {children}
        </Animated.View>
      </View>
    );
  }
}

export default SwipeableXContainer;
