import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isFunction from '@actualwave/is-function';

import ActionGroup from '../actions/ActionGroup';
import ActionTextButton from '../actions/ActionTextButton';
import { registerAction, ActionPropType } from '../actions/actions';
import Text from '../Text/Text';
import HRule from '../Rule/HRule';
import { SmallHeaderText } from '../Header/SmallHeader';
import { VGroup, RGroup } from '../Form/Group';
import { BlockingModal } from './Modal';

import { alertStyles } from './styles';

export const ALERT_DEFAULT_CLOSE_ACTION = 'alert:default-close';

registerAction({
  type: ALERT_DEFAULT_CLOSE_ACTION,
  title: 'Close',
});

const actionButtonRenderer = (action, onAction, props) => (
  <ActionTextButton
    {...props}
    key={typeof action === 'string' ? action : action.type}
    action={action}
    onAction={onAction}
  />
);

const Alert = ({ children, title, actions, onAction, close, closeRequestAction }) => {
  let mainContent = isFunction(children) ? children() : children;
  let titleContent = isFunction(title) ? title() : title;
  const handleAction = (...args) => {
    let result = close(...args);

    return onAction ? onAction(...args) : result;
  };

  if (typeof mainContent === 'string') {
    mainContent = <Text>{mainContent}</Text>;
  }

  if (titleContent) {
    if (typeof titleContent === 'string') {
      titleContent = <SmallHeaderText style={alertStyles.title}>{titleContent}</SmallHeaderText>;
    }

    titleContent = (
      <>
        {titleContent}
        <HRule style={alertStyles.hRule} />
      </>
    );
  }

  return (
    <BlockingModal onRequestClose={() => handleAction(closeRequestAction)}>
      {titleContent}
      <VGroup style={alertStyles.contentGroup}>{mainContent}</VGroup>
      <HRule style={alertStyles.hRule} />
      <RGroup style={alertStyles.bottomGroup}>
        <ActionGroup
          onAction={handleAction}
          actions={actions}
          buttonRenderer={actionButtonRenderer}
        />
      </RGroup>
    </BlockingModal>
  );
};

Alert.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]).isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]),
  actions: PropTypes.arrayOf(ActionPropType),
  closeRequestAction: ActionPropType,
  onAction: PropTypes.func,
};

Alert.defaultProps = {
  title: undefined,
  actions: [ALERT_DEFAULT_CLOSE_ACTION],
  closeRequestAction: ALERT_DEFAULT_CLOSE_ACTION,
};

/*
  Content can be anything, can be a component renderer or any kind of node to put into Alert.
  Actions are all closing buttons, action being passed to promise.
  With async/await it can be used like

  const MyAlert = makeAlert('Do you want to delete this file?', 'Delete file', ['delete', 'cancel']);

  const actionType = await openModal(modal(
    (props) => <MyAlert {...props} close={close} />,
  ));

  if ( actionType === 'delete' ) {
    // delete file
  }

*/
export const makeAlert = (content, title = undefined, actions = undefined) => {
  const Wrapper = (props) => (
    <Alert title={title} actions={actions} {...props}>
      {content}
    </Alert>
  );

  Wrapper.displayName = 'makeAlert()Wrapper';

  return Wrapper;
};

export default Alert;
