import React from 'react';
import PropTypes from 'prop-types';
import isFunction from '@actualwave/is-function';

import { callIfFunction } from '../utils';
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
  ContentComponent,
  callbacks,
  baseModalProps = {},
  defaultOnRequestClose = undefined,
  ModalComponent = BlockingModal,
) => {
  const Wrapper = ({ onRequestClose, close, ...props }) => {
    const modalProps = callIfFunction(baseModalProps, props);
    const callbacksObj = {};

    callbacks.forEach((name) => {
      const { [name]: callback } = props;

      callbacksObj[name] = combineCloseCallback(callback, close);
    });

    return (
      <ModalComponent onRequestClose={combineCloseCallback(onRequestClose, close)} {...modalProps}>
        <ContentComponent {...props} {...callbacksObj} close={close} />
      </ModalComponent>
    );
  };

  Wrapper.propTypes = {
    close: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func,
  };

  Wrapper.defaultProps = {
    onRequestClose: () => null,
  };

  Wrapper.renderer = (props, close) => (
    <Wrapper onRequestClose={defaultOnRequestClose} {...props} close={close} />
  );

  return Wrapper;
};

export default withHostedModal;
