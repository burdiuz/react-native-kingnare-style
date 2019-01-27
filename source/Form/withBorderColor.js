import { ERROR_COLOR, WARNING_COLOR, SUCCESS_COLOR, FOCUS_COLOR } from '../constants';

import { getComponentName } from '../utils';

import { withStyles } from '../withStyle';

export const withBorderColor = (Component, hasBorder, borderColor, displayName = '') => {
  const Wrapped = withStyles(Component, {
    style: (props) => {
      if(hasBorder(props)) {
        return {
          borderColor,
        };
      }

      return undefined;
    },
  });

  Wrapped.displayName = displayName || `withBorderColor(${getComponentName(Component)}, "#${borderColor.toString(16)}")`;

  return Wrapped;
};

export const withErrorBorder = (Component, hasBorder) => withBorderColor(Component, hasBorder, ERROR_COLOR);

export const withWarningBorder = (Component, hasBorder) => withBorderColor(Component, hasBorder, WARNING_COLOR);

export const withSuccessBorder = (Component, hasBorder) => withBorderColor(Component, hasBorder, SUCCESS_COLOR);

export const withFocusBorder = (Component, hasBorder) => withBorderColor(Component, hasBorder, FOCUS_COLOR);
