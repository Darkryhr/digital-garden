import React from 'react';
import Image from 'next/image';

import SectionWrapper from '@components/section-wrapper';
import { GradientButton, ProjectButton } from '@components/styled/button';
import { Heading2, Subtitle, Text } from '@components/styled/typography';
import { Grid, Row, Column } from '@components/styled/LayoutStyles';

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
          <GradientButton>
            <a href='/assets/portfolio/resume.pdf' download>
              Resume
            </a>
          </GradientButton>
        </Column>
      </SectionWrapper>
      <SectionWrapper delay={0.3}>
        <Grid>
          <a
            href='https://clever-stonebraker-68587b.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <ProjectButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={'/assets/portfolio/sightsee.svg'}
                alt='vacation site'
                width={48}
                height={48}
              />
            </ProjectButton>
          </a>
          <a
            href='https://urban-vikings.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <ProjectButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={'/assets/portfolio/urban-viking.svg'}
                alt='e-comm site'
                width={48}
                height={48}
              />
            </ProjectButton>
          </a>
          <a
            href='https://next-blog-nine-henna.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <ProjectButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={'/assets/portfolio/vex.svg'}
                alt='blog site'
                width={48}
                height={48}
              />
            </ProjectButton>
          </a>
        </Grid>
      </SectionWrapper>
    </>
  );
};

export default Portfolio;
