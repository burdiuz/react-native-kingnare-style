import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import isFunction from '@actualwave/is-function';

import { ELEMENT_MIN_SIZE } from './constants';
import { MoreIcon, MoreSelectedIcon, MoreDisabledIcon } from './assets/MoreIcon';
import { BlockingModal } from './Modal/Modal';
import { bigModalDefaultStyle } from './Modal/utils';
import { BmpIconButton } from './Button/IconButton';
import { iconButton } from './Button/styles';
import withContentSibling from './withContentSibling';

const {
  defaultProps: { iconRenderer: defaultBmpIconRenderer },
} = BmpIconButton;

const moreIconRenderer = (props) => {
  const Icon = defaultBmpIconRenderer(props);

  return <Icon style={iconButton.icon} />;
};

const MoreMenuButton = (props) => {
  const { showContent, contentContainerStyle, ...buttonProps } = props;

  return (
    <BmpIconButton
      iconRenderer={moreIconRenderer}
      icon={MoreIcon}
      selectedIcon={MoreSelectedIcon}
      disabledIcon={MoreDisabledIcon}
      {...buttonProps}
      onPress={() => showContent(props)}
    />
  );
};

MoreMenuButton.propTypes = {
  showContent: PropTypes.func.isRequired,
};

const moreContentRenderer = ({ children, contentContainerStyle }, close) => {
  if (!close) {
    throw new Error(
      'Content renderer function requires second argument to be a function to dismiss content.',
    );
  }

  return (
    <BlockingModal style={contentContainerStyle} onRequestClose={close}>
      {isFunction(children) ? children(close) : children}
    </BlockingModal>
  );
};

const MoreMenu = withContentSibling(MoreMenuButton, moreContentRenderer, 'MoreMenu');

MoreMenu.propTypes = {
  ...MoreMenu.propTypes,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  contentContainerStyle: PropTypes.any,
};

MoreMenu.defaultProps = {
  ...MoreMenu.defaultProps,
  contentContainerStyle: bigModalDefaultStyle,
};

export default MoreMenu;
