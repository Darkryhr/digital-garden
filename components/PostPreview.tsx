import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Heading3, Heading4, Subtitle } from '@components/shared';
import DateFormatter from '@components/DateFormatter';
import { breakpoint } from '@styled/breakpoints.css';

const PostPreview = ({ title, date, excerpt, slug }) => {
  return (
    <Link href={`/posts/${slug}`} passHref>
      <PreviewWrapper
        data-cy='blog-post'
        whileHover={{
          translateY: -5,
        }}
        whileTap={{
          translateY: 2,
        }}
      >
        <Row>
          <PreviewTitle>{title}</PreviewTitle>
          <DateFormatter dateString={date} light={true} nonMdx={true} />
        </Row>
        <PreviewSubtitle>{excerpt}</PreviewSubtitle>
      </PreviewWrapper>
    </Link>
  );
};

export default PostPreview;

const PreviewTitle = styled(Heading4)`
  font-weight: 700;
  font-size: 1.5rem;
`;

const PreviewSubtitle = styled(Subtitle)`
  /* overflow: hidden; */
  font-size: 0.9rem;
  text-overflow: ellipsis;
  line-height: 1.5;
  padding-top: 0.7em;
  @media (${breakpoint.device.sm}) {
    padding: 0 !important;
  }
`;

const PreviewWrapper = styled(motion.div)`
  cursor: pointer;
  width: 100%;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${breakpoint.device.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
