import React, { useState } from 'react';
import PostPreview from '@components/PostPreview';
import SectionWrapper from '@components/SectionWrapper';
import {
  Box,
  Column,
  Heading2,
  Button,
  Subtitle,
  Divider,
  BreakpointWrapper,
} from '@components/shared';
import { getPosts } from 'lib/utils';
import { Post } from 'models/post';

const PostFeed = ({ posts }: { posts: Post[] }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const loadMorePosts = async () => {
    const res = await fetch(`/api/posts?page=${currentPageIndex + 1}`); // absolute url is supported here
    const posts = await res.json();

    setFilteredPosts(_posts => [..._posts, ...posts]);
    setCurrentPageIndex(_pageIndex => _pageIndex + 1);
  };
  return (
    <BreakpointWrapper>
      <Column $layout>
        <SectionWrapper delay={0.1}>
          <Box>
            <Heading2>Blog</Heading2>
          </Box>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <Box>
            <Subtitle>
              My thoughts (I swear I have them), on stuff, mostly from projects
              I&apos;ve worked on.
            </Subtitle>
          </Box>
        </SectionWrapper>
        <SectionWrapper delay={0.3}>
          <Divider />
        </SectionWrapper>
        <SectionWrapper delay={0.4}>
          {filteredPosts
            .sort((a, b) => (a.data.index < b.data.index ? 1 : -1))
            .map(({ data, slug }) => (
              <PostPreview
                key={data.index}
                slug={slug}
                title={data.title}
                date={data.date}
                excerpt={data.excerpt}
              />
            ))}

          <Box
            style={{
              padding: '1.7rem 0',
            }}
          >
            <Button
              onClick={loadMorePosts}
              $filled
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              Load more
            </Button>
          </Box>
        </SectionWrapper>
      </Column>
    </BreakpointWrapper>
  );
};

export default PostFeed;

export function getStaticProps(): { props: { posts: Post[] } } {
  const posts = getPosts(1);
  return {
    props: {
      posts,
    },
  };
}
