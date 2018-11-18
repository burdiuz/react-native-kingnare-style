import React from 'react';
import PropTypes from 'prop-types';
import { singleValueFactory } from '@actualwave/closure-value';

const knownActions = new Map();

export const {
  get: getDefaultIconFactory,
  set: setDefaultIconFactory,
} = singleValueFactory();

export const createAction = (
  type,
  title = '',
  params = {},
  color = '#FFF',
  iconFactory = undefined,
) => ({
  ...params,
  type,
  title,
  color,
  iconFactory,
});

export const registerAction = (...actions) => {
  actions.forEach((action) => {
    const { type, title, color, iconFactory, ...params } = action;

    if (knownActions.has(type)) {
      throw new Error(`Action with type "${type}" is already registered.`);
    }

    knownActions.set(
      type,
      createAction(type, title, params, color, iconFactory),
    );
  });
};

export const registerActions = (actions) => registerAction(...actions);

export const isknownAction = (type) => knownActions.has(type);

export const getActionByType = (type) => {
  const action = knownActions.get(type);

  if (!action) {
    throw new Error(`Unknown action with type "${type}".`);
  }

  return action;
};

export const getAction = (typeOrAction) => {
  let action = typeOrAction;

  if (typeof typeOrAction === 'string') {
    action = getActionByType(typeOrAction);
  }

  return action;
};

export const getActionType = (typeOrAction) => {
  if (!typeOrAction) {
    return '';
  }

  if (typeof typeOrAction === 'string') {
    return typeOrAction;
  }

  return typeOrAction.type || '';
};

export const renderIconFromAction = (
  type,
  size = undefined,
  style = undefined,
) => {
  const action = getAction(type);
  const { iconFactory = getDefaultIconFactory() } = action;

  if (!iconFactory) {
    return null;
  }

  return iconFactory(action, size, style);
};

export const ActionPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
]);
