import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconButton } from './styled/button';
import { ContentWrapper } from './styled/LayoutStyles';
import Contact from './Contact';
import { Heading4 } from './styled/typography';

const Footer = () => {
  return (
    <FooterWrapper>
      <Contact />
      <Wrapper>
        <Heading4>Gabriel Lellouche &copy; 2021</Heading4>
        <div>
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
        </div>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  width: 100%;
  border-top: 1px solid rgba(128, 100, 100, 0.37);
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
