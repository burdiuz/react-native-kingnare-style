import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isFunction from '@actualwave/is-function';

import { getComponentName } from '../utils';
import { ActionPropType, getAction, getActionType } from './actions';

const withActionButton = (ButtonComponent, defaultProps = {}) => {
  class Wrapper extends Component {
    static propTypes = {
      onAction: PropTypes.func.isRequired,
      action: ActionPropType.isRequired,
    };

    static defaultProps = {};

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
      const baseProps = isFunction(defaultProps)
        ? defaultProps(this.state.action, this.props)
        : defaultProps;

      return <ButtonComponent {...baseProps} {...this.props} onPress={this.onPress} />;
    }
  }

  Wrapper.displayName = `withActionButton(${getComponentName(ButtonComponent)})`;

  return Wrapper;
};

export default withActionButton;
