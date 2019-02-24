import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

import { TextButton } from '../Button';
import { ActionPropType, getAction, getActionType, renderIconFromAction } from './actions';
import withActionButton from './withActionButton';

const ActionTextButton = withActionButton(TextButton, ({ title }) => ({ label: title }));

export default ActionTextButton;
