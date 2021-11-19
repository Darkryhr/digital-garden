import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Description } from './styled/typography';
import { FeedTitle } from './styled/BlogStyles';
import DateFormatter from '@components/date-formatter';
import { PostHeading } from './styled/BlogStyles';
import { Card } from './styled/LayoutStyles';

const PostCard = ({ title, date, excerpt, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <Card>
        <PostHeading>
          <FeedTitle>{title}</FeedTitle>
          <DateFormatter dateString={date} />
        </PostHeading>
        <Description>{excerpt}</Description>
      </Card>
    </Link>
  );
};

export default PostCard;
