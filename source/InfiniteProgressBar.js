import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Animated, Easing } from 'react-native';

import withStyle from './withStyle';

const { View: AnimatedView } = Animated;

const progress = require('react-native-kingnare-style-assets/progress.png');

class InfiniteProgressBar extends Component {
  static propTypes = {
    imageWidth: PropTypes.number.isRequired,
    segmentWidth: PropTypes.number.isRequired,
    animationDuration: PropTypes.number.isRequired,
  };

  static defaultProps = {
    imageWidth: 512,
    segmentWidth: 96,
    animationDuration: 1500,
  };

  constructor(props) {
    super(props);

    const { segmentWidth, animationDuration } = props;

    this.state = { images: [], width: 0 };

    this.left = new Animated.Value(-segmentWidth);

    Animated.loop(
      Animated.timing(this.left, {
        toValue: 0,
        easing: Easing.linear,
        duration: animationDuration,
        useNativeDriver: true,
      }),
    ).start();
  }

  handleLayout = ({
    nativeEvent: {
      layout: { width },
    },
  }) => {
    const { count: prevCount } = this.state;
    const { imageWidth, segmentWidth } = this.props;

    const count = Math.ceil((width + segmentWidth) / imageWidth);

    if (prevCount === count) {
      return;
    }

    this.setState({
      count,
      images: new Array(count).fill(null).map((_, i) => <Image key={i} source={progress} />),
      width,
    });
  };

  render() {
    const { images } = this.state;

    return (
      <View
        onLayout={this.handleLayout}
        style={[{ overflow: 'hidden', margin: 10, borderRadius: 10 }, this.props.style]}
      >
        <AnimatedView
          style={{
            transform: [
              {
                translateX: this.left,
              },
            ],
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
          }}
        >
          {images}
        </AnimatedView>
      </View>
    );
  }
}

export const InfiniteProgressBarView = withStyle(
  ({ children, ...props }) => (
    <View {...props}>
      <InfiniteProgressBar />
      {children}
    </View>
  ),
  { flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 10 },
  'InfiniteProgressBarView',
);

InfiniteProgressBarView.propTypes = {
  style: PropTypes.any,
  children: PropTypes.node,
};

InfiniteProgressBarView.defaultProps = {
  style: undefined,
  children: undefined,
};

export default InfiniteProgressBar;
