import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
background:${({ theme }) => theme.colors.primary};
  }
  a {
  color: ${({ theme }) => theme.colors.text};
  }
  button {
  color: ${({ theme }) => theme.colors.text};

  }
  `;
