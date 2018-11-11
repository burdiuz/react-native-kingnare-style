import React from 'react';
import { View } from 'react-native';

import withStyle from '../withStyle';
import { createBaseModal } from '../BaseModal';

import styles from './styles';

export default withStyle(createBaseModal(View), styles.blocking, 'ModalScreen');
