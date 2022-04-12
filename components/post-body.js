import React from 'react';
import styled from 'styled-components';
import { breakpoint } from './styled/breakpoints';

const PostBody = ({ content }) => {
  return (
    <BodyWrapper>
      <MarkdownStyles dangerouslySetInnerHTML={{ __html: content }} />
    </BodyWrapper>
  );
};

export default PostBody;

const BodyWrapper = styled.article`
  padding: 4rem 3rem;
  background-color: ${({ theme }) => theme.colors.secondary + '40'};
  border-radius: 10px;
  @media (${breakpoint.device.sm}) {
    padding: 2rem 1rem;
  }
`;

const MarkdownStyles = styled.article`
  * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: 25px;
    font-size: 16px;
    padding-top: 0.4rem;
    &:last-child {
      padding-bottom: 0;
    }
  }
  h2 {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    font-size: 2rem;
    padding: 2rem 0 0.5rem 0;
  }
  h1 {
    font-weight: 700;
    font-size: 22px;
  }
  hr {
    opacity: 0.2;
  }
  h3 {
    font-weight: 600 !important;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 20px;
    line-height: 1;
    padding: 1.2rem 0 0.3rem 0;
  }

  h2:after {
    content: '';
    display: block;
    width: 15px;
    margin-top: 1rem;
    padding-top: 6px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 3px;
    margin-left: 3px;
  }

  ul {
    list-style: disc !important;
  }
  li {
    display: list-item;
    display: block;
    padding: 0.5rem;
    line-height: 1.3;
    &::before {
      font-weight: 800;
      content: '· ';
    }
  }
  em {
    font-weight: 600;
  }
  strong {
    font-weight: 700;
  }
  code {
    font-family: monospace;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.accent};
    padding: 0.3rem;
    border-radius: 5px;
  }
  blockquote {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    margin-top: 1.3rem;
    overflow-wrap: break-word;
    padding: 0.8rem 1rem 1.5rem 1rem;
  }
  blockquote > p {
    padding-left: 0.5rem;
  }
`;
