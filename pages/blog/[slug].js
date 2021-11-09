import React from 'react';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';
import matter from 'gray-matter';
import { Title } from '@components/styled/typography';
import { Article } from '@components/styled';

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((file) => ({
    params: {
      slug: file.replace('.mdx', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

const PostPage = ({ frontMatter: { title }, mdxSource }) => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Title>{title}</Title>
      <MDXRemote
        {...mdxSource}
        components={{ Button, SyntaxHighlighter, article: Article }}
      />
    </div>
  );
};

export default PostPage;

const Button = ({ text }) => {
  return <button>{text}</button>;
};
