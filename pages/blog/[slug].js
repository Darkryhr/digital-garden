import React from 'react';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import styled from 'styled-components';
import Link from 'next/link';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import markdownToHtml from 'lib/markdownToHtml';
import { getAllPosts, getPostBySlug } from 'lib/api';
import PostBody from '@components/post-body';
import DateFormatter from '@components/date-formatter';
import { Heading2 } from '@components/styled/typography';
import SEO from '@components/SEO';
import { SpacedRow } from '@components/styled/LayoutStyles';
import Loader from '@components/Loader';
import { breakpoint } from '@components/styled/breakpoints';

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
          <Link href='/blog' passHref>
            <HomeLink>
              <FaLongArrowAltLeft
                size={22}
                style={{
                  fill: '#fb8b24',
                }}
              />{' '}
              Home
            </HomeLink>
          </Link>
          <SpacedRow>
            <Heading2 style={{ padding: '0.5rem 0' }}>{post.title}</Heading2>
            <DateFormatter dateString={post.date} />
          </SpacedRow>
          <div
            style={{
              height: '2rem',
            }}
          ></div>
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
    paths: posts.map(post => {
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
  max-width: ${breakpoint.size.lg};
  padding: 5rem 3vw 5rem 3vw;
  min-height: calc(100vh - 100px);
  overflow: hidden;
  list-style: circle;
  @media (${breakpoint.device.sm}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const HomeLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  font-size: 1.1rem;
  padding-bottom: 0.4rem;
  display: flex;
  align-items: center;
  width: 85px;
  justify-content: space-between;
`;
