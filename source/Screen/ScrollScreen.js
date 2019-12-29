import { ScrollView } from 'react-native';

import { withStyles } from '@actualwave/react-native-with-style';

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
