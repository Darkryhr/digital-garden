import styled from 'styled-components';

//* Wrappers
export const SpacedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.6rem;
`;

export const ContentWrapper = styled(SpacedRow)`
  height: 100vh;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  padding-top: 5rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: ${props => (props.p ? props.p : '')};
  /* padding-top: 3rem; */
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
  row-gap: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 1rem 4rem;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  width: 100%;
`;
