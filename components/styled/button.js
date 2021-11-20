import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LinkButton = styled(motion.button)`
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  color: ${(props) =>
    props.$active ? props.theme.colors.accent : props.theme.colors.secondary};
`;
export const Button = styled(motion.button)`
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  padding: 1.4em 0;
`;

export const IconButton = styled(motion.button)`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  margin-left: 1em;
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
