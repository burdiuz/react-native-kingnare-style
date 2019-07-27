import React from 'react';
import { View } from 'react-native';

import withLayoutProps from '../withLayoutProps';

const Layout = withLayoutProps(View, true, true, 'Layout');

export default Layout;
