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
          <div>
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
          </div>
        </SpacedContainer>
        <Blocks />
      </Rename>
    </Container>
  );
};

const ButtonRow = styled.div`
  display: flex;
`;
const Blocks = () => (
  <Block>
    <SquareStroked />
    <SquareEmpty />
    <SquareEmpty />
    <SquareEmpty />
    <SquareFilled />
    <SquareEmpty />
    <SquareStroked />
    <SquareEmpty />
    <SquareFilled />
  </Block>
);

export default IntroSection;

const Rename = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: ${breakpoint.size.lg};
  padding: 0 5rem;
`;

const SpacedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (${breakpoint.device.sm}) {
    padding: 3rem 2rem 0 2rem;
  }
  @media (${breakpoint.device.xs}) {
    padding: 3rem 0 0 0;
    align-items: center;
  }
`;

const Block = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  top: -95px;
  right: -20px;
  z-index: -999;

  @media (${breakpoint.device.sm}) {
    top: -70px;
    right: -150px;
  }
  @media (${breakpoint.device.xs}) {
    top: 0;
  }
`;

const Square = styled.div`
  width: 160px;
  height: 160px;
  @media (${breakpoint.device.xs}) {
    width: 90px;
    height: 90px;
  }
`;

const SquareStroked = styled(Square)`
  /* border: 1px solid ${({ theme }) => theme.colors.text}; */
  background: ${({ theme }) => theme.colors.secondary};

  opacity: 0.5;
`;

const SquareFilled = styled(Square)`
  background: ${({ theme }) => theme.colors.accent};
`;

const SquareEmpty = styled(Square)`
  /* border: 1px solid ${({ theme }) => theme.colors.text}; */
`;
