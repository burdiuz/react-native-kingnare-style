import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getComponentName, callIfFunction } from '../utils';
import { ActionPropType, getAction } from './actions';

const withActionButton = (ButtonComponent, defaultProps = {}) => {
  class Wrapper extends Component {
    static propTypes = {
      onPress: PropTypes.func,
      onAction: PropTypes.func.isRequired,
      action: ActionPropType.isRequired,
    };

    static defaultProps = {
      onPress: undefined,
    };

    constructor(props) {
      super(props);

      this.state = Wrapper.getDefivedStateFromProps(props);
    }

    static getDefivedStateFromProps({ action }) {
      return {
        action: getAction(action),
      };
    }

    onPress = (event) => {
      const { onPress, onAction } = this.props;

      if (onPress) {
        onPress(event);
      }

      if (onAction) {
        onAction(this.state.action);
      }
    };

    render() {
      return (
        <ButtonComponent
          {...callIfFunction(defaultProps, this.state.action, this.props)}
          {...this.props}
          onPress={this.onPress}
        />
      );
    }
  }

  Wrapper.displayName = `withActionButton(${getComponentName(ButtonComponent)})`;

  return Wrapper;
};

export default withActionButton;
