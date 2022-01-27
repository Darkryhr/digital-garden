import React from 'react';
import Image from 'next/image';

import SectionWrapper from '@components/section-wrapper';
import { GradientButton, ProjectButton } from '@components/styled/button';
import { Heading2, Subtitle, Text } from '@components/styled/typography';
import { Grid, Row, Column } from '@components/styled/LayoutStyles';

const projects = [
  {
    name: 'Sightsee',
    url: 'https://clever-stonebraker-68587b.netlify.app/',
    img: '/assets/portfolio/sightsee.svg',
    desc: 'fullstack vacation site w/ RTK and Sequelize',
  },
  {
    name: 'Urban Viking',
    url: 'https://urban-vikings.vercel.app/',
    img: '/assets/portfolio/urban-viking.svg',
    desc: 'E-comm site w/ context and stripe',
  },
  {
    name: 'Vex Blogs',
    url: 'https://next-blog-nine-henna.vercel.app/',
    img: '/assets/portfolio/vex.svg',
    desc: 'NextJS blog w/ markdown',
  },
  {
    name: 'Firestarter',
    url: 'https://wonderful-goldstine-9fcc89.netlify.app/',
    img: '/assets/portfolio/firestarter.svg',
    desc: 'Angular kanban board',
  },
];

const Portfolio = () => {
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
          {projects.map(({ name, url, img, desc }) => (
            <a href={url} target='_blank' rel='noreferrer' key={name}>
              <ProjectButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src={img} alt={desc} width={48} height={48} />
              </ProjectButton>
            </a>
          ))}
        </Grid>
      </SectionWrapper>
    </>
  );
};

export default Portfolio;
