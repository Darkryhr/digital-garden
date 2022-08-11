import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { HiDownload } from 'react-icons/hi';

import { Paragraph } from '@components/mdx/mdx.css';
import SectionWrapper from '@components/SectionWrapper';
import { Divider, Heading2 } from '@components/shared';

const ResumeSection = () => {
  return (
    <>
      <SectionWrapper>
        <Heading2>Resume</Heading2>
      </SectionWrapper>
      <SectionWrapper>
        <Divider />
      </SectionWrapper>
      <SectionWrapper>
        <Paragraph>Wanna download my resume? Click below</Paragraph>
      </SectionWrapper>
      <SectionWrapper>
        <ResumeButton>
          <a href='/assets/portfolio/resume.docx' download>
            <HiDownload
              size={16}
              style={{
                marginRight: '6px',
              }}
            />
            Resume
          </a>
        </ResumeButton>
      </SectionWrapper>
    </>
  );
};

export default ResumeSection;

const ResumeButton = styled(motion.button)`
  font-weight: 500;
  width: 100px;
  /* border: 2px solid ${({ theme }) => theme.colors.border}; */
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
`;
