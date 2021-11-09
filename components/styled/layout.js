import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <Main>
      <Fixed>
        <Header />
      </Fixed>
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 768px;
  display: block;
  margin: 0 auto;
  padding: 100px 1vw;
  height: 85vh;
  /* display: flex; */
`;

const Fixed = styled.div`
  position: fixed;
  width: 100%;
  z-index: 1;
  backdrop-filter: blur(10px);
`;
