import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Heading3, Subtitle, Text } from './styled/typography';
import DateFormatter from '@components/date-formatter';
import { SpacedRow } from './styled/LayoutStyles';

const PostPreview = ({ title, date, excerpt, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <PreviewWrapper
        whileHover={{
          translateX: 25,
        }}
        whileTap={{
          translateX: -15,
        }}
      >
        <SpacedRow>
          <PreviewTitle>{title}</PreviewTitle>
          <DateFormatter dateString={date} light={true} />
        </SpacedRow>
        <PreviewSubtitle>{excerpt}</PreviewSubtitle>
      </PreviewWrapper>
    </Link>
  );
};

export default PostPreview;

const PreviewTitle = styled(Heading3)`
  font-weight: 700;
`;

const PreviewSubtitle = styled(Subtitle)`
  /* overflow: hidden; */
  font-size: 0.9rem;
  max-height: 40px;
  text-overflow: ellipsis;
  line-height: normal;
`;

const PreviewWrapper = styled(motion.div)`
  cursor: pointer;
  padding: 2rem 1.3rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  max-width: 768px;
  max-height: 180px;
  margin: 0 auto;
  margin-bottom: 2rem;
  border-radius: 5px;
  border-left: 3px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
