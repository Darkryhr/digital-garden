import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Description, FeedTitle, Title } from './styled/typography';
import DateFormatter from '@components/date-formatter';

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

const Card = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 1em 0.5vw;
  cursor: pointer;
  margin-bottom: 1em;
  &:last-child {
    margin-bottom: 0;
  }
`;

const PostHeading = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
