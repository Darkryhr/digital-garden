import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  font-weight: 500;
  letter-spacing: 0.02rem;
  cursor: pointer;
  border: none;
  background: none;
  border-radius: 5px;
`;

export const StrokedButton = styled(Button)`
  /* outline: 2px solid ${({ theme }) => theme.colors.secondary}; */
  padding: 0.6rem 1.2rem;
  font-weight: 400;
  font-size: 0.85rem;
  border-radius: 24px;
  margin: 0.4rem;
  margin-right: 0.6rem;
  ${props =>
    props.$accented
      ? `background: ${props.theme.colors.accent}; border:none;`
      : ''}
  ${props =>
    !props.$accented
      ? `outline: 2px solid ${props.theme.colors.secondary};`
      : ''}
`;

export const IconButton = styled(motion.button)`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
`;

export const ProjectButton = styled(motion.button)`
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;
  max-width: 80px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const GradientButton = styled(motion.button)`
  padding: 0.7rem 2rem;
  font-size: medium;
  font-weight: 500;
  background: ${props => props.theme.colors.gradient};
  border-radius: 24px;
  margin: 1.5rem 0 0.5rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
