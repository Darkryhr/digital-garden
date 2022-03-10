import React from 'react';
import Link from 'next/link';
import { Container } from '@components/styled/LayoutStyles';
import { Heading1, Lead } from '@components/styled/typography';
import { StrokedButton } from '@components/styled/button';
import { Row } from '@components/styled/LayoutStyles';

const IntroSection = () => {
  return (
    <Container p='0 0 6.5rem 0'>
      <Lead>Let&apos;s be unboring</Lead>
      <Heading1>Gabriel Lellouche</Heading1>
      <Row>
        <StrokedButton
          whileHover={{
            backgroundColor: '#fb8b24',
          }}
        >
          <Link href='/portfolio'>Portfolio</Link>
        </StrokedButton>
        <StrokedButton
          whileHover={{
            backgroundColor: '#fb8b24',
          }}
        >
          <a href='/assets/portfolio/resume.docx' download>
            Resume
          </a>
        </StrokedButton>
      </Row>
    </Container>
  );
};

export default IntroSection;
