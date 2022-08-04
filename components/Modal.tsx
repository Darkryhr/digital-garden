import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import Backdrop from './Backdrop';
import { Heading3, Subtitle } from '@components/shared';

const Modal = ({ handleClose, project }) => {
  const dropIn = {
    hidden: {
      y: '100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.2,
        type: 'spring',
        damping: 35,
        bounce: 0,
        stiffness: 250,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <ModalWrapper
        onClick={e => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <Heading3 style={{ marginBottom: '0.6rem' }}>{project.name}</Heading3>
        <TagWrapper>
          {project.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagWrapper>
        <Subtitle style={{ textAlign: 'start', lineHeight: '1.5' }}>
          {project.desc}
        </Subtitle>

        <a href={project.url} target='_blank' rel='noreferrer'>
          <ModalButton
            onClick={handleClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Visit
          </ModalButton>
        </a>
      </ModalWrapper>
    </Backdrop>
  );
};

export default Modal;

const ModalWrapper = styled(motion.div)`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.7rem 2rem;
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-top: 3px solid ${({ theme }) => theme.colors.accent};
  width: clamp(20%, 400px, 80%);
  /* height: min(65%, 200px); */
  min-height: 200px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const ModalButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.6rem 1.5rem;
  border-radius: 0.2rem;
  margin-top: 1rem;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.secondary};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0.2rem 0 0.4rem 0;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: 600;
  /* padding: 0.4rem; */
  padding-right: 0.5rem;
  display: inline-block;
  -space: nowrap;

  color: ${({ theme }) => theme.colors.accent};
`;
