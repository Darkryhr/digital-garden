import { getAllPosts } from 'lib/api';
import React from 'react';
import PostPreview from '@components/post-preview';
import SectionWrapper from '@components/section-wrapper';
import { Box, ContentWrapper, Row } from '@components/styled/LayoutStyles';
import { Heading2 } from '@components/styled/typography';

const PostFeed = ({ allPosts }) => {
  return (
    <ContentWrapper>
      <SectionWrapper delay={0.1}>
        <Box
          style={{
            margin: '0.5rem auto 0.7rem auto',
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
    </ContentWrapper>
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
