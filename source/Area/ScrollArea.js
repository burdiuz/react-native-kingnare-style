import { ScrollView } from 'react-native';

import { withStyles } from '@actualwave/react-native-with-style';

import styles from './styles';

export default withStyles(
  ScrollView,
  {
    style: styles.scroll,
    contentContainerStyle: styles.scrollContent,
  },
  'ScrollArea',
);
