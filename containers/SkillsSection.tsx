import React from 'react';
import Image from 'next/image';

import { Divider, Grid, Heading2 } from '@components/shared';
import skills from '../skills.json';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionWrapper from '@components/SectionWrapper';
import { useDarkMode } from 'hooks/useDarkMode';

const SkillsSection = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  if (!mountedComponent) return null;

  console.log(theme === 'dark');

  return (
    <>
      <SectionWrapper delay={0.4}>
        <Heading2>Skills</Heading2>
      </SectionWrapper>
      <SectionWrapper delay={0.5}>
        <Divider />
      </SectionWrapper>
      <SectionWrapper delay={0.6}>
        <Grid $min={120}>
          {skills.map(skill => (
            <SkillWrapper key={skill.name}>
              <ImageBubble
                whileHover={{
                  scale: 1.05,
                }}
              >
                <Image
                  src={skill.url}
                  alt={skill.name}
                  width='45px'
                  height='45px'
                />
              </ImageBubble>
              <span>{skill.name}</span>
            </SkillWrapper>
          ))}
        </Grid>
      </SectionWrapper>
    </>
  );
};

export default SkillsSection;

const ImageBubble = styled(motion.div)<{ $isDarkMode?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    margin-top: 1rem;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;
