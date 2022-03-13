import { motion } from 'framer-motion';
import styled from 'styled-components';
import { breakpoint } from './breakpoints';

export const Heading1 = styled(motion.h1)`
  font-weight: 700;
  font-size: 4rem;
  text-align: center;
  cursor: default;
  padding: 0.7rem 0;
  @media (${breakpoint.device.xs}) {
    font-size: 3rem;
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

export const Heading4 = styled.h3`
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
  text-align: center;
`;

export const Text = styled.p`
  text-align: start;
  font-weight: 400;
  font-size: 0.8rem;
`;
