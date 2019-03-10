import isFunction from '@actualwave/is-function';

export const getComponentName = ({ name, displayName }) => displayName || name || 'Component';

export const callIfFunction = (value, ...args) => (isFunction(value) ? value(...args) : value);
