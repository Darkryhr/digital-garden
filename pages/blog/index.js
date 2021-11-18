import { getAllPosts } from 'lib/api';
import React from 'react';
import PostCard from '@components/post-card';
import styled from 'styled-components';

const PostFeed = ({ allPosts }) => {
  return (
    <FeedWrapper>
      {allPosts.map((post) => (
        <PostCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
        />
      ))}
    </FeedWrapper>
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

const FeedWrapper = styled.article`
  width: 100%;
`;
