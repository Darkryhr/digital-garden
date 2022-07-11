import Link from 'next/link';
import { A } from './mdx.css';

export const CustomLink = props => {
  return (
    <Link href={props.href} passHref>
      <A {...props}>{props.children}</A>
    </Link>
  );
};
