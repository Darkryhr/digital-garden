import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';

import SectionWrapper from '@components/section-wrapper';
import { GradientButton, ProjectButton } from '@components/styled/button';
import { Heading2, Subtitle, Text } from '@components/styled/typography';
import { Grid, Row, Column } from '@components/styled/LayoutStyles';
import Modal from '@components/Modal';

const projects = [
  {
    name: 'Sightsee',
    url: 'https://clever-stonebraker-68587b.netlify.app/',
    icon: '/assets/portfolio/sightsee.svg',
    desc: 'fullstack vacation site w/ RTK and Sequelize',
    img: '/assets/portfolio/sightsee-preview.png',
  },
  {
    name: 'Urban Viking',
    url: 'https://urban-vikings.vercel.app/',
    icon: '/assets/portfolio/urban-viking.svg',
    desc: 'E-comm site w/ context and stripe',
    img: '/assets/portfolio/urban-viking-preview.png',
  },
  {
    name: 'Vex Blogs',
    url: 'https://next-blog-nine-henna.vercel.app/',
    icon: '/assets/portfolio/vex.svg',
    desc: 'NextJS blog w/ markdown',
    img: '/assets/portfolio/vex-preview.png',
  },
  {
    name: 'Firestarter',
    url: 'https://wonderful-goldstine-9fcc89.netlify.app/',
    icon: '/assets/portfolio/firestarter.svg',
    desc: 'Angular kanban board',
    img: '/assets/portfolio/firestarter-preview.png',
  },
];

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState({});

  const close = () => {
    document.body.style.overflow = 'scroll';
    setModalOpen(false);
  };

  const open = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  };

  return (
    <>
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
            <a href='/assets/portfolio/resume.pdf' download>
              Resume
            </a>
          </GradientButton>
        </Column>
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
        <Grid>
          {projects.map(({ name, url, icon, desc }) => (
            <ProjectButton
              key={name}
              onClick={() => {
                !modalOpen
                  ? setModalProject({ name, url, icon, desc })
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
    </>
  );
};

export default Portfolio;
