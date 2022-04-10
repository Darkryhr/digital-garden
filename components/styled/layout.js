import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../header/Header';
import { Container } from './LayoutStyles';
import { breakpoint } from '@components/styled/breakpoints';

const Layout = ({ children, toggleTheme }) => {
  return (
    <Main>
      <HeaderWrapper>
        <Header toggleTheme={toggleTheme} />
      </HeaderWrapper>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderWrapper = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  @media (${breakpoint.device.lg}) {
    /* padding: 0 2vw; */
  }
`;
