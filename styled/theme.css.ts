import { Theme } from 'models/styled';

export const darkTheme: Theme = {
  colors: {
    primary: '#0a0a0b',
    secondary: '#1D1C21',
    accent: '#FF7F11',
    text: '#eaeaea',
    border: '#474747',
    gradient: `
  linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)
      `,
  },
};
export const lightTheme: Theme = {
  colors: {
    primary: '#FAFAFF',
    secondary: '#E0E0E0',
    accent: '#FF7F11',
    text: '#000000',
    border: '#C6CFD2',
    gradient: `
      linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)
          `,
  },
};
