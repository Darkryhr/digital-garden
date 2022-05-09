import styled, { keyframes } from 'styled-components';
import React, { useEffect } from 'react';
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const scale = keyframes`
  50%{
    transform: scale(0.5);
  }
`;

const Loaderr = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid ${props => props.theme.colors.accent};
  border-right: 2px solid ${props => props.theme.colors.accent};
  border-bottom: 2px solid ${props => props.theme.colors.accent};
  border-left: 4px solid black;
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Loader = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    return function cleanup() {
      document.body.style.overflow = 'scroll';
      document.body.style.height = '100%';
    };
  }, []);

  return (
    <Loading>
      <Circles>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Circles>
    </Loading>
  );
};

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  transition: ease all 0.2s;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circles = styled.div`
  width: 120px;
  height: 120px;
  display: grid;
  grid-template-columns: repeat(4, 20px);
  grid-template-rows: repeat(4, 20px);
  justify-content: space-between;
  align-content: space-between;
  transform: rotate(-45deg);
  span {
    background-color: ${({ theme }) => theme.colors.accent};

    border-radius: 50%;
    animation: ${scale} 1.6s linear infinite;
    &:nth-child(4n + 3) {
      animation-delay: 200ms;
    }

    &:nth-child(4n + 2) {
      animation-delay: 400ms;
    }

    &:nth-child(4n + 1) {
      animation-delay: 600ms;
    }
  }
`;

export default Loader;
