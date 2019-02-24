import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import isFunction from '@actualwave/is-function';

import { ELEMENT_MIN_SIZE } from './constants';
import { DropDownIcon, DropDownSelectedIcon, DropDownDisabledIcon } from './assets/DropDownIcon';
import Text from './Text/Text';
import Area from './Area/Area';
import { BlockingModal } from './Modal/Modal';
import { bigModalDefaultStyle } from './Modal/utils';
import { BmpIconButton } from './Button/IconButton';
import LinkButton from './Button/LinkButton';
import { iconButton } from './Button/styles';
import withContentSibling from './withContentSibling';

const {
  defaultProps: { iconRenderer: defaultBmpIconRenderer },
} = BmpIconButton;

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    alignItems: 'stretch',
    minWidth: ELEMENT_MIN_SIZE * 3,
    height: ELEMENT_MIN_SIZE,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  area: {
    flex: 1,
  },
  areaContent: {
    paddingLeft: 2,
  },
  list: {
    flex: 1,
    alignSelf: 'stretch',
  },
  listItem: {
    alignItems: 'stretch',
    padding: 4,
  },
  listItemSelectedLabel: {
    textDecorationLine: 'none',
  },
});

const dropDownIconRenderer = (props) => {
  const Icon = defaultBmpIconRenderer(props);

  return <Icon style={iconButton.icon} />;
};

export const DropDownButton = (props) => (
  <BmpIconButton
    iconRenderer={dropDownIconRenderer}
    icon={DropDownIcon}
    selectedIcon={DropDownSelectedIcon}
    disabledIcon={DropDownDisabledIcon}
    {...props}
  />
);

const defaultSelectedItemRenderer = ({ selectedItem, placeholder }) => {
  let label;

  if (selectedItem) {
    label = selectedItem.label;
  } else if (placeholder) {
    label = placeholder;
  }

  if (!label) {
    return null;
  }

  if (typeof label === 'string') {
    return <Text numberOfLines={1}>{label}</Text>;
  }

  return label;
};

export const SelectControl = ({ showContent, selectedItemRenderer, ...props }) => {
  return (
    <TouchableWithoutFeedback
      {...props}
      style={styles.touchable}
      onPress={() => showContent(props)}
    >
      <View style={styles.wrapper}>
        <Area style={styles.area} contentContainerStyle={styles.areaContent}>
          {selectedItemRenderer(props)}
        </Area>
        <DropDownButton onPress={() => showContent(props)} />
      </View>
    </TouchableWithoutFeedback>
  );
};

SelectControl.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  selectedItemRenderer: PropTypes.func,
};

SelectControl.defaultProps = {
  selectedItemRenderer: defaultSelectedItemRenderer,
};

const defaultListRenderer = (props, close) => {
  const { items, keyExtractor, itemRenderer } = props;

  return (
    <FlatList
      style={styles.list}
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
      style={styles.listItem}
      labelStyle={selected ? undefined : styles.listItemSelectedLabel}
    />
  );
};

const defaultListKeyExtractor = ({ label }) => label;
const defaultValueComparator = ({ value: value1 } = {}, { value: value2 } = {}) =>
  value1 === value2;

const selectContentRenderer = (props, close) => {
  const { children, contentContainerStyle } = props;

  if (!close) {
    throw new Error(
      'Content renderer function requires second argument to be a function to dismiss content.',
    );
  }

  return (
    <BlockingModal style={contentContainerStyle} onRequestClose={close}>
      {isFunction(children) ? children(props, close) : children}
    </BlockingModal>
  );
};

const Select = withContentSibling(SelectControl, selectContentRenderer, 'Select');

Select.propTypes = {
  ...Select.propTypes,
  ...SelectControl.propTypes,
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
  ...Select.defaultProps,
  ...SelectControl.defaultProps,
  selectedItem: undefined,
  children: defaultListRenderer,
  keyExtractor: defaultListKeyExtractor,
  itemRenderer: defaultListItemRenderer,
  valueComparator: defaultValueComparator,
  contentContainerStyle: bigModalDefaultStyle,
};

export default Select;
