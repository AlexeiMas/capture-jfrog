export interface IPrimaryButton {
  fontSize?: string;
  fontWeight?: string;
  borderRadius?: string;
  background?: string;
  backgroundHover?: string;
  backgroundActive?: string;
  backgroundDisabled?: string;
  textColorButton?: string;
  textColorButtonHover?: string;
  textColorButtonActive?: string;
}

export interface IModalStyles {
  modalBackdrop?: string;
  borderRadius?: string;
  modalFade?: string;
}

export interface ITheme {
  fontFamily?: string;
  fontSize?: string;
  primaryColour?: string;
  greenColor?: string;
  secondaryColour?: string;
  backgroundColorGrey?: string;
  backgroundColorDark?: string;
  backgroundColorLight?: string;
  backgroundColorChart?: string;
  backgroundColorModerateDark?: string;
  modalBackdrop?: string;
  textColorPrimary?: string;
  textColorSecondary?: string;
  textColorDark?: string;
  textColorGray?: string;
  textColorLight?: string;
  textColorError?: string;
  textColorButtonLight?: string;
  checkboxInactive?: string;
  dropdownHover?: string;
  buttonCancel?: string;
  buttonDisabled?: string;
  borderColor?: string;
  borderColorLight?: string;
  borderRadius?: string;
  errorMessage?: string;
  warningMessage?: string;
  successMessage?: string;
  textMessage?: string;
  borderColorDark?: string;
  titleForInvoicesTab?: string;
  titleForTransactionTab?: string;
  primaryButton: IPrimaryButton;
  modalStyles: IModalStyles;
}
