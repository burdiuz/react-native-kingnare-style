import { ScrollView } from 'react-native';

import { withStyles } from '../withStyle';

import styles from './styles';

const ScrollScreen = withStyles(
  ScrollView,
  {
    style: styles.scroll,
    contentContainerStyle: styles.scrollContent,
  },
  'ScrollScreen',
);

export default ScrollScreen;
