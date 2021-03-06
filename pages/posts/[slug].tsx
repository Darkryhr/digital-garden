import { MDXRemote } from 'next-mdx-remote';

import components from '@components/mdx';
import mdxToHtml from '@lib/mdxToHtml';
import { getPostSlugs, getPostBySlug } from '@lib/utils';
import { BlogLayout, BreakpointWrapper } from '@components/shared';
import { BackButton } from '@components/mdx/BackButton';

export default function PostPage({ post }) {
  return (
    <BreakpointWrapper>
      <BlogLayout>
        <BackButton />
        <MDXRemote {...post.content} components={components} />
      </BlogLayout>
    </BreakpointWrapper>
  );
}

export async function getStaticPaths() {
  const posts = getPostSlugs();

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

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content']);
  const content = await mdxToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
