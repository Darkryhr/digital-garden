import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../header/Header';

const Layout = ({ children, toggleTheme }) => {
  return (
    <Main>
      <Fixed>
        <Header toggleTheme={toggleTheme} />
      </Fixed>
      <Wrapper>
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </Wrapper>
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  width: 100%;
  background: url('./bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  padding-top: 100px;
  @media (max-width: 768px) {
    padding: 0 7vw;
    padding-top: 100px;
  }
  /* display: flex; */
`;

const ContentWrapper = styled.div`
  min-height: calc(100vh - 230px);
`;

const Fixed = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  backdrop-filter: blur(10px);
`;
