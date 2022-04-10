import styled from 'styled-components';
import { breakpoint } from './breakpoints';
//* Wrappers
export const SpacedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.6rem;
  @media (${breakpoint.device.sm}) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled(SpacedRow)`
  height: calc(100vh - 100px);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  @media (${breakpoint.device.sm}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  min-height: calc(100vh - 100px);
  padding: ${props => (props.p ? props.p : '0')};
  /* @media (${breakpoint.device.sm}) {
    padding-left: 1rem;
    padding-right: 1rem;
  } */
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
  @media (${breakpoint.device.sm}) {
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  row-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding: 1rem 2rem;
  grid-template-rows: auto;
  margin: 0 auto;
  justify-content: center;
  justify-items: center;
  /* width: 100%; */
  max-width: ${breakpoint.size.lg};
`;
