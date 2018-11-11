import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

import withStyle from '../withStyle';
import withHeaderContainer from './withHeaderContainer';

import styles from './styles';

export const SmallHeaderText = withStyle(Text, styles.small, 'SmallHeaderText');

export default withHeaderContainer(SmallHeaderText, 'SmallHeader');
