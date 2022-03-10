import React from 'react';
import styled from 'styled-components';

const PostBody = ({ content }) => {
  return (
    <>
      <MarkdownStyles dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default PostBody;

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
    font-weight: 600;
    font-size: 22px;
    padding: 1rem 0;
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
    padding: 1.2rem 0 0.6rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  }
  ul {
    list-style: circle;
    margin-bottom: 1rem;
  }
  li {
    padding-bottom: 3px;
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
