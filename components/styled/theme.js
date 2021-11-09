import { ThemeProvider } from 'styled-components';

const theme = {
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

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
