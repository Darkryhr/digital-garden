import Link from 'next/link';
import styled from 'styled-components';
import { A } from './mdx.css';

//TODO: rename, this is for anchors next to headers
export const CustomLink = props => {
  return (
    <Link href={props.href} passHref>
      <A {...props}>{props.children}</A>
    </Link>
  );
};

export const CustomInternalLink = props => (
  <Link href={props.href} passHref>
    <StyledAnchor {...props}>{props.children}</StyledAnchor>
  </Link>
);

const StyledAnchor = styled.a`
  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;
