import React, { useEffect, useState } from 'react';

import { LogoIcon } from '@components/Logo';
import { BreakpointWrapper, Button, Heading2 } from '@components/shared';
import { breakpoint } from '@styled/breakpoints.css';
import styled from 'styled-components';

const HelloSection = () => {
  const [themeIcon, setThemeIcon] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setThemeIcon(savedTheme);
  });

  return (
    <ColorBg>
      <BreakpointWrapper>
        <Wrapper>
          <ContentWrapper>
            <Heading2>Hi There!</Heading2>
            <p>
              The name is
              <span> Gabriel</span>, I'm a developer and graphic designer and
              this is my special little corner where I can write stuff and try
              out all kinds of looks and neat features.
              <br />
              Feel free to take a look around or get in touch.
            </p>
            <CTAButton
              whileHover={{
                filter: 'hue-rotate(60deg)',
                translateY: '-8px',
              }}
            >
              Speak to Me
            </CTAButton>
          </ContentWrapper>
          <LogoWrapper>
            <LogoIcon
              theme={themeIcon === 'dark' || !themeIcon ? '#000000' : '#f4f4f4'}
            />
          </LogoWrapper>
        </Wrapper>
      </BreakpointWrapper>
    </ColorBg>
  );
};

export default HelloSection;

const ColorBg = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0.5rem;
  * {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85em;
  padding: 0 1.3rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  rotate: 15deg;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  p {
    line-height: 1.25em;

    span {
      font-weight: 600;
    }
    @media (${breakpoint.device.md}) {
    }
  }
`;

const CTAButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  padding: 0.8rem;
  max-width: fit-content;
  margin: 1rem 0;
`;
