import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid ${(props) => props.theme.colors.accent};
  border-right: 2px solid ${(props) => props.theme.colors.accent};
  border-bottom: 2px solid ${(props) => props.theme.colors.accent};
  border-left: 4px solid black;
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export default Loader;
