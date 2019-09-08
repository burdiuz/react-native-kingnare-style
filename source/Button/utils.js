export const getButtonStyle = (
  { normal, disabled, selected, selectedDisabled },
  isDisabled = false,
  isSelected = false,
) => {
  if (isSelected) {
    return isDisabled ? selectedDisabled : selected;
  }

  return isDisabled ? disabled : normal;
};
