import React from 'react';
import styled from 'styled-components';

const PostBody = ({ content }) => {
  return (
    <div>
      <MarkdownStyles dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;

const MarkdownStyles = styled.div`
  & > p {
    padding: 1em 0;
  }
`;
