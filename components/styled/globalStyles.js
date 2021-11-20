import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.primary.base};
    color: ${({ theme }) => theme.colors.text.base};
    transition: all 0.50s linear;
  }
  a {
  color: ${({ theme }) => theme.colors.text.base};

  }
  `;
