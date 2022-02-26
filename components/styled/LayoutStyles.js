import styled from 'styled-components';

//* Wrappers
export const SpacedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ContentWrapper = styled(SpacedRow)`
  /* height: ${props => (props.height ? props.height : 'inherit')}; */
  height: 100vh;
  width: 100%;
  max-width: 768px;
  padding: 0 3vw;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (min-width: 900px) {
    padding-top: 100px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 900px) {
    padding-top: 2rem;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
`;

//* Standard centered row
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 1rem 4rem;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  width: 100%;
`;
