import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../header/Header';
import { Container } from './LayoutStyles';

const Layout = ({ children, toggleTheme }) => {
  return (
    <Main>
      <Fixed>
        <Header toggleTheme={toggleTheme} />
      </Fixed>
      <Wrapper>
        <Container>{children}</Container>
        <Footer />
      </Wrapper>
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 0 7vw;
    padding-top: 100px;
  }
  @media (max-width: 1200px) {
    padding: 0 7vw;
  }
`;

const Fixed = styled.div`
  position: fixed;
  max-width: 1200px;
  width: 100%;
  z-index: 999;
  top: 0;
  backdrop-filter: blur(10px);
  left: 50%;
  margin-left: -600px;

  @media (max-width: 1200px) {
    left: 0;
    margin-left: 0;
  }
`;
