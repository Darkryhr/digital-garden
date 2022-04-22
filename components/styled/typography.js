import { motion } from 'framer-motion';
import styled from 'styled-components';
import { breakpoint } from './breakpoints';

export const Heading1 = styled(motion.h1)`
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: 2px;
  cursor: default;
  padding: 0.7rem 0;
  @media (${breakpoint.device.sm}) {
    font-size: 3rem;
  }
  @media (${breakpoint.device.xs}) {
    font-size: 2rem;
  }
`;

export const Heading2 = styled.h2`
  font-weight: 700;
  line-height: 1.16;
  font-size: 3.2rem;
  @media (${breakpoint.device.sm}) {
    font-size: 2.5rem;
  }
  @media (${breakpoint.device.xs}) {
    font-size: 1.8rem;
  }
`;

export const Heading3 = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.4;
  @media (${breakpoint.device.sm}) {
    font-size: 1.5rem;
  }
  @media (${breakpoint.device.xs}) {
    font-size: 1rem;
  }
`;

export const Heading4 = styled.h4`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const Subtitle = styled.p`
  opacity: 0.8;
  font-weight: 400;
  letter-spacing: 0.01rem;
  line-height: 2;
  @media (${breakpoint.device.sm}) {
    font-size: 0.7rem;
  }
`;

export const Lead = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.76rem;
  letter-spacing: 3px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.accent};
  @media (${breakpoint.device.sm}) {
    font-size: 0.65rem;
  }
`;

export const Text = styled.p`
  text-align: start;
  font-weight: 400;
  font-size: 0.8rem;
`;

export const Muted = styled.p`
  opacity: 0.8;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 1rem 0 0 0;
`;
