import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LinkButton = styled(motion.button)`
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: none;
  color: #fff;
  font-size: 16px;
`;
export const Button = styled(motion.button)`
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: none;
  color: #fff;
  font-size: 16px;
`;

export const IconButton = styled(motion.button)`
  cursor: pointer;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
`;

export const StrokedButton = styled(motion.button)`
  border: none;
  font-weight: 600;
  background: orange;
  border-radius: 50px;
  padding: 6px 20px;
  cursor: pointer;
  display: block;
  margin: 2rem auto;
  font-size: 16px;
`;
