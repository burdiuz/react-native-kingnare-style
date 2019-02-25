import React from 'react';
import PropTypes from 'prop-types';

import { Radio } from '../Button/Radio';

import { SelectGroup, VSelectGroup, HSelectGroup } from './SelectGroup';
import { defaultValueComparator } from './utils';

/*
<HRadioGroup
  items={[
    { value: 1, label: 'First' },
    { value: 2, label: 'Second' },
    { value: 3, label: 'Third' },
    { value: 4, label: 'Fourth' },
  ]}
  selectedItem={this.state.selectedItem}
  onChange={(item) => this.setState({ selectedItem: item })}
/>
<VRadioGroup
  items={[
    { value: 1, label: 'First' },
    { value: 2, label: 'Second' },
    { value: 3, label: 'Third' },
    { value: 4, label: 'Fourth' },
  ]}
  selectedItem={this.state.selectedItem}
  onChange={(item) => this.setState({ selectedItem: item })}
/>
*/

const radioGroupButtonRenderer = ({ value: { value, label }, selected, onSelect }) => (
  <Radio key={value} label={label} onPress={onSelect} selected={selected} />
);

const RadioGroup = ({ items, selectedItem, ...props }) => (
  <SelectGroup
    values={items}
    currentValue={selectedItem}
    itemRenderer={radioGroupButtonRenderer}
    {...props}
  />
);

RadioGroup.propTypes = {
  items: PropTypes.array.isRequired,
  valueComparator: PropTypes.func,
  selectedItem: PropTypes.any,
};

RadioGroup.defaultProps = {
  valueComparator: defaultValueComparator,
  selectedItem: undefined,
};

export const HRadioGroup = ({ items, selectedItem, ...props }) => (
  <HSelectGroup
    values={items}
    currentValue={selectedItem}
    itemRenderer={radioGroupButtonRenderer}
    {...props}
  />
);

HRadioGroup.propTypes = {
  items: PropTypes.array.isRequired,
  valueComparator: PropTypes.func,
  selectedItem: PropTypes.any,
};

HRadioGroup.defaultProps = {
  valueComparator: defaultValueComparator,
  selectedItem: undefined,
};

export const VRadioGroup = ({ items, selectedItem, ...props }) => (
  <VSelectGroup
    values={items}
    currentValue={selectedItem}
    itemRenderer={radioGroupButtonRenderer}
    {...props}
  />
);

VRadioGroup.propTypes = {
  items: PropTypes.array.isRequired,
  valueComparator: PropTypes.func,
  selectedItem: PropTypes.any,
};

VRadioGroup.defaultProps = {
  valueComparator: defaultValueComparator,
  selectedItem: undefined,
};

export default RadioGroup;
