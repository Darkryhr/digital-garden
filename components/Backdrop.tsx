import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Backdrop = ({ children, onClick }) => {
  return (
    <Overlay
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Overlay>
  );
};

export default Backdrop;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(24, 24, 24, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;
