import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import callIfFunction from '@actualwave/call-if-function';

import { createBaseModal, renderActiveBlockingView } from '../BaseModal';
import { PLACEMENT_TOP } from '../constants';

const BaseModal = createBaseModal(renderActiveBlockingView);

class VAnchoringModal extends Component {
  static propTypes = {
    marginBetween: PropTypes.number,
    onPressOutside: PropTypes.func,
  };

  static defaultProps = {
    marginBetween: 2,
    onPressOutside: undefined,
  };

  constructor(props) {
    super(props);
    const { width, height } = Dimensions.get('window');
    this.state = { width, height };
  }

  handleLayout = ({
    nativeEvent: {
      layout: { width, height },
    },
  }) => this.setState({ width, height });

  getPlacementStyle() {
    const { y, placement, marginBetween } = this.props;
    const { height } = this.state;

    if (placement === PLACEMENT_TOP) {
      return {
        flexDirection: 'column-reverse',
        top: marginBetween,
        height: y - marginBetween * 2,
      };
    }

    return {
      top: y + marginBetween,
      height: height - y - marginBetween * 2,
    };
  }

  render() {
    const { x, y, placement, children, onPressOutside, ...modalProps } = this.props;
    const { width } = this.state;

    return (
      <BaseModal
        {...modalProps}
        onLayout={() => this.handleLaout}
      >
        <View
          style={{
            position: 'absolute',
            left: x,
            width: width - x,
            alignItems: 'flex-start',
            ...this.getPlacementStyle(),
          }}
        >
          {callIfFunction(children)}
        </View>
      </BaseModal>
    );
  }
}

export default VAnchoringModal;
