import { withStyles } from '@actualwave/react-native-with-style';
import getComponentName from '@actualwave/react-component-name';

import { ERROR_COLOR, WARNING_COLOR, SUCCESS_COLOR, FOCUS_COLOR } from '../constants';

export const withBorderColor = (Component, hasBorder, borderColor, displayName = '') => {
  const Wrapped = withStyles(Component, {
    style: (props) => {
      if (hasBorder(props)) {
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
