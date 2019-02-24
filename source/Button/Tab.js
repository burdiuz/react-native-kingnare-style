import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../withStyle';
import Text from '../Text/Text';

import Button from './Button';
import { tabStyles } from './styles';

export const TabButtonTop = withStyles(
  Button,
  {
    style: tabStyles.top,
    contentContainerStyle: tabStyles.topContent,
  },
  'TabButtonTop',
);

export const TabButtonBottom = withStyles(
  Button,
  {
    style: tabStyles.bottom,
    contentContainerStyle: tabStyles.bottomContent,
  },
  'TabButtonBottom',
);
