import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FlatList } from 'react-native';

import { callIfFunction } from '../utils';
import LinkButton from '../Button/LinkButton';
import withContentSibling from '../withContentSibling';

import BasicSelectControl from './BasicSelectControl';
import { defaultListKeyExtractor, defaultValueComparator } from './utils';
import { selectStyles } from './styles';

import Area from '../Area/Area';
import VAnchoringModal from '../Modal/VAnchoringModal';
import { PLACEMENT_TOP, PLACEMENT_BOTTOM } from '../constants';

export const DropDownContent = ({ x, y, width, children, onRequestClose, ...props }) => (
  <VAnchoringModal x={x} y={y} placement={PLACEMENT_BOTTOM} onRequestClose={onRequestClose}>
    <Area contentContainerStyle={{ minWidth: width, flexGrow: 0 }} {...props}>
      {children}
    </Area>
  </VAnchoringModal>
);

export const DropUpContent = ({ x, y, width, children, onRequestClose, ...props }) => (
  <VAnchoringModal x={x} y={y} placement={PLACEMENT_TOP} onRequestClose={onRequestClose}>
    <Area contentContainerStyle={{ minWidth: width, flexGrow: 0 }} {...props}>
      {children}
    </Area>
  </VAnchoringModal>
);

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
      style={{
        flexGrow: 0,
        alignSelf: 'stretch',
      }}
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

const dropDownContentRenderer = (props, close) => {
  const { dropUp, x, y, width, height, children, contentContainerStyle } = props;

  if (!close) {
    throw new Error(
      'Content renderer function requires second argument to be a function to dismiss content.',
    );
  }

  const ContentContainer = dropUp ? DropUpContent : DropDownContent;

  return (
    <ContentContainer
      style={contentContainerStyle}
      onRequestClose={close}
      x={x}
      y={dropUp ? y : y + height}
      width={width}
    >
      {callIfFunction(children, props, close)}
    </ContentContainer>
  );
};

const DropDownView = withContentSibling(
  BasicSelectControl,
  dropDownContentRenderer,
  'DropDownView',
);

class DropDown extends Component {
  state = {};

  buttonView = null;

  handleReference = (ref) => {
    this.buttonView = ref;
  };

  handleMeasure = (fx, fy, width, height, x, y, callback) => {
    this.setState({ x, y, width, height }, callback);
  };

  handleLayout = ({
    nativeEvent: {
      layout: { x, y, width, height },
    },
  }) => {
    if (this.buttonView) {
      this.buttonView.measure(this.handleMeasure);
    } else {
      this.setState({ x, y, width, height });
    }
  };

  mapContentProps = (contentProps, setContentProps) => {
    this.buttonView.measure((fx, fy, width, height, x, y) => {
      this.handleMeasure(fx, fy, width, height, x, y);
      setContentProps({ ...contentProps, width, height, x, y });
    });
  };

  render() {
    return (
      <DropDownView
        ref={this.handleReference}
        {...this.props}
        mapContentProps={this.mapContentProps}
        onLayout={this.handleLayout}
      />
    );
  }
}

DropDown.propTypes = {
  ...BasicSelectControl.propTypes,
  ...DropDownView.propTypes,
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
  showContent: PropTypes.func,
};

DropDown.defaultProps = {
  ...BasicSelectControl.defaultProps,
  ...DropDownView.defaultProps,
  selectedItem: undefined,
  children: defaultListRenderer,
  keyExtractor: defaultListKeyExtractor,
  itemRenderer: defaultListItemRenderer,
  valueComparator: defaultValueComparator,
  contentContainerStyle: undefined,
  showContent: undefined,
};

export default DropDown;
