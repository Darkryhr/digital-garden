import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';

export const darkTheme = {
  colors: {
    primary: {
      base: '#181818',
      darker: '#212529',
      lighter: '#1f363d',
    },
    accent: {
      base: '#fb8b24',
      darker: '#f7760d',
      lighter: '#f9923e',
    },
    text: {
      base: '#f4f4f4',
      darker: '#efefef',
      lighter: '#ffffff',
    },
  },
};

export const lightTheme = {
  colors: {
    primary: {
      base: '#f4f4f4',
      darker: '#efefef',
      lighter: '#ffffff',
    },
    accent: {
      base: '#fb8b24',
      darker: '#f7760d',
      lighter: '#f9923e',
    },
    text: {
      base: '#181818',
      darker: '#212529',
      lighter: '#1f363d',
    },
  },
};
