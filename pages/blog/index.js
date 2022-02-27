import { getAllPosts } from 'lib/api';
import React from 'react';
import PostPreview from '@components/post-preview';
import SectionWrapper from '@components/section-wrapper';
import { ContentWrapper } from '@components/styled/LayoutStyles';

const PostFeed = ({ allPosts }) => {
  return (
    <ContentWrapper>
      <SectionWrapper delay={0.1}>
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
