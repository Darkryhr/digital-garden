import SectionWrapper from '@components/SectionWrapper';
import {
  BreakpointWrapper,
  Column,
  Divider,
  Heading2,
  Heading4,
  SnippetsGrid,
  Subtitle,
} from '@components/shared';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { getSnippets } from 'lib/utils';

const Snippets = ({ snippets }) => {
  return (
    <BreakpointWrapper>
      <Column $layout>
        <SectionWrapper delay={0.1}>
          <Heading2>Snippets</Heading2>
        </SectionWrapper>
        <Divider />
        <SectionWrapper delay={0.2}>
          <SnippetsGrid>
            {snippets.map(snippet => (
              <Link
                href={`/snippets/${snippet.slug}`}
                passHref
                key={snippet.slug}
              >
                <Snippet>
                  <Placeholder />
                  <Heading4>CSS</Heading4>
                  <Subtitle>Some test snippet</Subtitle>
                </Snippet>
              </Link>
            ))}
          </SnippetsGrid>
        </SectionWrapper>
      </Column>
    </BreakpointWrapper>
  );
};

export default Snippets;

export const Snippet = styled.a`
  width: 100%;
  padding: 1.35rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  border-radius: 5px;
`;

const Placeholder = styled.div`
  width: 35px;
  height: 35px;
  background-color: white;
  border-radius: 50%;
  margin-bottom: 0.7rem;
`;

export function getStaticProps() {
  const snippets = getSnippets();
  return {
    props: {
      snippets,
    },
  };
}
