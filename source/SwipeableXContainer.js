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
    onAnimationFinish: PropTypes.func,
    onSwipeStateChange: PropTypes.func,
    children: PropTypes.node.isRequired,
    swipeLeftPanelRenderer: PropTypes.func,
    swipeRightPanelRenderer: PropTypes.func,
    isLeftSwipeable: PropTypes.func,
    isRightSwipeable: PropTypes.func,
    swipeThresholdMultiplier: PropTypes.number,
    swipeThroughThresholdMultiplier: PropTypes.number,
    swipeThroughVelocity: PropTypes.number,
    swipeShiftMultiplier: PropTypes.number,
    forceCapture: PropTypes.bool,
    contentContainerStyle: PropTypes.any,
  };

  static defaultProps = {
    onSwipeStart: undefined,
    onSwipeConfirm: undefined,
    onAnimationFinish: undefined,
    onSwipeStateChange: undefined,
    swipeLeftPanelRenderer: undefined,
    swipeRightPanelRenderer: undefined,
    isLeftSwipeable: undefined,
    isRightSwipeable: undefined,
    swipeThresholdMultiplier: 0.15,
    swipeThroughThresholdMultiplier: 0.4,
    swipeThroughVelocity: 1,
    swipeShiftMultiplier: 0.85,
    forceCapture: false,
    contentContainerStyle: undefined,
  };

  constructor(props) {
    super(props);

    this.topPosX = new Animated.Value(0);
    this.topPosXValue = 0;
    this.touchPosXValue = 0;

    this.state = { width: 0, height: 0, position: SWIPE_CENTER };

    this.responder = PanResponder.create({
      /*
      Bubbling version of this handler may not work if gesture captured earlier
      in touchable child view.
      */
      onStartShouldSetPanResponderCapture: this.handleStartShouldSetPanResponderCapture,
      onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponderCapture: this.handleMoveShouldSetPanResponderCapture,
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
  isLeftSwipeable = () => {
    const { isLeftSwipeable, swipeLeftPanelRenderer } = this.props;
    return (!isLeftSwipeable || isLeftSwipeable(this.props)) && !!swipeLeftPanelRenderer;
  };

  /**
   * @public
   */
  isRightSwipeable = () => {
    const { isRightSwipeable, swipeRightPanelRenderer } = this.props;
    return (!isRightSwipeable || isRightSwipeable(this.props)) && !!swipeRightPanelRenderer;
  };

  /**
   * @public
   */
  left = (callback, duration) => {
    this.animateTopTo(SWIPE_LEFT, callback, duration);
  };

  /**
   * @public
   */
  right = (callback, duration) => {
    this.animateTopTo(SWIPE_RIGHT, callback, duration);
  };

  /**
   * @public
   */
  center = (callback, duration) => {
    this.animateTopTo(SWIPE_CENTER, callback, duration);
  };

  /**
   * @private
   */
  handleStartShouldSetPanResponderCapture = () => {
    this.touchPosXValue = this.topPosXValue;

    return false;
  };

  /**
   * @private
   */
  handleMoveShouldSetPanResponderCapture = (_, { dx, dy, numberActiveTouches }) => {
    const adx = Math.abs(dx);

    if (
      numberActiveTouches === 1
      && (this.props.forceCapture || (adx > 10 && adx > Math.abs(dy) * 3))
    ) {
      const { position } = this.state;
      return (
        (dx < 0
          && ((position === SWIPE_CENTER && this.isLeftSwipeable()) || position === SWIPE_RIGHT))
        || (dx > 0
          && ((position === SWIPE_CENTER && this.isRightSwipeable()) || position === SWIPE_LEFT))
      );
    }

    return false;
  };

  /**
   * @private
   */
  handleStartShouldSetPanResponder = () => true;

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
    const { onSwipeConfirm, onAnimationFinish } = this.props;
    const { position, width } = this.state;
    const swipeThreshold = width * swipeThresholdMultiplier;
    const swipeThroughThreshold = width * swipeThroughThresholdMultiplier;

    let next = SWIPE_CENTER;

    // swipe left
    if (dx < -swipeThreshold && this.isLeftSwipeable()) {
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
    } else if (dx > swipeThreshold && this.isRightSwipeable()) {
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

    this.animateTopTo(next);

    if (onSwipeConfirm) {
      onSwipeConfirm(position, next);
    }
  };

  /**
   * @private
   */
  handlePanResponderTerminate = () => {
    this.animateTopTo(this.state.position);
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
      if (!this.isLeftSwipeable()) {
        this.topPosX.setValue(0);
        return;
      }

      this.setTopPositionState(SWIPE_LEFT);
    } else if (currentXPos > 0) {
      if (!this.isRightSwipeable()) {
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
    const { onAnimationFinish } = this.props;
    const { width, position } = this.state;
    const toValue = calculateTopPosition(swipe, width, this.props.swipeShiftMultiplier);

    const handlerCallback = () => {
      if (onAnimationFinish) {
        onAnimationFinish(position, swipe);
      }

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

    return renderer && renderer(this);
  }

  render() {
    const { children, contentContainerStyle, ...props } = this.props;
    const { width: currentWidth, height: currentHeight } = this.state;

    return (
      <View
        {...props}
        onLayout={({
          nativeEvent: {
            layout: { width, height },
          },
        }) => {
          this.setState({ width, height });
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
