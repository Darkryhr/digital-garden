import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  * {
  color: ${({ theme }) => theme.colors.text};
  }

  body {
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
    background:${({ theme }) => theme.colors.primary};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    color: ${({ theme }) => theme.colors.text};
  }

  ::-webkit-scrollbar {
    width:7px;
  }
  
  ::-webkit-scrollbar-track {
    background:${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background:${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    &:hover {
      background:${({ theme }) => theme.colors.accent};
    }
  }
`;
