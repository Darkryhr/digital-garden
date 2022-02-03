import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import PostBody from '@components/post-body';
import { getAllPosts, getPostBySlug } from 'lib/api';
import markdownToHtml from 'lib/markdownToHtml';
import DateFormatter from '@components/date-formatter';
import { Heading2, Heading3 } from '@components/styled/typography';
import SEO from '@components/SEO';
import Loader from '@components/Loader';
import { SpacedRow, Wrapper } from '@components/styled/LayoutStyles';
import styled from 'styled-components';

const Post = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <MarkdownWrapper>
      {router.isFallback ? (
        <Loader />
      ) : (
        <>
          <SEO title={post.title} />
          <SpacedRow>
            <Heading3>{post.title}</Heading3>
            <DateFormatter dateString={post.date} />
          </SpacedRow>
          <PostBody content={post.content} />
        </>
      )}
    </MarkdownWrapper>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

const MarkdownWrapper = styled.article`
  margin: 0 auto;
  padding: 2rem 5vw;
  max-width: 1200px;
  min-height: 90vh;
`;
