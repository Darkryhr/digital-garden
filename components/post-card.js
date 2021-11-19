import React from 'react';
import Link from 'next/link';
import { Description, Heading2 } from './styled/typography';
import DateFormatter from '@components/date-formatter';
import { SpacedRow } from './styled/LayoutStyles';

const PostCard = ({ title, date, excerpt, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div>
        <SpacedRow>
          <Heading2>{title}</Heading2>
          <DateFormatter dateString={date} />
        </SpacedRow>
        <Description>{excerpt}</Description>
      </div>
    </Link>
  );
};

export default PostCard;
