import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

import SectionWrapper from '@components/SectionWrapper';
import {
  GradientButton,
  ProjectButton,
  Grid,
  Container,
  Heading2,
  Subtitle,
} from '@components/shared';
import Modal from '@components/Modal';

import projects from './data.json';

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
    <Container
      style={{
        padding: '3rem 0',
      }}
    >
      <SectionWrapper delay={0.1}>
        <Heading2>Projects</Heading2>
      </SectionWrapper>
      <SectionWrapper delay={0.2}>
        <Subtitle>
          Wanna get down to business? Click below to save time and download my
          resume
        </Subtitle>
        <a href='/assets/portfolio/resume.docx' download>
          <GradientButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Resume
          </GradientButton>
        </a>
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
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
              whileHover={{ scale: 1.1 }}
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

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            project={modalProject}
          />
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Portfolio;
