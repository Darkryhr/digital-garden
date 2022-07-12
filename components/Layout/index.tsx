import React from 'react';
import styled from 'styled-components';

import Footer from '@components/Footer';
import Header from '@components/Header';
import { Container, Divider } from '@components/shared';
import ScrollToTop from '@components/ScrollToTop';
import { breakpoint } from '@styled/breakpoints.css';

const Layout = ({ children, toggleTheme }) => {
  return (
    <Main>
      <HeaderWrapper>
        <Header toggleTheme={toggleTheme} />
      </HeaderWrapper>
      <BreakpointWrapper>
        <MainContentContainer>{children}</MainContentContainer>
        <Divider />
        <Footer />
        <ScrollToTop />
      </BreakpointWrapper>
    </Main>
  );
};

export default Layout;

const MainContentContainer = styled(Container)`
  padding-top: 70px;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BreakpointWrapper = styled.div`
  max-width: ${breakpoint.size.sm};
  width: 100%;
  margin: 0 auto;
`;

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  backdrop-filter: blur(12px);
  background: ${({ theme }) => `${theme.colors.primary}99`};
  box-shadow: inset 0 -1px 0 hsl(0deg 0% 100% / 10%);
`;

const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
`;
