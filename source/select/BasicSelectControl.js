import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';

import Text from '../Text/Text';
import Area from '../Area/Area';
import DropDownButton from '../Button/DropDownButton';

import { selectStyles } from './styles';

const defaultSelectedItemRenderer = ({ selectedItem, placeholder }) => {
  let label;

  if (selectedItem) {
    ({ label } = selectedItem);
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

const BasicSelectControl = forwardRef(
  ({ showContent, selectedItemRenderer, style, ...props }, ref) => (
    <TouchableWithoutFeedback
      {...props}
      style={selectStyles.touchable}
      onPress={() => showContent(props)}
    >
      <View ref={ref} style={style ? [selectStyles.wrapper, style] : selectStyles.wrapper}>
        <Area style={selectStyles.area} contentContainerStyle={selectStyles.areaContent}>
          {selectedItemRenderer(props)}
        </Area>
        <DropDownButton onPress={() => showContent(props)} />
      </View>
    </TouchableWithoutFeedback>
  ),
);

BasicSelectControl.propTypes = {
  showContent: PropTypes.func.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  selectedItemRenderer: PropTypes.func,
};

BasicSelectControl.defaultProps = {
  placeholder: undefined,
  selectedItemRenderer: defaultSelectedItemRenderer,
};

export default BasicSelectControl;
