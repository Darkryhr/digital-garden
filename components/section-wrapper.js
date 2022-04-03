import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SectionWrapper = ({ children, delay = 0 }) => {
  return (
    <Section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      mb={6}
    >
      {children}
    </Section>
  );
};

export default SectionWrapper;

const Section = styled(motion.section)`
  width: 100%;
  padding: 1.2rem 0 0.4rem 0;
  position: relative;
  overflow-x: clip;
`;
