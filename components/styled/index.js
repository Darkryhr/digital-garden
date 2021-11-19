import styled from 'styled-components';

export const Divider = styled.div`
  display: block;
  height: 2px;
  background: white;
  width: 40px;
  border-radius: 50px;
  opacity: 0.4;
  margin: 8px 0 12px 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.toCol ? 'column' : 'row')};
  }
`;
