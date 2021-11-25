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
    font-size: 16px;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    padding: 1em 0;
  }
  h1 {
    font-weight: 700;
    font-size: 24px;
    padding-bottom: 5px;
  }
  hr {
    opacity: 0.2;
  }
  strong {
    font-weight: 600 !important;
    display: block;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 18px;
    padding: 0.4em 0;
  }
  ul {
    list-style: circle;
  }
  li {
    padding-bottom: 3px;
  }
  em {
    font-weight: 600;
  }
`;
