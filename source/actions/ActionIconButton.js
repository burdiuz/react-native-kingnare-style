import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

import {
  ActionPropType,
  getAction,
  getActionType,
  renderIconFromAction,
} from './actions';
import { IconButton } from '../Button';

class ActionIconButton extends Component {
  static propTypes = {
    onAction: PropTypes.func.isRequired,
    action: ActionPropType.isRequired,
    iconSize: PropTypes.number,
    iconStyle: PropTypes.any,
  };

  static defaultProps = {
    iconSize: 20,
    iconStyle: undefined,
  };

  constructor(props, ...args) {
    super(props, ...args);

    this.state = { action: getAction(props.action) };
  }

  componentWillReceiveProps({ action }) {
    this.setState({
      action: getAction(action),
    });
  }

  renderIcon = ({ action, iconSize, iconStyle }) => {
    return renderIconFromAction(action, iconSize, iconStyle);
  };

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
      <IconButton
        {...this.props}
        onPress={this.onPress}
        iconRenderer={this.renderIcon}
      />
    );
  }
}

export default ActionIconButton;
