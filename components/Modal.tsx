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
        <Subtitle style={{ textAlign: 'center', lineHeight: '1.5' }}>
          {project.desc}
        </Subtitle>
        <ButtonWrapper>
          <a href={project.repo} target='_blank' rel='noreferrer'>
            <RepoButton
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Repo
            </RepoButton>
          </a>
          <a href={project.url} target='_blank' rel='noreferrer'>
            <DeployButton
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Visit
            </DeployButton>
          </a>
        </ButtonWrapper>
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

const Button = styled(motion.button)`
  padding: 0.5rem 1.3rem;
  border-radius: 0.2rem;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.border};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

const DeployButton = styled(Button)`
  background: ${({ theme }) => theme.colors.accent};
  border: none;
`;

const RepoButton = styled(Button)`
  background: none;
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;

  justify-content: space-between;
  & * + * {
    margin-left: 0.5rem;
  }
`;

const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 0 0.4rem 0;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  padding-bottom: 0.2rem;
  /* padding: 0.4rem; */
  padding-right: 0.5rem;
  display: inline-block;
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.text + 90};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
