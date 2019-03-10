import PropTypes from 'prop-types';

import { callIfFunction } from '../utils';
import withConnected from './withConnected';

const Online = ({ connected, children, offlineRenderer }) => {
  if (connected) {
    return callIfFunction(children);
  }

  return callIfFunction(offlineRenderer);
};

Online.propTypes = {
  connected: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  offlineRenderer: PropTypes.func,
};

Online.defaultProps = { offlineRenderer: () => null };

export default withConnected(Online);
