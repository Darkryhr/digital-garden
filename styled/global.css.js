import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  }

  body {
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.50s linear;
    background:${({ theme }) => theme.colors.primary};
    
    background-image: radial-gradient(${({ theme }) =>
      theme.colors.secondary} 1px, transparent 0);
    background-size: 40px 40px;
    background-position: 22px 22px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    color: ${({ theme }) => theme.colors.text};
  }

  strong {
    font-weight: 500;
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
