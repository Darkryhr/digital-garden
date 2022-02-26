import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  * {
  color: ${({ theme }) => theme.colors.text};
  }

  body {
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
    background:${({ theme }) => theme.colors.primary};
    background-image: radial-gradient(${({ theme }) =>
      theme.colors.secondary} 1px, transparent 0);
    background-size: 40px 40px;
    background-position: 22px 22px
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    color: ${({ theme }) => theme.colors.text};
  }

  ::-webkit-scrollbar {
    width:2px;
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
