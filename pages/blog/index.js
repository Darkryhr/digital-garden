import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import {
  Subtitle,
  Title,
  CardTitle,
  CardDescription,
} from '@components/styled/typography';

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((file) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: file.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <PostsWrapper>
      {posts.map((post, index) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>
          <Card>
            <CardContent>
              <CardTitle>{post.frontMatter.title}</CardTitle>
              <CardDescription>{post.frontMatter.description}</CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </PostsWrapper>
  );
};

export default Blog;

const PostsWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-radius: 5px;
  margin-bottom: 2em;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.primary.lighter};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  transition: 0.3s all;
  &:hover {
    filter: brightness(2);
  }
`;

const CardContent = styled.div`
  margin-left: 1em;
  padding: 1.5em 0;
`;
