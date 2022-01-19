import styled from 'styled-components';

//* Wrappers
export const SpacedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled(SpacedRow)`
  height: ${(props) => (props.height ? props.height : 'inherit')};
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 227px);
`;
