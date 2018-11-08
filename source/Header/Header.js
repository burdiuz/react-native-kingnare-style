import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

import withStyle from '../withStyle';
import withHeaderContainer from './withHeaderContainer';

import styles from './styles';

export const HeaderText = withStyle(Text, styles.header);

const Header = withHeaderContainer(HeaderText);

export default Header;
