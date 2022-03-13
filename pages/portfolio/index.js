import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

import SectionWrapper from '@components/section-wrapper';
import {
  GradientButton,
  GradientWrapper,
  ProjectButton,
} from '@components/styled/button';
import {
  Heading2,
  Heading3,
  Heading4,
  Subtitle,
} from '@components/styled/typography';
import { Grid, Row, Column, Container } from '@components/styled/LayoutStyles';
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
    <Container>
      <SectionWrapper delay={0.1}>
        <Row>
          <Heading2>Projects</Heading2>
        </Row>
      </SectionWrapper>
      <SectionWrapper delay={0.2}>
        <Column>
          <Subtitle>
            Wanna get down to business? Click below to save time and download my
            resume
          </Subtitle>
          <GradientButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href='/assets/portfolio/resume.docx' download>
              Resume
            </a>
          </GradientButton>
        </Column>
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
        <Grid>
          {projects.map(({ name, url, icon, desc, tags }) => (
            <ProjectButton
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
              <Image src={icon} alt={desc} width={48} height={48} />
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
