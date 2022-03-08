import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Heading3, Subtitle, Text } from './styled/typography';
import DateFormatter from '@components/date-formatter';
import { SpacedRow } from './styled/LayoutStyles';

const PostPreview = ({ title, date, excerpt, slug }) => {
  return (
    <PreviewWrapper>
      <SpacedRow>
        <Link href={`/blog/${slug}`} passHref>
          <PreviewTitle>{title}</PreviewTitle>
        </Link>
        <DateFormatter dateString={date} />
      </SpacedRow>
      <Subtitle>{excerpt}</Subtitle>
      <Link href={`/blog/${slug}`} passHref>
        <BlogLink
          whileHover={{
            color: '#fb8b24',
          }}
        >
          Read More
        </BlogLink>
      </Link>
    </PreviewWrapper>
  );
};

export default PostPreview;

const PreviewTitle = styled(Heading3)`
  cursor: pointer;
`;

const BlogLink = styled(motion.button)`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.8rem 0;
`;

const PreviewWrapper = styled.div`
  padding: 1rem 0;
`;
