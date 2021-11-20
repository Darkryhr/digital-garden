import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
  }
  a {
  color: ${({ theme }) => theme.colors.text};
  }
  button {
  color: ${({ theme }) => theme.colors.text};

  }
  svg {
  color: ${({ theme }) => theme.colors.text};

  }
  `;
