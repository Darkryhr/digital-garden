import { getAllPosts } from 'lib/api';
import React from 'react';
import PostPreview from '@components/post-preview';

const PostFeed = ({ allPosts }) => {
  return (
    <>
      {allPosts.map((post) => (
        <PostPreview
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
