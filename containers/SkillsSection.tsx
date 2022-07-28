import React from 'react';
import Image from 'next/image';

import { Divider, Grid, Heading2 } from '@components/shared';
import skills from '../skills.json';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SectionWrapper from '@components/SectionWrapper';

const SkillsSection = () => {
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
                bgColor={skill.color}
              >
                <Image
                  src={skill.url}
                  alt={skill.name}
                  width='50px'
                  height='50px'
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

const ImageBubble = styled(motion.div)<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding: 2.2rem;
  width: 110px;
  height: 110px;
  cursor: pointer;
  border-radius: 99px;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    margin-top: 1rem;
    font-size: 0.9rem;
  }
`;
