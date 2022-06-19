import React from 'react';

import { getAllPosts } from 'lib/api';
import PostPreview from '@components/PostPreview';
import SectionWrapper from '@components/SectionWrapper';
import { Box, Column, Heading2 } from '@components/shared';

const PostFeed = ({ allPosts }) => {
  return (
    <Column
      style={{
        padding: '3rem 0',
      }}
    >
      <SectionWrapper delay={0.1}>
        <Box
          style={{
            padding: '1rem 0',
          }}
        >
          <Heading2>Blog</Heading2>
        </Box>
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
        {allPosts.map(post => (
          <PostPreview
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
          />
        ))}
      </SectionWrapper>
    </Column>
  );
};

export default PostFeed;

export function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt']);
  return {
    props: {
      allPosts,
    },
  };
}
