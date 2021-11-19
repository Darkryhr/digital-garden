import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconButton } from './styled/button';
import { ContentWrapper } from './styled/LayoutStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper height='90px'>
        <p>Gabriel Lellouche &copy; 2021</p>
        <div>
          <IconButton whileHover={{ scale: 1.1, color: '#fb8b24' }}>
            <a href='https://github.com/Darkryhr'>
              <FaGithub />
            </a>
          </IconButton>
          <IconButton whileHover={{ scale: 1.1, color: '#fb8b24' }}>
            <a href='https://www.linkedin.com/in/gabriel-lellouche'>
              <FaLinkedin />
            </a>
          </IconButton>
        </div>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  padding: 1em;
  width: 100%;
  border-top: 1px solid rgba(128, 100, 100, 0.37);
`;
