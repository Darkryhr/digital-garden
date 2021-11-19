import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.2em;
`;

export const SkillList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillItem = styled.li`
  display: block;
  opacity: 0.8;
  font-size: 0.9em;
  margin-bottom: 0.2rem;
`;

export const Section = styled(motion.section)`
  padding: 2em 1em;
`;

export const Card = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 1em 0.5vw;
  cursor: pointer;
  margin-bottom: 1em;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5em;
  &:last-child {
    margin-bottom: 0;
  }
`;
