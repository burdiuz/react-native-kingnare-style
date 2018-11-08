import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

import withStyle from '../withStyle';
import withHeaderContainer from './withHeaderContainer';

import styles from './styles';

export const SuperHeaderText = withStyle(Text, styles.super);

const SuperHeader = withHeaderContainer(SuperHeaderText);

export default SuperHeader;
