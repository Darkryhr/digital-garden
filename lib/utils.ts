import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), '_posts');

export const getPosts = pageIndex => {
  const dirFiles = fs.readdirSync(postsDir, {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map(file => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        path.join(postsDir, file.name),
        'utf-8'
      );
      const { data, content } = matter(fileContent);

      const slug = file.name.replace(/.mdx$/, '');
      return { data, content, slug };
    })
    .filter(post => post);

  return filterPostsByPageIndex(posts, pageIndex);
};

export const getPostSlugs = () => {
  const dirFiles = fs.readdirSync(postsDir, {
    withFileTypes: true,
  });

  const posts = dirFiles
    .map(file => {
      if (!file.name.endsWith('.mdx')) return;

      const fileContent = fs.readFileSync(
        path.join(postsDir, file.name),
        'utf-8'
      );

      const slug = file.name.replace(/.mdx$/, '');
      return { slug };
    })
    .filter(post => post);

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

export const filterPostsByPageIndex = (posts, pageIndex) => {
  const postPerPage = 5;
  // get the total posts from page 1 to current page
  const totalPagePosts = +pageIndex * postPerPage;

  // get the total posts from page 1 to previous page
  const prevPagePosts = totalPagePosts - postPerPage;

  return posts.filter(
    (post, index) => index < totalPagePosts && index >= prevPagePosts
  );
};
