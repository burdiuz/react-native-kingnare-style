import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { withStyles } from '../withStyle';

import { TabBarTop, TabBarBottom } from '../select/TabBar';
import { SwitchView } from './SwitchView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch',
  },
  content: {
    padding: 10,
  },
});

export const TabViewChild = ({ children }) => children;

TabViewChild.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TabViewChild.defaultProps = {
  children: undefined,
};

const TabViewChildrenView = ({
  top,
  bottom,
  selectedIndex,
  children,
  style,
  contentContainerStyle,
  contentContainerClass: Content,
}) => (
  <View style={style}>
    {top}
    <Content style={contentContainerStyle}>
      <SwitchView index={selectedIndex}>{children}</SwitchView>
    </Content>
    {bottom}
  </View>
);

TabViewChildrenView.propTypes = {
  children: PropTypes.node.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  top: PropTypes.node,
  bottom: PropTypes.node,
  style: PropTypes.any,
  contentContainerStyle: PropTypes.any,
  contentContainerClass: PropTypes.any, //  hould be an object when forwardRef() used
};

TabViewChildrenView.defaultProps = {
  top: undefined,
  bottom: undefined,
  style: undefined,
  contentContainerStyle: undefined,
  contentContainerClass: View,
};

export const TabViewChildren = withStyles(
  TabViewChildrenView,
  {
    style: styles.container,
    contentContainerStyle: styles.content,
  },
  'TabViewChildren',
);

TabViewChildren.Child = TabViewChild;

export const TabPlacement = {
  TOP: 0,
  BOTTOM: 1,
};

class TabView extends Component {
  static Child = TabViewChild;

  static propTypes = {
    placement: PropTypes.number,
  };

  static defaultProps = {
    placement: TabPlacement.TOP,
  };

  static getDerivedStateFromProps({ children }, { tabs: prevTabs = [] } = {}) {
    const list = children instanceof Array ? children : [children];

    return {
      tabs: list.map(({ props: { label } }, index) => {
        const prevItem = prevTabs[index];

        if (prevItem && label === prevItem.label) {
          return prevTabs[index];
        }

        return {
          label,
          value: index,
        };
      }),
    };
  }

  constructor(props) {
    super(props);

    this.state = { ...TabView.getDerivedStateFromProps(props), selected: 0 };
  }

  handleTabChange = ({ value }) => this.setState({ selected: value });

  render() {
    const { placement } = this.props;
    const { tabs, selected } = this.state;
    let top = null;
    let bottom = null;

    if (placement === TabPlacement.BOTTOM) {
      bottom = (
        <TabBarBottom currentTab={tabs[selected]} tabs={tabs} onChange={this.handleTabChange} />
      );
    } else {
      top = <TabBarTop currentTab={tabs[selected]} tabs={tabs} onChange={this.handleTabChange} />;
    }

    return <TabViewChildren top={top} bottom={bottom} selectedIndex={selected} {...this.props} />;
  }
}

export default TabView;
