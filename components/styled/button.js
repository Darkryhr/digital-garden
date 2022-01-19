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
