import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

import projects from '../data.json';
import Modal from '@components/Modal';
import SectionWrapper from '@components/SectionWrapper';
import { Divider, Grid, Heading2, ProjectButton } from '@components/shared';

const ProjectsSection = () => {
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
      <SectionWrapper delay={0.1}>
        <Heading2>Projects</Heading2>
      </SectionWrapper>
      <SectionWrapper delay={0.2}>
        <Divider />
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
              whileHover={{
                translateY: '-10px',
              }}
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
    </>
  );
};

export default ProjectsSection;
