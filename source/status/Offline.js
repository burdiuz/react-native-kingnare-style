import PropTypes from 'prop-types';

import { callIfFunction } from '../utils';
import withConnected from './withConnected';

const Offline = ({ connected, children, onlineRenderer }) => {
  if (connected) {
    return callIfFunction(onlineRenderer);
  }

  return callIfFunction(children);
};

Offline.propTypes = {
  connected: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  onlineRenderer: PropTypes.func,
};

Offline.defaultProps = { onlineRenderer: () => null };

export default withConnected(Offline);
