export const defaultListKeyExtractor = ({ label }) => label;
export const defaultValueComparator = ({ value: value1 } = {}, { value: value2 } = {}) =>
  value1 === value2;
