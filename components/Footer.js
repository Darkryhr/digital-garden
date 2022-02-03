import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IconButton } from './styled/button';
import { ContentWrapper } from './styled/LayoutStyles';
import Contact from './Contact';
import { Heading4 } from './styled/typography';

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <Heading4>Gabriel Lellouche &copy; {new Date().getFullYear()}</Heading4>
        <SocialWrapper>
          <IconButton whileHover={{ scale: 1.1, color: '#fb8b24' }}>
            <a
              href='https://github.com/Darkryhr'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub />
            </a>
          </IconButton>
          <IconButton whileHover={{ scale: 1.1, color: '#fb8b24' }}>
            <a
              href='https://www.linkedin.com/in/gabriel-lellouche'
              rel='noreferrer'
              target='_blank'
            >
              <FaLinkedin />
            </a>
          </IconButton>
          <IconButton whileHover={{ scale: 1.1, color: '#fb8b24' }}>
            <a
              href='https://twitter.com/GabrielAintReal'
              rel='noreferrer'
              target='_blank'
            >
              <FaTwitter />
            </a>
          </IconButton>
        </SocialWrapper>
      </Wrapper>
      <Contact />
    </FooterWrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1.4rem;
  @media (max-width: 900px) {
    align-items: center;
    padding-top: 0;
  }
`;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid rgba(128, 100, 100, 0.37);
  padding: 1rem 9vw;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    /* flex-direction: column; */
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 0;
  max-width: 150px;
  width: 100%;
  @media (max-width: 900px) {
    padding: 1.4rem 0;
  }
`;
