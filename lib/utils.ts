import {
  getDirFiles,
  getSlugs,
  getAllContent,
  filterPostsByPageIndex,
  filterPublishedPosts,
} from './helpers';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from 'models/post';

const postsDir = path.join(process.cwd(), '_posts');
const snipsDir = path.join(process.cwd(), '_snippets');

export const getPosts = (pageIndex): Post[] => {
  const dirFiles = getDirFiles(postsDir);
  const posts = getAllContent(dirFiles, postsDir);
  const publishedPosts = filterPublishedPosts(posts);
  return filterPostsByPageIndex(publishedPosts, pageIndex);
};

export const getPostSlugs = () => {
  const dirFiles = getDirFiles(postsDir);
  const posts = getSlugs(dirFiles);
  return posts;
};

export const getPostBySlug = (
  slug,
  fields = []
): { title: string; date: string; content: string } => {
  const fullPath = path.join(postsDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  const items = { title: '', date: '', content: '' };

  fields.forEach(field => {
    if (field === 'content') items[field] = content;
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};

export const getSnippets = () => {
  const dirFiles = getDirFiles(snipsDir);
  const snippets = getAllContent(dirFiles, snipsDir);

  return snippets;
};

export const getSnippetSlugs = () => {
  const dirFiles = getDirFiles(snipsDir);
  const snippets = getSlugs(dirFiles);

  return snippets;
};

export const getSnippetBySlug = (slug, fields) => {
  const fullPath = path.join(snipsDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  const items = { title: '', date: '', content: '' };

  fields.forEach(field => {
    if (field === 'content') items[field] = content;
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};
