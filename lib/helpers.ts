import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getDirFiles = directory => {
  return fs.readdirSync(directory, {
    withFileTypes: true,
  });
};

export const getSlug = file => file.name.replace(/.mdx$/, '');

export const getSlugs = dirFiles =>
  dirFiles.map(file => {
    if (!file.name.endsWith('.mdx')) return;
    const slug = getSlug(file);
    return { slug };
  });

export const getAllContent = (dirFiles, directory) =>
  dirFiles.map(file => {
    if (!file.name.endsWith('.mdx')) return;
    const fileContent = fs.readFileSync(
      path.join(directory, file.name),
      'utf-8'
    );
    const { data, content } = matter(fileContent);
    const slug = getSlug(file);

    return { data, content, slug };
  });

export const filterPostsByPageIndex = (posts, pageIndex) => {
  const postPerPage = 5;
  const totalPagePosts = +pageIndex * postPerPage;
  const prevPagePosts = totalPagePosts - postPerPage;

  return posts.filter(
    (post, index) => index < totalPagePosts && index >= prevPagePosts
  );
};
