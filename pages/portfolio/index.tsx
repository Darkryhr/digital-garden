import React from 'react';
import styled from 'styled-components';

import { Column, BreakpointWrapper } from '@components/shared';

import ProjectsSection from 'containers/ProjectsSection';
import SkillsSection from 'containers/SkillsSection';
import ResumeSection from 'containers/ResumeSection';

const Portfolio = () => {
  return (
    <BreakpointWrapper>
      <Column $layout>
        <ProjectsSection />
        <Spacer />
        {/* <ResumeSection />
        <Spacer /> */}
        <SkillsSection />
      </Column>
    </BreakpointWrapper>
  );
};

export default Portfolio;

const Spacer = styled.div`
  height: 10vh;
`;
