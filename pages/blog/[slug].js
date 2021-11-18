import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import PostBody from '@components/post-body';
import { getAllPosts, getPostBySlug } from 'lib/api';
import markdownToHtml from 'lib/markdownToHtml';
import styled from 'styled-components';
import DateFormatter from '@components/date-formatter';
import { Title } from '@components/styled/typography';
import { Divider } from '@components/styled';

const Post = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <ContentWrapper>
          <Head>
            <title>{post.title}</title>
          </Head>
          <PostHeader>
            <Title>{post.title}</Title>
            <DateFormatter dateString={post.date} />
          </PostHeader>
          <Divider />
          <PostBody content={post.content} />
        </ContentWrapper>
      )}
    </div>
  );
};

export default Post;

const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrapper = styled.article`
  margin: 0 auto;
  width: 95%;
`;

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
