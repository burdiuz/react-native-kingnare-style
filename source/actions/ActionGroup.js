import React from 'react';
import PropTypes from 'prop-types';

import { ActionPropType } from './actions';
import ToggleActionButton from './ToggleActionButton';
import ActionIconButton from './ActionIconButton';

const getKeyFromAction = (action) =>
  typeof action === 'string' ? action : action.type;

export const defaultButtonRenderer = (action, onAction, props) => (
  <ActionIconButton
    {...props}
    key={getKeyFromAction(action)}
    action={action}
    onAction={onAction}
  />
);

const ActionGroup = ({ actions, onAction, buttonRenderer, ...props }) =>
  actions.map((toggleActions) => {
    if (toggleActions instanceof Array) {
      return (
        <ToggleActionButton
          {...props}
          key={toggleActions
            .map((action) => getKeyFromAction(action))
            .join('/')}
          onAction={onAction}
          buttonRenderer={buttonRenderer}
          actions={toggleActions}
        />
      );
    }

    return buttonRenderer(toggleActions, onAction, props);
  });

ActionGroup.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.oneOfType([ActionPropType, PropTypes.arrayOf(ActionPropType)]),
  ).isRequired,
  onAction: PropTypes.func.isRequired,
  buttonRenderer: PropTypes.func,
};

ActionGroup.defaultProps = {
  buttonRenderer: defaultButtonRenderer,
};

export default ActionGroup;
