import React from 'react';
import Link from 'next/link';
import { Heading3, Text } from './styled/typography';
import DateFormatter from '@components/date-formatter';
import { Wrapper, SpacedRow } from './styled/LayoutStyles';
import styled from 'styled-components';
import { Button } from './styled/button';
import { LinkWrapper } from './header/HeaderStyles';

const PostPreview = ({ title, date, excerpt, slug }) => {
  return (
    <PreviewWrapper>
      <SpacedRow>
        <Link href={`/blog/${slug}`} passHref>
          <PreviewTitle>{title}</PreviewTitle>
        </Link>
        <DateFormatter dateString={date} />
      </SpacedRow>
      <Text>{excerpt}</Text>
      <LinkWrapper>
        <Link href={`/blog/${slug}`}>Read More</Link>
      </LinkWrapper>
    </PreviewWrapper>
  );
};

export default PostPreview;

const PreviewWrapper = styled.div`
  margin: 1em 0;
`;

const PreviewTitle = styled(Heading3)`
  cursor: pointer;
`;
