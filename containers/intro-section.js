import React from 'react';
import Link from 'next/link';
import { Container } from '@components/styled/LayoutStyles';
import { Heading1, Lead } from '@components/styled/typography';
import { StrokedButton } from '@components/styled/button';
import { Row } from '@components/styled/LayoutStyles';
import styled from 'styled-components';
import { breakpoint } from '@components/styled/breakpoints';

const IntroSection = () => {
  return (
    <Container p='0 0 6.5rem 0'>
      <Rename>
        <SpacedContainer>
          <Lead>Let&apos;s be unboring</Lead>
          <Heading1>
            MAKE THINGS <br />
            WITH CHARACTER
          </Heading1>
          <ButtonRow>
            <StrokedButton
              accented
              whileHover={{
                scale: 1.1,
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
          </ButtonRow>
        </SpacedContainer>
        {/* <Circle /> */}
      </Rename>
    </Container>
  );
};

const ButtonRow = styled.div`
  display: flex;
`;

export default IntroSection;

const Rename = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: ${breakpoint.size.lg};
  padding: 0 5rem;
  @media (${breakpoint.device.sm}) {
    padding: 0;
  }
`;

const SpacedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (${breakpoint.device.sm}) {
    padding: 3rem 0 0 0;
    align-items: flex-start;
  }
  @media (${breakpoint.device.xs}) {
    padding: 3rem 0 0 0;
  }
`;

const Circle = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  width: 400px;
  height: 400px;
  position: absolute;
  right: 0;
  border-radius: 50%;
  z-index: -1;
`;
