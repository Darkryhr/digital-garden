import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiUpArrow } from 'react-icons/bi';
import { IconButton } from './styled/button';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const ToggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', ToggleVisibility);

    return () => window.removeEventListener('scroll', ToggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <Scroll
          onClick={ScrollToTop}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <IconButton type='button'>
            <BiUpArrow size={28} fill='#fb8b24' />
          </IconButton>
        </Scroll>
      ) : (
        ''
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

const Scroll = styled(motion.div)`
  position: fixed;
  z-index: 999;
  bottom: 0;
  right: 10px;
  margin: 2rem;
  background: ${({ theme }) => theme.colors.secondary};
  width: 50px;
  height: 50px;
  padding: 2rem;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
