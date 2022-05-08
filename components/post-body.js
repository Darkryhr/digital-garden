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
  padding: 1.6rem 3rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary + '40'};
  border-radius: 5px;
  @media (${breakpoint.device.sm}) {
    padding: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: 0;
  }
`;

const MarkdownStyles = styled.article`
  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.65em;
    font-size: 1.05em;
    padding-top: 0.4rem;
    letter-spacing: 0.4px;
    &:last-child {
      padding-bottom: 0;
    }
    @media (${breakpoint.device.sm}) {
      font-size: 0.85em;
    }
  }
  h2 {
    font-family: Poppins, sans-serif;
    font-weight: 700;
    padding: 2rem 0 0.5rem 0;
    font-size: 2rem;
    line-height: 1.4;
    @media (${breakpoint.device.sm}) {
      font-size: 1.5rem;
    }
    @media (${breakpoint.device.xs}) {
      font-size: 1.1rem;
    }
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
    line-height: 1;
    padding: 2rem 0 0.5rem 0;
    font-size: 1.5rem;
    @media (${breakpoint.device.sm}) {
      font-size: 1.2rem;
    }
    @media (${breakpoint.device.xs}) {
      font-size: 0.9rem;
    }
  }

  h2:after {
    content: '';
    display: block;
    width: 25px;
    margin: 1.45rem 0 0.25rem 0;
    padding-top: 4px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 3px;
    margin-left: 1px;
    @media (${breakpoint.device.sm}) {
      margin: 1rem 0 0 0;
    }
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
