import React, { useState } from 'react';
import PostPreview from '@components/PostPreview';
import SectionWrapper from '@components/SectionWrapper';
import { Box, Column, Heading2, Button } from '@components/shared';
import { getPosts } from 'lib/utils';

const PostFeed = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts(_posts => [..._posts, ...posts]);
    setCurrentPageIndex(_pageIndex => _pageIndex + 1);
  };
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
        {filteredPosts.map(({ data, slug }) => (
          <PostPreview
            key={slug}
            slug={slug}
            title={data.title}
            date={data.date}
            excerpt={data.excerpt}
          />
        ))}
      </SectionWrapper>
      <Button onClick={loadMorePosts}>Load more</Button>
    </Column>
  );
};

export default PostFeed;

export function getStaticProps() {
  const posts = getPosts(1);
  return {
    props: {
      posts,
    },
  };
}
