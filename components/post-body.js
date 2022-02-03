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

const MarkdownStyles = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: 1rem;
    line-height: 1.8;
    &:last-child {
      padding-bottom: 0;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
    padding: 1rem 0;
  }
  h1 {
    font-weight: 700;
    font-size: 24px;
  }
  hr {
    opacity: 0.2;
  }
  strong {
    font-weight: 600 !important;
    display: block;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.2rem;
    line-height: 1;
    padding-bottom: 0.8rem;
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
`;
