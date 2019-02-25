import React from 'react';
import PropTypes from 'prop-types';
import { HGroup, VGroup } from '../Form/Group';

export const SelectGroup = (props) => {
  const { itemRenderer, onChange, currentValue, valueComparator, values } = props;

  return values.map((value, index) =>
    itemRenderer(
      {
        value,
        selected: currentValue !== undefined && valueComparator(currentValue, value),
        onSelect: () => onChange(value, index),
      },
      props,
    ),
  );
};

SelectGroup.propTypes = {
  itemRenderer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  currentValue: PropTypes.any,
  valueComparator: PropTypes.func,
};

SelectGroup.defaultProps = {
  currentValue: undefined,
  valueComparator: (current, listItem) => current === listItem,
};

export const HSelectGroup = ({ style, children, ...props }) => (
  <HGroup style={style}>
    <SelectGroup {...props} />
    {children}
  </HGroup>
);

HSelectGroup.propTypes = {
  ...SelectGroup.propTypes,
  children: PropTypes.node,
  style: PropTypes.any,
};

HSelectGroup.defaultProps = {
  ...SelectGroup.defaultProps,
  children: undefined,
  style: undefined,
};

export const VSelectGroup = ({ style, children, ...props }) => (
  <VGroup style={style}>
    <SelectGroup {...props} />
    {children}
  </VGroup>
);

VSelectGroup.propTypes = {
  ...SelectGroup.propTypes,
  children: PropTypes.node,
  style: PropTypes.any,
};

VSelectGroup.defaultProps = {
  ...SelectGroup.defaultProps,
  children: undefined,
  style: undefined,
};

export default SelectGroup;
