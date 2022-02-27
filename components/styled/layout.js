import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../header/Header';
import { Container } from './LayoutStyles';
import { breakpoint } from '@components/styled/breakpoints';

const Layout = ({ children, toggleTheme }) => {
  return (
    <Main>
      <Header toggleTheme={toggleTheme} />
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
  @media (${breakpoint.device.sm}) {
    padding: 0 7vw;
    padding-top: 100px;
  }
  @media (${breakpoint.device.lg}) {
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

  @media (${breakpoint.device.lg}) {
    left: 0;
    margin-left: 0;
  }
`;
