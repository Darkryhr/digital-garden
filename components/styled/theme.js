import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';

export const darkTheme = {
  colors: {
    primary: '#181818',
    secondary: '#f4f4f4',
    accent: '#fb8b24',
    text: '#fff',
    gradient: `
linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)
    `,
  },
};
export const lightTheme = {
  colors: {
    primary: '#f4f4f4',
    secondary: '#2D2D44',
    accent: '#fb8b24',
    text: '#181818',
  },
};
