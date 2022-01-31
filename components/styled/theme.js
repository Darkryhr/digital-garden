import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';

export const darkTheme = {
  colors: {
    primary: '#181818',
    secondary: '#333333',
    accent: '#fb8b24',
    text: '#fff',
    gradient: `
linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)
    `,
  },
};
export const lightTheme = {
  colors: {
    primary: '#F5F5F5',
    secondary: '#E0E0E0',
    accent: '#fb8b24',
    text: '#181818',
    gradient: `
    linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)
        `,
  },
};
