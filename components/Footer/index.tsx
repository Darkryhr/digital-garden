import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

import Contact from '@components/Contact';
import { Logo, LogoType } from '@components/Logo';
import NowPlaying from '@components/NowPlaying';
import { IconButton, Muted } from '@components/shared';
import { breakpoint } from '@styled/breakpoints.css';

const Footer = () => {
  const [themeIcon, setThemeIcon] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setThemeIcon(savedTheme);
  });
  return (
    <Wrapper>
      <ContentWrapper>
        <CopyWrapper>
          <LogoWrapper>
            <LogoType theme={themeIcon} />
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
        <NowPlaying />
      </ContentWrapper>
      <Contact />
    </Wrapper>
  );
};

export default Footer;

const ContentWrapper = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  @media (${breakpoint.device.sm}) {
    align-items: center;
    padding-top: 0;
    width: 100%;
    max-width: 360px;
  }
`;

const LogoWrapper = styled.div`
  max-width: 30px;
`;

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${breakpoint.size.lg};
  margin: 0 auto;
  padding: 1rem 0 1.5rem 0;
  @media (${breakpoint.device.md}) {
    padding: 1rem 1rem 1.5rem 1rem;
  }
  @media (${breakpoint.device.sm}) {
    flex-direction: column-reverse;

    /* flex-direction: column; */
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 1.5rem 0;
  max-width: 150px;
  width: 100%;
  @media (${breakpoint.device.sm}) {
    padding: 1.4rem 0;
  }
`;

const CopyWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 1rem 0;
  @media (${breakpoint.device.md}) {
    margin-top: 1rem;
  }
`;
