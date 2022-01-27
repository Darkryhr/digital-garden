import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  cursor: pointer;
  border: none;
  background: none;
  border-radius: 5px;
`;

export const IconButton = styled(motion.button)`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  margin-left: 1em;
`;

export const ProjectButton = styled(motion.button)`
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;
  max-width: 80px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const GradientButton = styled.button`
  padding: 0.7rem 2rem;
  font-size: medium;
  background: ${(props) => props.theme.colors.gradient};
  border-radius: 24px;
  margin: 1.4rem 0;
`;
