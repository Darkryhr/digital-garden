import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Column, BreakpointWrapper } from '@components/shared';

import ProjectsSection from 'containers/ProjectsSection';
import SkillsSection from 'containers/SkillsSection';

const Portfolio = () => {
  return (
    <BreakpointWrapper>
      <Column $layout>
        <ProjectsSection />
        <Spacer />
        <SkillsSection />
      </Column>
    </BreakpointWrapper>
  );
};

export default Portfolio;

const ResumeButton = styled(motion.button)`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.border};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 15vh;
`;
