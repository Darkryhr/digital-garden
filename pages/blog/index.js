import { getAllPosts } from 'lib/api';
import React from 'react';
import PostPreview from '@components/post-preview';
import SectionWrapper from '@components/section-wrapper';

const PostFeed = ({ allPosts }) => {
  return (
    <SectionWrapper delay={0.1}>
      {allPosts.map((post) => (
        <PostPreview
          key={post.slug}
          slug={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
        />
      ))}
    </SectionWrapper>
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
