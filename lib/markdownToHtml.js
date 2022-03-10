import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import remarkPrism from 'remark-prism';

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .use(remarkPrism, {
      transformInlineCode: true,
    })
    .process(markdown);
  return result.toString();
}
