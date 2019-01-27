import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActionPropType, getAction, getActionType, renderIconFromAction } from './actions';

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

const getNextAction = (currentAction, actions) => actions[(actions.indexOf(currentAction) + 1) % actions.length];

const defaultButtonRenderer = (action, onAction, props) => (
  <ActionIconButton {...props} action={action} onAction={onAction} />
);

const ToggleActionButtonView = ({ currentAction, onAction, actions, buttonRenderer, ...props }) => buttonRenderer(currentAction, (action) => onAction(action, actions), props);

ToggleActionButtonView.propTypes = {
  actions: PropTypes.arrayOf(ActionPropType).isRequired,
  currentAction: ActionPropType,
  onAction: PropTypes.func.isRequired,
  buttonRenderer: PropTypes.func,
  onPress: PropTypes.func,
};

ToggleActionButtonView.defaultProps = {
  buttonRenderer: defaultButtonRenderer,
  onPress: undefined,
};


class ToggleActionButton extends Component {
  static propTypes = {
    actions: PropTypes.arrayOf(ActionPropType).isRequired,
    onAction: PropTypes.func.isRequired,
    buttonRenderer: PropTypes.func,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    buttonRenderer: defaultButtonRenderer,
    onPress: undefined,
  };

  constructor(props, ...args) {
    super(props, ...args);

    const actions = props.actions.map(getAction);

    this.state = { actions, currentAction: actions[0] };
  }

  componentWillReceiveProps({ actions: newActions }) {
    if (newActions !== this.props.actions) {
      const actions = newActions.map(getAction);

      this.setState({
        actions,
        currentAction: actions[0],
      });
    }
  }

  onAction = (action, actions) => {
    const { onAction } = this.props;

    if (onAction) {
      const result = onAction(action, actions);
      if (result === false) {
        return;
      }
    }

    this.next(action);
  };

  next(action) {
    const { actions } = this.state;

    this.setState({ currentAction: getNextAction(action, actions) });
  }

  render() {
    const { actions, currentAction } = this.state;

    return <ToggleActionButtonView {...this.props} currentAction={currentAction} actions={actions} onAction={this.onAction}/>;
  }
}

export default ToggleActionButton;
