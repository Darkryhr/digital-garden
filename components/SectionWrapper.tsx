import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { breakpoint } from '@styled/breakpoints.css';
import { Column } from './shared';

const SectionWrapper = ({ children, delay = 0 }) => {
  return (
    <Section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <Column>{children}</Column>
    </Section>
  );
};

export default SectionWrapper;

const Section = styled(motion.section)`
  width: 100%;
  position: relative;
  overflow-x: clip;
  padding: 0.4rem 0;
  @media (${breakpoint.device.sm}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
