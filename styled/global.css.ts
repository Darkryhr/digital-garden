import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  -ms-overflow-style: none; 
  scrollbar-width: none; 
  }

  body {
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.30s linear;
    background:${({ theme }) => theme.colors.primary};
    /* background-image: radial-gradient(${({ theme }) =>
      theme.colors.secondary} 1px, transparent 0);
    background-size: 30px 30px; */
    overflow-x: hidden;
  font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;

  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    color: ${({ theme }) => theme.colors.text};
  }

  strong {
    font-weight: 600;
  }

  ::-webkit-scrollbar {
    width: 3px;
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
