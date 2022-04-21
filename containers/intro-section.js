import React from 'react';
import Link from 'next/link';
import { Container } from '@components/styled/LayoutStyles';
import { Heading1, Lead } from '@components/styled/typography';
import { StrokedButton } from '@components/styled/button';
import styled from 'styled-components';
import { breakpoint } from '@components/styled/breakpoints';
import { BiDownload } from 'react-icons/bi';
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
              $accented
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
              <a
                href='/assets/portfolio/resume.docx'
                download
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <BiDownload
                  size={16}
                  style={{
                    marginRight: '5px',
                  }}
                />
                Resume
              </a>
            </StrokedButton>
          </ButtonRow>
        </SpacedContainer>
        <Circle>
          <Graphic />
        </Circle>
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
  align-items: center;
  max-width: ${breakpoint.size.lg};
  padding: 0 5rem;
  height: calc(100vh - 200px);
  @media (${breakpoint.device.sm}) {
    padding-left: 1rem;
    padding-right: 1rem;
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
  position: absolute;
  right: 0;
  top: 80px;
  transform: rotate(15deg);
  width: 500px;
  fill: #fb8b24;
  z-index: -999;
  @media (${breakpoint.device.sm}) {
    fill: ${({ theme }) => theme.colors.text};
    opacity: 0.05;
  }
`;

const Graphic = () => {
  return (
    <svg
      version='1.2'
      width='100%'
      height='100%'
      // fill='#fb8b24'
      viewBox='0 0 134.033 174'
    >
      <g>
        <path
          d='M128.8,40.94c-3.377-7.983-8.209-15.152-14.364-21.306C108.282,13.48,101.113,8.647,93.13,5.27
      C84.862,1.773,76.082,0,67.035,0C57.988,0,49.209,1.773,40.94,5.27c-7.983,3.377-15.152,8.209-21.306,14.364
      C13.48,25.789,8.647,32.957,5.27,40.94C1.773,49.209,0,57.988,0,67.035c0,12.929,3.754,25.482,10.735,36.301
      c6.095,9.446,14.289,17.176,24.289,22.539v16.135c0,3.302,2.698,5.979,6,5.979c3.302,0,6-2.677,6-5.979v-31.84
      c0-3.302-2.698-5.979-6-5.979c-3.302,0-6,2.677-6,5.979v1.587c-14-10.244-23.001-26.908-23.001-44.722
      c0-30.369,24.675-55.076,55.045-55.076s54.985,24.707,54.985,55.076c0,17.814-9.029,34.477-23.029,44.722v-7.267
      c0-3.302-2.698-5.979-6-5.979c-3.302,0-6,2.677-6,5.979v35.727c0,3.302,2.698,5.979,6,5.979c3.302,0,6-2.677,6-5.979v-14.342
      c10-5.362,18.205-13.093,24.301-22.539c6.981-10.819,10.709-23.372,10.709-36.301C134.033,57.988,132.297,49.209,128.8,40.94z'
        />
        <path
          d='M67.024,110.32c-3.302,0-6,2.677-6,5.979v40.361c0,3.302,2.698,5.979,6,5.979c3.302,0,6-2.677,6-5.979
      v-40.361C73.024,112.997,70.326,110.32,67.024,110.32z'
        />
        <path
          d='M93.024,152.773c-3.302,0-6,2.677-6,5.979v9.268c0,3.302,2.698,5.979,6,5.979c3.302,0,6-2.677,6-5.979
      v-9.268C99.024,155.45,96.326,152.773,93.024,152.773z'
        />
        <path
          d='M48.837,57.609l-4.693-1.352c-4.104-1.183-8.299-0.59-11.763,1.325c-3.464,1.914-6.198,5.15-7.38,9.254
      c-2.365,8.208,2.372,16.778,10.58,19.143l4.693,1.352c4.104,1.182,8.299,0.59,11.763-1.325c3.464-1.914,6.198-5.15,7.38-9.254
      C61.781,68.544,57.045,59.974,48.837,57.609z'
        />
        <path
          d='M93.797,87.332l4.693-1.352c8.208-2.365,12.944-10.935,10.58-19.143c-1.182-4.104-3.916-7.341-7.38-9.254
      c-3.464-1.915-7.658-2.508-11.763-1.325l-4.693,1.352c-8.208,2.365-12.944,10.935-10.58,19.143c1.182,4.104,3.916,7.341,7.38,9.254
      C85.498,87.921,89.692,88.514,93.797,87.332z'
        />
        <path
          d='M64.549,101h4.972c1.803,0,2.929-1.846,2.028-3.408l-2.486-4.253c-0.901-1.561-3.155-1.535-4.056,0.026
      l-2.486,4.214C61.62,99.14,62.747,101,64.549,101z'
        />
      </g>
    </svg>
  );
};
