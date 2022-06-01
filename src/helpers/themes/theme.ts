import { ITheme } from './interface';

export const defaultTheme: ITheme = {
  fontFamily: "'Open Sans', sans-serif",
  fontSize: '16px',
  primaryColour: '#3C96F0',
  greenColor: '#40BE46',
  secondaryColour: '#0053E9',
  backgroundColorGrey: '#F5F5F5', // Background color used f.e. in datepickers top part
  backgroundColorDark: '#0053E9', // Background color dark
  backgroundColorLight: '#ffffff', // Background color main and light
  backgroundColorChart: '#ffffff', // Background color for charts
  backgroundColorModerateDark: 'white', // Background color used in header bottom part
  buttonCancel: '#d9d9d9', // Background color for cancel buttons
  buttonDisabled: '#787878', // Background color for disabled buttons
  textColorPrimary: 'black', // Main text color
  textColorSecondary: '#cecece', // Secondary text color
  textColorDark: '#212121', // Dark text color
  textColorGray: '#808080', // Dark text color
  textColorLight: '#FFF', // Light text color
  textColorError: '#ff0000', // Error text color
  textColorButtonLight: '#FFF', // Button light text color
  checkboxInactive: '#eeeeee', // Checkbox and radiobuttons inactive background color
  dropdownHover: '#f7f7f9', // Dropdown hover background color
  borderColor: '#e9e9e9', // Main borders color
  borderColorDark: '#aaa9a9',
  borderColorLight: '#fff', // Light borders color
  borderRadius: '3px', // Border radius for everything
  errorMessage: '#ff4444',
  warningMessage: '#ffad33',
  successMessage: '#2FBB68',
  textMessage: '#ffffff',
  primaryButton: {
    fontSize: '16px',
    fontWeight: '700',
    borderRadius: '3px', 
    background: 'linear-gradient(0deg, rgba(42,178,49,1) 0%, rgba(65,207,72,1) 100%)',
    backgroundHover: 'linear-gradient(0deg, rgba(172,255,176,1) 0%, rgba(222,255,224,1) 100%)',
    backgroundActive: '#FFF',
    backgroundDisabled: 'linear-gradient(0deg, rgba(120,120,120,1) 0%, rgba(159,159,159,1) 100%);',
    textColorButton: '#FFF',
    textColorButtonHover: '#40BE46',
    textColorButtonActive: '#40BE46',
  },
  modalStyles: {
    borderRadius: '12px',
    modalBackdrop: '#312F2F',
    modalFade: 'rgba(11, 11, 11, 0.7)'
  }
};
