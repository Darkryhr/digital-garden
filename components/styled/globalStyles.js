import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.50s linear;
  }
  a {
  color: ${({ theme }) => theme.colors.secondary};
  }
  button {
  color: ${({ theme }) => theme.colors.secondary};

  }
  svg {
  color: ${({ theme }) => theme.colors.secondary};

  }
  `;
