import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { HiDownload } from 'react-icons/hi';

import {
  Column,
  Container,
  Heading1,
  Lead,
  StrokedButton,
} from '@components/shared';
import { breakpoint } from '@styled/breakpoints.css';

const IntroSection = () => {
  return (
    <Container>
      <Rename>
        <Column>
          <Lead>Let&apos;s be unboring</Lead>
          <Heading1>
            MAKE THINGS <br />
            WITH CHARACTER
          </Heading1>
          <ButtonRow>
            <StrokedButton
              $accented
              whileHover={{
                scale: 1.05,
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
                  marginRight: '5px',
                }}
              >
                <HiDownload
                  size={16}
                  style={{
                    marginRight: '6px',
                  }}
                />
                Resume
              </a>
            </StrokedButton>
          </ButtonRow>
        </Column>
        <Circle>
          <Graphic />
        </Circle>
      </Rename>
    </Container>
  );
};

export default IntroSection;

const ButtonRow = styled.div`
  display: flex;
  padding-top: 1rem;
`;

const Rename = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  max-width: ${breakpoint.size.lg};
  height: calc(100vh - 200px);
`;

const Circle = styled.div`
  position: absolute;
  right: 20px;
  top: 95px;
  transform: rotate(15deg);
  width: 500px;
  z-index: -999;
  fill: ${({ theme }) => theme.colors.text};
  opacity: 0.04;
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
      <path
        id='XMLID_148_'
        d='M41,147c-2.8,0-5-2.2-5-5v-16.7l-0.5-0.3c-9.7-5.2-17.8-12.7-23.9-22.2C4.7,92.1,1,79.7,1,67
	c0-8.9,1.7-17.6,5.2-25.7c3.3-7.9,8.1-14.9,14.1-21c6.1-6.1,13.1-10.8,21-14.1C49.5,2.7,58.1,1,67,1c8.9,0,17.6,1.7,25.7,5.2
	c7.9,3.3,14.9,8.1,21,14.1c6.1,6.1,10.8,13.1,14.2,21c3.4,8.1,5.2,16.7,5.2,25.7c0,12.7-3.6,25.1-10.5,35.8
	c-6.1,9.5-14.2,17-23.9,22.2l-0.5,0.3v14.9c0,2.7-2.2,5-5,5s-5-2.2-5-5v-35.7c0-2.7,2.2-5,5-5s5,2.2,5,5v9.2l1.6-1.2
	c14.7-10.7,23.4-27.8,23.4-45.5c0-30.9-25.1-56.1-56-56.1C36.2,11,11,36.1,11,67c0,17.8,8.8,34.8,23.4,45.5l1.6,1.2v-3.6
	c0-2.7,2.2-5,5-5s5,2.2,5,5V142C46,144.8,43.8,147,41,147z'
      />
      <path
        id='XMLID_152_'
        d='M57.8,164.9c-2.6,0-4.8-2.1-4.8-4.8v-39c0-2.6,2.2-4.8,4.8-4.8s4.8,2.1,4.8,4.8v39
	C62.6,162.7,60.5,164.9,57.8,164.9z'
      />
      <path
        id='XMLID_00000071545656554242044600000004565865419696387740_'
        d='M75.6,156c-2.4,0-4.4-2-4.4-4.4v-36.3c0-2.4,2-4.4,4.4-4.4
	c2.4,0,4.4,2,4.4,4.4v36.3C80,154.1,78.1,156,75.6,156z'
      />
      <path
        id='XMLID_153_'
        d='M99.7,169.4c-1.9,0-3.6-1.3-4.1-3.2l-2.1-7.9c-0.6-2.3,0.8-4.6,3-5.2c0.4-0.1,0.7-0.1,1.1-0.1
	c1.9,0,3.6,1.3,4.1,3.2l2.1,7.9c0.3,1.1,0.1,2.2-0.4,3.2c-0.6,1-1.5,1.7-2.6,2C100.5,169.3,100.1,169.4,99.7,169.4L99.7,169.4z'
      />
      <path
        id='XMLID_154_'
        d='M48.8,57.6l-4.7-1.4c-4.1-1.2-8.3-0.6-11.8,1.3c-3.5,1.9-6.2,5.2-7.4,9.3C22.6,75,27.4,83.6,35.6,86
	l4.7,1.4c4.1,1.2,8.3,0.6,11.8-1.3c3.5-1.9,6.2-5.2,7.4-9.3C61.8,68.5,57,60,48.8,57.6z'
      />
      <path
        d='M40.5,88.7c-10.4,0-18.8-8-19.5-18.2c0,0.4-0.1,0.9-0.1,1.3c0,10.8,8.8,19.6,19.6,19.6S60,82.6,60,71.8c0-0.4,0-0.9-0.1-1.3
	C59.3,80.6,50.8,88.7,40.5,88.7z'
      />
      <path
        id='XMLID_00000070087868555193023280000012067587917583504295_'
        d='M74.7,76.8c1.2,4.1,3.9,7.3,7.4,9.3
	c3.5,1.9,7.7,2.5,11.8,1.3l4.7-1.4c8.2-2.4,12.9-10.9,10.6-19.1c-1.2-4.1-3.9-7.3-7.4-9.3c-3.5-1.9-7.7-2.5-11.8-1.3l-4.7,1.4
	C77,60,72.3,68.5,74.7,76.8z'
      />
      <path
        d='M93.6,88.7c10.4,0,18.8-8,19.5-18.2c0,0.4,0.1,0.9,0.1,1.3c0,10.8-8.8,19.6-19.6,19.6S74,82.6,74,71.8c0-0.4,0-0.9,0.1-1.3
	C74.8,80.6,83.3,88.7,93.6,88.7z'
      />
      <polygon
        points='38.7,14.1 50.8,29.6 51.5,30.5 51.3,31.3 49.4,41.4 49.2,40.5 56.3,53.1 47,42 46.8,41.7 46.8,41.1 47,30.8 
	47.6,32.5 33.5,18.8 38.7,14.1 '
      />
      <polygon points='48.6,27.7 62.2,30 48.5,31.7 48.6,27.7 ' />
      <g>
        <path d='M67.3,94.2v5.6c0,0.7,0.5,1.2,1.2,1.2h3.2c0.9,0,1.5-1,1-1.8l-3.2-5.6C69,92.5,67.3,93,67.3,94.2z' />
        <path d='M62.4,101h2.3c0.7,0,1.3-0.6,1.3-1.3v-4.1c0-1.3-1.7-1.8-2.4-0.6l-2.3,4.1C60.8,99.9,61.4,101,62.4,101z' />
      </g>
    </svg>
  );
};
