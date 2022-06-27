import React from 'react';
import styled from 'styled-components';

import Footer from '@components/Footer';
import Header from '@components/Header';
import { Container } from '@components/shared';
import ScrollToTop from '@components/ScrollToTop';
import { Split, Split2 } from 'pages';
import { breakpoint } from '@styled/breakpoints.css';

const Layout = ({ children, toggleTheme }) => {
  return (
    <Main>
      <Header toggleTheme={toggleTheme} />
      {/* <HeaderWrapper>
      </HeaderWrapper> */}
      <Container>{children}</Container>
      {/* <Wrapper>
      </Wrapper> */}
      <Footer />
      {/* <FooterWrapper>
      </FooterWrapper> */}
      <ScrollToTop />
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
  max-width: ${breakpoint.size.sm};
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
`;
