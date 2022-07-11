import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import mdxToHtml from 'lib/mdxToHtml';
import { getSnippetBySlug, getSnippetSlugs } from 'lib/utils';
import { SnippetLayout } from '@components/shared';
import MDXComponents from '@components/mdx';

const SnippetPage = ({ snippet }) => {
  return (
    <SnippetLayout>
      <MDXRemote {...snippet.content} components={MDXComponents} />
    </SnippetLayout>
  );
};

export default SnippetPage;

export async function getStaticPaths() {
  const snippets = getSnippetSlugs();

  return {
    paths: snippets.map(snippet => {
      return {
        params: {
          slug: snippet.slug,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const snippet = getSnippetBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ]);
  const content = await mdxToHtml(snippet.content);
  return {
    props: {
      snippet: {
        ...snippet,
        content,
      },
    },
  };
}
