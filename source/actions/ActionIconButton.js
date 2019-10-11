import PropTypes from 'prop-types';

import IconButton from '../Button/IconButton';
import { renderIconFromAction } from './actions';
import withActionButton from './withActionButton';

const ActionIconButton = withActionButton(IconButton, {
  iconRenderer: ({ action, iconSize, iconStyle }) => renderIconFromAction(action, iconSize, iconStyle),
});

ActionIconButton.propTypes = {
  ...ActionIconButton.propTypes,
  iconSize: PropTypes.number,
  iconStyle: PropTypes.any,
};

ActionIconButton.defaultProps = {
  ...ActionIconButton.defaultProps,
  iconSize: 20,
  iconStyle: undefined,
};

export default ActionIconButton;
