import styled from 'styled-components';
import Link from 'next/link';
import DateFormatter from '@components/DateFormatter';

const Heading2 = styled.h2`
  scroll-margin-top: 8rem;
  font-weight: 700;
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.3333333;
  font-family: 'Poppins', sans-serif;

  &:hover a {
    visibility: visible;
  }
`;

const Heading1 = styled.h1`
  margin-bottom: 0.2em;
  font-size: 4rem;
  padding: 4rem 0 0 0;
  scroll-margin-top: 3rem;
  font-family: 'Poppins', sans-serif;
`;

const CustomLink = props => {
  return (
    <Link href={props.href} passHref>
      <A {...props}>{props.children}</A>
    </Link>
  );
};

const A = styled.a`
  visibility: hidden;
  position: absolute;
  margin-left: -1.1em;
  padding-right: 1rem;
  cursor: pointer;
  font-size: 0.9em;
  margin-top: 0.2em;
  width: 80%;
  max-width: 700px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  &::after {
    font-weight: 500;
    opacity: 0.3;
    content: '#';
  }
`;

const Ul = styled.ul`
  list-style-type: disc;
  padding-left: 1.625em;

  li {
    padding-left: 0.375em;
    margin: 0.5em 0;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.25em;
  line-height: 1.65;
`;

const Article = styled.article`
  margin-top: 1rem;
  font-family: 'IBM Plex Sans', Tahoma, Geneva, Verdana, sans-serif;
`;

const MDXComponents = {
  h1: props => <Heading1 {...props} />,
  h2: props => <Heading2 {...props} />,
  a: props => <CustomLink {...props} />,
  ul: props => <Ul {...props} />,
  p: props => <Paragraph {...props} />,
  Article,
  DateFormatter,
};

export default MDXComponents;
