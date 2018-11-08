import React from 'react';
import PropTypes from 'prop-types';
import { singleValueFactory } from '@actualwave/closure-value';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const knownActions = new Map();

export const {
  get: getDefaultFontFamily,
  set: setDefaultFontFamily,
} = singleValueFactory();

setDefaultFontFamily(FontAwesome);

export const createAction = (
  type,
  iconName,
  color = '#FFF',
  title = '',
  iconFontFamily = getDefaultFontFamily(),
) => ({
  type,
  iconFontFamily,
  iconName,
  color,
  title,
});

export const registerAction = (...actions) => {
  actions.forEach((action) => {
    const { type, iconName, color, title, iconFontFamily } = action;

    if (knownActions.has(type)) {
      throw new Error(`Action with type "${type}" is already registered.`);
    }

    knownActions.set(type, {
      ...action,
      // apply defaults to undefined properties
      ...createAction(type, iconName, color, title, iconFontFamily),
    });
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
  const { iconFontFamily: FontFamily, iconName, color } = getAction(type);

  if (!FontFamily) {
    throw new Error(
      `Action with type "${type}" does not define iconFontFamily.`,
    );
  }

  return <FontFamily name={iconName} color={color} size={size} style={style} />;
};

export const ActionPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
]);
