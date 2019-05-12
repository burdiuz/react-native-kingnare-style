import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    // bg color is important to track gestures
    backgroundColor: 0x00000000,
    // borderWidth: 1,
    // borderColor: 0xff0000ff,
  },
});

class AbstractSliderView extends Component {
  static propTypes = {
    backgroundRenderer: PropTypes.func.isRequired,
    thumbRenderer: PropTypes.func.isRequired,
    calculateThumbPosition: PropTypes.func.isRequired,
    onSliderLayout: PropTypes.func,
    value: PropTypes.number,
    // container style
    style: PropTypes.any,
  };
  
  static defaultProps = {
    onSliderLayout: undefined,
    value: 0,
    style: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      backgroundX: 0,
      backgroundY: 0,
      backgroundWidth: 0,
      backgroundHeight: 0,
      thumbWidth: 0,
      thumbHeight: 0,
    };
  }

  handleBackgroundLayout = ({
    nativeEvent: {
      layout: { x, y, width, height },
    },
  }) => {
    const { backgroundX, backgroundY, backgroundWidth, backgroundHeight } = this.state;

    if (
      backgroundX === x &&
      backgroundY === y &&
      backgroundWidth === width &&
      backgroundHeight === height
    ) {
      return;
    }

    this.setState(
      {
        backgroundX: x,
        backgroundY: y,
        backgroundWidth: width,
        backgroundHeight: height,
      },
      () => {
        const { onSliderLayout } = this.props;

        if (onSliderLayout) {
          onSliderLayout({ width, height, x, y, ...this.state });
        }
      },
    );
  };

  handleThumbLayout = ({
    nativeEvent: {
      layout: { width, height },
    },
  }) => {
    const { thumbWidth, thumbHeight } = this.state;

    if (thumbWidth === width && thumbHeight === height) {
      return;
    }

    this.setState({
      thumbWidth: width,
      thumbHeight: height,
    });
  };

  render() {
    const { value, style, backgroundRenderer, thumbRenderer, calculateThumbPosition } = this.props;

    return (
      <View onLayout={this.handleContainerLayout} {...this.props} style={[styles.container, style]}>
        {backgroundRenderer(this.handleBackgroundLayout, this.props)}
        {thumbRenderer(
          this.handleThumbLayout,
          calculateThumbPosition(Math.max(0, Math.min(1, value)) || 0, this.state, this.props),
          this.props,
        )}
      </View>
    );
  }
}

export default AbstractSliderView;
