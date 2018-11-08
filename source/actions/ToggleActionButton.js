import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ActionPropType,
  getAction,
  getActionType,
  renderIconFromAction,
} from './actions';

import ActionIconButton from './ActionIconButton';

/*
Toggle Action button is being displayed by Action Group in case if instead of single
action array is passed(array in array of actions):
[
  [PIN, UNPIN],
  [STAR, UNSTAR],
  [EXPAND, COLLAPSE],
]
It displays first action from array
and when onAction is being called, action returned from handler will become current action.
*/

const defaultButtonRenderer = (action, onAction, props) => (
  <ActionIconButton {...props} action={action} onAction={onAction} />
);

class ToggleActionButton extends Component {
  static propTypes = {
    actions: PropTypes.arrayOf(ActionPropType).isRequired,
    buttonRenderer: PropTypes.func.isRequired,
    onAction: PropTypes.func.isRequired,
  };

  static defaultProps = {
    buttonRenderer: defaultButtonRenderer,
  };

  constructor(props, ...args) {
    super(props, ...args);

    const actions = props.actions.map(getAction);

    this.state = { actions, currentAction: actions[0] };
  }

  componentWillReceiveProps({ actions }) {
    if (actions !== this.props.actions) {
      const actions = props.actions.map(getAction);

      this.setState({
        actions,
        currentAction: actions[0],
      });
    }
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

  onAction = (action) => {
    const { onAction } = this.props;

    if (onAction) {
      const result = onAction(action, this.state.actions);
      if (result === false) {
        return;
      }
    }

    this.next();
  };

  next() {
    const { actions, currentAction } = this.state;
    const nextAction =
      actions[(actions.indexOf(currentAction) + 1) % actions.length];

    this.setState({ currentAction: nextAction });
  }

  render() {
    const { actions, buttonRenderer, ...props } = this.props;
    const { currentAction } = this.state;

    return buttonRenderer(currentAction, this.onAction, props);
  }
}

export default ToggleActionButton;
