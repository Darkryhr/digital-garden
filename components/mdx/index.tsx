import DateFormatter from '@components/DateFormatter';
import { Divider } from '../shared';
import { CustomLink } from './CustomLink';
import { Pre } from './Pre';
import { Article, Heading1, Heading2, Ul, Ol, Paragraph, Tip } from './mdx.css';
import { StyledImage } from './StyledImage';

const MDXComponents = {
  h1: props => <Heading1 {...props} />,
  h2: props => <Heading2 {...props} />,
  a: props => <CustomLink {...props} />,
  ul: props => <Ul {...props} />,
  p: props => <Paragraph {...props} />,
  ol: props => <Ol {...props} />,
  hr: props => <Divider {...props} />,
  Image: StyledImage,
  pre: Pre,
  Article,
  DateFormatter,
  Tip,
};

export default MDXComponents;
