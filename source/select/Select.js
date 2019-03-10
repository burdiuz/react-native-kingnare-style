import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { callIfFunction } from '../utils';
import { BlockingModal } from '../Modal/Modal';
import { bigModalDefaultStyle } from '../Modal/utils';
import LinkButton from '../Button/LinkButton';
import withContentSibling from '../withContentSibling';

import BasicSelectControl from './BasicSelectControl';
import { defaultListKeyExtractor, defaultValueComparator } from './utils';
import { selectStyles } from './styles';

/*
<Select
  items={[
    { value: 1, label: 'First' },
    { value: 2, label: 'Second' },
    { value: 3, label: 'Third' },
    { value: 4, label: 'Fourth' },
  ]}
  selectedItem={this.state.selectedItem}
  placeholder="Select item"
  onChange={(item) => this.setState({ selectedItem: item })}
/>
*/

const defaultListRenderer = (props, close) => {
  const { items, keyExtractor, itemRenderer } = props;

  return (
    <FlatList
      style={selectStyles.list}
      data={items}
      keyExtractor={keyExtractor}
      renderItem={(data) => itemRenderer(data, props, close)}
    />
  );
};

const defaultListItemRenderer = ({ item }, { onChange, selectedItem, valueComparator }, close) => {
  const selected = valueComparator(item, selectedItem);

  return (
    <LinkButton
      label={item.label}
      onPress={() => {
        onChange(item);
        close();
      }}
      disabled={selected}
      style={selectStyles.listItem}
      labelStyle={selected ? undefined : selectStyles.listItemSelectedLabel}
    />
  );
};

const selectContentRenderer = (props, close) => {
  const { children, contentContainerStyle } = props;

  if (!close) {
    throw new Error(
      'Content renderer function requires second argument to be a function to dismiss content.',
    );
  }

  return (
    <BlockingModal style={contentContainerStyle} onRequestClose={close}>
      {callIfFunction(children, props, close)}
    </BlockingModal>
  );
};

const Select = withContentSibling(BasicSelectControl, selectContentRenderer, 'Select');

Select.propTypes = {
  ...BasicSelectControl.propTypes,
  ...Select.propTypes,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  preferredModalWidth: PropTypes.number,
  preferredModalHeight: PropTypes.number,
  selectedItem: PropTypes.any,
  children: PropTypes.func,
  keyExtractor: PropTypes.func,
  itemRenderer: PropTypes.func,
  valueComparator: PropTypes.func,
  contentContainerStyle: PropTypes.any,
};

Select.defaultProps = {
  ...BasicSelectControl.defaultProps,
  ...Select.defaultProps,
  selectedItem: undefined,
  children: defaultListRenderer,
  keyExtractor: defaultListKeyExtractor,
  itemRenderer: defaultListItemRenderer,
  valueComparator: defaultValueComparator,
  contentContainerStyle: bigModalDefaultStyle,
};

export default Select;
