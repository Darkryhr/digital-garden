import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

import SectionWrapper from '@components/SectionWrapper';
import {
  GradientButton,
  ProjectButton,
  Grid,
  Heading2,
  Subtitle,
  Box,
  Column,
  Divider,
  Row,
} from '@components/shared';
import Modal from '@components/Modal';
import { AiOutlineArrowDown } from 'react-icons/ai';

import projects from './data.json';
import styled from 'styled-components';

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState({});
  const close = () => {
    document.body.style.overflow = 'scroll';
    document.body.style.height = '100%';
    setModalOpen(false);
  };

  const open = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    setModalOpen(true);
  };

  return (
    <>
      <Column $layout>
        <SectionWrapper delay={0.1}>
          <Box>
            <Row>
              <Heading2>Projects</Heading2>
              <ResumeButton>
                <a href='/assets/portfolio/resume.docx' download>
                  <AiOutlineArrowDown
                    size={22}
                    style={{
                      marginTop: '0.2rem',
                    }}
                  />
                </a>
              </ResumeButton>
            </Row>
          </Box>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <Subtitle>
            Wanna get down to business? Click below to save time and download my
            resume
          </Subtitle>
        </SectionWrapper>
        <Divider />
        <SectionWrapper delay={0.4}>
          <Grid>
            {projects.map(({ name, url, icon, desc, tags, blurUrl }) => (
              <ProjectButton
                data-cy='portfolio-project'
                key={name}
                onClick={() => {
                  !modalOpen
                    ? setModalProject({ name, url, icon, desc, tags })
                    : setModalProject({});
                  modalOpen ? close() : open();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={icon}
                  alt={desc}
                  width={48}
                  height={48}
                  placeholder='blur'
                  blurDataURL={blurUrl}
                />
              </ProjectButton>
            ))}
          </Grid>
        </SectionWrapper>
        {/*
 // @ts-ignore */}
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {modalOpen && <Modal handleClose={close} project={modalProject} />}
        </AnimatePresence>
      </Column>
    </>
  );
};

export default Portfolio;

export const ResumeButton = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.border};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
