import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text/Text';
import { TabButtonTop, TabButtonBottom } from '../Button/Tab';
import HRule, { HIRule } from '../Rule/HRule';

import { HSelectGroup } from './SelectGroup';
import { defaultValueComparator } from './utils';
import { tabBarStyles } from './styles';

/*
<TabBarTop
  tabs={[
    { value: 1, label: 'First' },
    { value: 2, label: 'Second' },
    { value: 3, label: 'Third' },
    { value: 4, label: 'Fourth' },
  ]}
  currentTab={this.state.selectedItem}
  onChange={(item) => this.setState({ selectedItem: item })}
/>
<TabBarBottom
  tabs={[
    { value: 1, label: 'First' },
    { value: 2, label: 'Second' },
    { value: 3, label: 'Third' },
    { value: 4, label: 'Fourth' },
  ]}
  currentTab={this.state.selectedItem}
  onChange={(item) => this.setState({ selectedItem: item })}
  tabStyle={{ flex: 1 }}
/>
*/

const createTabRenderer = (TabButton) => (
  { value: { value, label }, selected, onSelect },
  { tabStyle },
) => {
  let labelView = label;

  if (typeof label === 'string') {
    labelView = <Text style={{ marginHorizontal: 5 }}>{label}</Text>;
  }

  return (
    <TabButton key={value} onPress={onSelect} selected={selected} style={tabStyle}>
      {labelView}
    </TabButton>
  );
};

const tabButtonTopRenderer = createTabRenderer(TabButtonTop);

const tabButtonBottomRenderer = createTabRenderer(TabButtonBottom);

export const TabBarTop = ({ style, tabs, currentTab, ...props }) => (
  <HSelectGroup
    values={tabs}
    currentValue={currentTab}
    itemRenderer={tabButtonTopRenderer}
    {...props}
    style={style ? [tabBarStyles.top, style] : tabBarStyles.top}
  >
    <HIRule style={tabBarStyles.topRule} />
  </HSelectGroup>
);

TabBarTop.propTypes = {
  tabs: PropTypes.array.isRequired,
  valueComparator: PropTypes.func,
  currentTab: PropTypes.any,
  tabStyle: PropTypes.any,
  style: PropTypes.any,
};

TabBarTop.defaultProps = {
  valueComparator: defaultValueComparator,
  currentTab: undefined,
  tabStyle: undefined,
  style: undefined,
};

export const TabBarBottom = ({ tabs, currentTab, ...props }) => (
  <HSelectGroup
    values={tabs}
    currentValue={currentTab}
    itemRenderer={tabButtonBottomRenderer}
    {...props}
  >
    <HRule style={tabBarStyles.bottomRule} />
  </HSelectGroup>
);

TabBarBottom.propTypes = {
  tabs: PropTypes.array.isRequired,
  valueComparator: PropTypes.func,
  currentTab: PropTypes.any,
  tabStyle: PropTypes.any,
};

TabBarBottom.defaultProps = {
  valueComparator: defaultValueComparator,
  currentTab: undefined,
  tabStyle: undefined,
};
