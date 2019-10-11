import React from 'react';
import PropTypes from 'prop-types';

import { callIfFunction } from './utils';
import { BlockingModal } from './Modal/Modal';
import { bigModalDefaultStyle } from './Modal/utils';
import MoreMenuButtonView from './Button/MoreMenuButton';
import withContentSibling from './withContentSibling';

const MoreMenuButton = (props) => {
  const { showContent, contentContainerStyle, ...buttonProps } = props;

  return <MoreMenuButtonView {...buttonProps} onPress={() => showContent(props)} />;
};

MoreMenuButton.propTypes = {
  ...MoreMenuButtonView.propTypes,
  showContent: PropTypes.func.isRequired,
};

MoreMenuButton.defaultProps = {
  ...MoreMenuButtonView.defaultProps,
};

const moreContentRenderer = ({ children, contentContainerStyle }, close) => {
  if (!close) {
    throw new Error(
      'Content renderer function requires second argument to be a function to dismiss content.',
    );
  }

  return (
    <BlockingModal style={contentContainerStyle} onRequestClose={close}>
      {callIfFunction(children, close)}
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
