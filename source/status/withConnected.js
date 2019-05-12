import React, { Component } from 'react';
import { NetInfo } from 'react-native';
// import NetInfo from '@react-native-community/netinfo';

import { getComponentName } from '../utils';

const withConnected = (WrappedComponent, hideWhenNotAvailable = true, displayName = '') => {
  class Wrapper extends Component {
    constructor(props) {
      super(props);

      this.state = { available: false, connected: false };

      this.init();
    }

    async init () {
      const connected = await NetInfo.isConnected.fetch();

      NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectedChange);
      this.handleConnectedChange(connected);
    }

    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectedChange);
    }

    handleConnectedChange = (connected) => {
      this.setState({
        available: true,
        connected,
      });
    };

    render() {
      const { available, connected } = this.state;

      if (hideWhenNotAvailable && !available) {
        return null;
      }

      return <WrappedComponent {...this.props} connected={connected} />;
    }
  }

  Wrapper.displayName = displayName || `withConnected(${getComponentName(WrappedComponent)})`;

  return Wrapper;
};

export default withConnected;
