export const defaultListKeyExtractor = ({ label }) => label;
export const defaultValueComparator = (item1, item2) =>
  Boolean(item1 && item2 && item1.value === item2.value);
