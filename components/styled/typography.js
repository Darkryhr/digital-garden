import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Heading1 = styled(motion.h1)`
  font-weight: 700;
  font-size: 4rem;
  text-align: center;
  cursor: default;
`;

export const Heading2 = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 3rem;
`;

export const Heading3 = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2;
`;

export const Heading4 = styled.h3`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const Subtitle = styled.p`
  opacity: 0.8;
  font-weight: 300;
  font-size: 0.9rem;
  letter-spacing: 1px;
  line-height: 2;
`;

export const Text = styled.p`
  text-align: start;
  font-weight: 400;
  font-size: 0.8rem;
`;
