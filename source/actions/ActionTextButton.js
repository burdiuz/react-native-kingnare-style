import { TextButton } from '../Button';
import withActionButton from './withActionButton';

const ActionTextButton = withActionButton(TextButton, ({ title }) => ({ label: title }));

export default ActionTextButton;
