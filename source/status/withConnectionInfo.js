import React, { Component } from 'react';
import { NetInfo, PermissionsAndroid } from 'react-native';

import { getComponentName } from '../utils';

export const OFFLINE_TYPE = 'none';

export const isOffline = ({ type } = {}) => type === OFFLINE_TYPE;

const withConnectionInfo = (WrappedComponent, hideWhenNotAvailable = true, displayName = '') => {
  class Wrapper extends Component {
    constructor(props) {
      super(props);

      this.state = { available: false, connectionInfo: null };
      this.init();
    }

    async init() {
      NetInfo.addEventListener('connectionChange', this.handleConnectionInfoChange);

      const info = await NetInfo.getConnectionInfo();

      this.handleConnectionInfoChange(info);
    }

    componentWillUnmount() {
      NetInfo.removeEventListener('connectionChange', this.handleConnectionInfoChange);
    }

    handleConnectionInfoChange = (connectionInfo) => {
      this.setState({
        available: true,
        connectionInfo,
      });
    };

    render() {
      const { available, connectionInfo } = this.state;

      if (hideWhenNotAvailable && !available) {
        return null;
      }

      return <WrappedComponent {...this.props} connectionInfo={connectionInfo} />;
    }
  }

  Wrapper.displayName = displayName || `withConnectionInfo(${getComponentName(WrappedComponent)})`;

  return Wrapper;
};

export default withConnectionInfo;
