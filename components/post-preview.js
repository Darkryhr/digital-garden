import React from 'react';
import Link from 'next/link';
import { Description, Heading2 } from './styled/typography';
import DateFormatter from '@components/date-formatter';
import { Wrapper, SpacedRow } from './styled/LayoutStyles';
import styled from 'styled-components';
import { Button } from './styled/button';

const PostPreview = ({ title, date, excerpt, slug }) => {
  return (
    <PreviewWrapper>
      <SpacedRow>
        <Link href={`/blog/${slug}`} passHref>
          <PreviewTitle>{title}</PreviewTitle>
        </Link>
        <DateFormatter dateString={date} />
      </SpacedRow>
      <Description>{excerpt}</Description>
      <Link href={`/blog/${slug}`} passHref>
        <Button>Read More</Button>
      </Link>
    </PreviewWrapper>
  );
};

export default PostPreview;

const PreviewWrapper = styled(Wrapper)`
  margin: 1em 0;
`;

const PreviewTitle = styled(Heading2)`
  cursor: pointer;
`;
