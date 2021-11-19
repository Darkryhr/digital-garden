import { getAllPosts } from 'lib/api';
import React from 'react';
import PostCard from '@components/post-card';

const PostFeed = ({ allPosts }) => {
  return (
    <>
      {allPosts.map((post) => (
        <PostCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
        />
      ))}
    </>
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
