import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import Contact from './Contact';
import { IconButton } from './styled/button';
import { breakpoint } from '@components/styled/breakpoints';
import { Logo } from './header/Header';
import { Muted } from './styled/typography';
const Footer = () => {
  const [themeIcon, setThemeIcon] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setThemeIcon(savedTheme);
  });

  return (
    <Wrapper>
      <ContentWrapper>
        <CopyWrapper>
          <LogoWrapper>
            <Logo theme={themeIcon} />
          </LogoWrapper>
          <Muted
            style={{
              marginBottom: '1rem',
              marginLeft: '0.7rem',
            }}
          >
            | &nbsp; Copyright &copy; {new Date().getFullYear()}
          </Muted>
        </CopyWrapper>
        <SocialWrapper>
          <IconButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href='https://github.com/Darkryhr'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub />
            </a>
          </IconButton>
          <IconButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href='https://www.linkedin.com/in/gabriel-lellouche'
              rel='noreferrer'
              target='_blank'
            >
              <FaLinkedin />
            </a>
          </IconButton>
          <IconButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href='https://twitter.com/GabrielAintReal'
              rel='noreferrer'
              target='_blank'
            >
              <FaTwitter />
            </a>
          </IconButton>
        </SocialWrapper>
      </ContentWrapper>
      <Contact />
    </Wrapper>
  );
};

export default Footer;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1.4rem;
  @media (${breakpoint.device.sm}) {
    align-items: center;
    padding-top: 0;
  }
`;

const LogoWrapper = styled.div`
  max-width: 80px;
`;

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${breakpoint.size.lg};
  margin: 0 auto;
  padding: 2rem 4rem;
  @media (${breakpoint.device.sm}) {
    flex-direction: column-reverse;
    padding: 2rem 1rem;

    /* flex-direction: column; */
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 0;
  max-width: 150px;
  width: 100%;
  @media (${breakpoint.device.sm}) {
    padding: 1.4rem 0;
  }
`;

const CopyWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;
