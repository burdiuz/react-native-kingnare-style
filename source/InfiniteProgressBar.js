import React, { Component } from 'react';
import { View, Image, Animated, Easing } from 'react-native';

import Area from './Area/Area';

const { View: AnimatedView } = Animated;

const progress = require('react-native-kingnare-style-assets/progress.png');

class InfiniteProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [], width: 0 };
    this.left = new Animated.Value(-45);
    Animated.loop(
      Animated.timing(this.left, {
        toValue: 0,
        easing: Easing.linear,
        duration: 1500, // default if 500, here 500 * 5
        useNativeDriver: true,
      }),
    ).start();
  }

  handleLayout = ({
    nativeEvent: {
      layout: { width },
    },
  }) => {
    const imageWidth = 147;
    const segmentWidth = 9 * 5;

    const count = Math.ceil((width + segmentWidth) / imageWidth);

    this.setState({
      images: new Array(5).fill(null).map((_, i) => <Image key={i} source={progress} />),
      width,
    });
  };

  render() {
    const { images } = this.state;

    return (
      <View onLayout={this.handleLayout} style={[{overflow: 'hidden'}, this.props.style]}>
        <AnimatedView
          style={{
            transform: [
              {
                translateX: this.left,
              },
            ],
            width: '100%',
            height: '100%',
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

export default InfiniteProgressBar;
