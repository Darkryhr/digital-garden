import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.50s linear;
background:${({ theme }) => theme.colors.primary}
  }
  a {
  color: ${({ theme }) => theme.colors.secondary};
  }
  button {
  color: ${({ theme }) => theme.colors.secondary};

  }
  `;
