import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ActionIconButton from './ActionIconButton';

export const defaultButtonRenderer = (action, onAction, props) => (
  <ActionIconButton {...props} action={action} onAction={onAction} />
);

const defaultGetActionFromValue = ({ actionToValue, value }) =>
  Object.keys(actionToValue).find((type) => actionToValue[type] === value);

/*
  WIP component which has values assigned to certain action types
  */
class ToggleValueButton extends Component {
  static propTypes = {
    value: PropTypes.any,
    actionToValue: PropTypes.shape({}),
    getActionFromValue: PropTypes.func,
    onAction: PropTypes.func.isRequired,
    buttonRenderer: PropTypes.func,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    buttonRenderer: defaultButtonRenderer,
    actionToValue: undefined,
    getActionFromValue: defaultGetActionFromValue,
    onPress: undefined,
    value: undefined,
  };

  handleAction = (action) => {
    const { onAction } = this.props;

    if (onAction) {
      const result = onAction(action, actions);
      if (result === false) {
        return;
      }
    }

    this.next(action);
  };

  render() {
    const { buttonRenderer, value, actionToValue } = this.props;

    return buttonRenderer(actionToValue.find(value), this.handleAction, props);
  }
}

export default ToggleValueButton;
