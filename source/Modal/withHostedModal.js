import React from 'react';
import PropTypes from 'prop-types';
import isFunction from '@actualwave/is-function';

import { BlockingModal } from './Modal';

const combineCloseCallback = (callback, close) => async (...args) => {
  if (!isFunction(callback)) {
    return callback;
  }

  /*
    Keeps modal open if promise rejected
  */
  const result = await callback(...args);

  close();

  return result;
};

/*
  callbacks are required
*/
const withHostedModal = (
  Component,
  callbacks,
  baseModalProps = {},
  defaultOnRequestClose = undefined,
) => {
  const Wrapper = ({ onRequestClose, close, ...props }) => {
    let modalProps = baseModalProps;
    const callbacksObj = {};

    callbacks.forEach((name) => {
      const { [name]: callback } = props;

      callbacksObj[name] = combineCloseCallback(callback, close);
    });

    if (isFunction(baseModalProps)) {
      modalProps = baseModalProps(props);
    }

    return (
      <BlockingModal onRequestClose={combineCloseCallback(onRequestClose, close)} {...modalProps}>
        <Component {...props} {...callbacksObj} />
      </BlockingModal>
    );
  };

  Wrapper.propTypes = {
    onRequestClose: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
  };

  Wrapper.renderer = (props, close) => (
    <Wrapper onRequestClose={defaultOnRequestClose} {...props} close={close} />
  );

  return Wrapper;
};

export default withHostedModal;
