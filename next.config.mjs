import remarkFrontmatter from 'remark-frontmatter';
import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX({
  // Append the default value with md extensions
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
