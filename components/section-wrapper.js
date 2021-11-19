import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './styled/LayoutStyles';

const SectionWrapper = ({ children, delay = 0 }) => {
  return (
    <Section
      as={motion.div}
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
