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
import { motion } from 'framer-motion';

const Post = ({ post }) => {
  const lineMotion = {
    rest: {
      opacity: 0,
      duration: 0.2,
      type: 'spring',
    },
    hover: {
      opacity: 1,
      scaleX: 2,
      transition: {
        duration: 0.4,
        type: 'spring',
      },
    },
    tap: {
      scale: 1.1,
    },
  };

  const homeMotion = {
    rest: {
      opacity: 0.85,
    },
    hover: {
      opacity: 1,
      scale: 1.05,
    },
    tap: {
      scale: 1.1,
    },
  };

  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <MarkdownWrapper>
      {router.isFallback ? (
        <Loader />
      ) : (
        <Wrapper>
          <SEO title={post.title} />
          <Link href='/blog' passHref>
            <HomeLinkWrapper
              initial='rest'
              whileHover='hover'
              animate='rest'
              whileTap='tap'
            >
              <HomeLink variants={homeMotion}>
                <FaLongArrowAltLeft
                  size={20}
                  style={{
                    fill: '#fb8b24',
                  }}
                />{' '}
                Home
              </HomeLink>
              <Border variants={lineMotion} />
            </HomeLinkWrapper>
          </Link>
          <SpacedRow>
            <Heading2 style={{ padding: '0.5rem 0' }}>{post.title}</Heading2>
            <DateFormatter dateString={post.date} light={false} />
          </SpacedRow>

          <PostBody content={post.content} />
        </Wrapper>
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
  margin: 3rem auto;
  max-width: 1000px;
  /* padding: 3rem 3vw 5rem 3vw; */
  min-height: calc(100vh - 100px);
  overflow: hidden;
  list-style: circle;
  @media (${breakpoint.device.sm}) {
    padding: 0;
  }
`;

const HomeLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  @media (${breakpoint.device.xs}) {
    font-size: 0.9em;
  }
`;

const Border = styled(motion.div)`
  height: 3px;
  width: 45px;
  margin-bottom: 0.2rem;
  margin-left: 4px;
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.accent};
`;

const HomeLinkWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 95px;
`;

const Wrapper = styled.div`
  padding: 0 2rem;
`;
