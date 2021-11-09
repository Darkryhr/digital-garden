import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconButton } from './styled/button';

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <p>Gabriel Lellouche &copy; 2021</p>
        <SocialWrapper>
          <IconButton whileHover={{ scale: 1.1, color: '#fb8b24' }}>
            <FaGithub />
          </IconButton>
          <IconButton whileHover={{ scale: 1.1, color: '#fb8b24' }}>
            <FaLinkedin />
          </IconButton>
        </SocialWrapper>
      </ContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  max-width: 768px;
  padding: 1em;
  margin: 0 auto;
  border-top: 1px solid rgba(128, 100, 100, 0.37);
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`;

const SocialWrapper = styled.div``;
