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
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//* Lists
export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5em;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SkillItem = styled.li`
  display: block;
  opacity: 0.8;
  font-size: 0.9em;
  margin-bottom: 0.2rem;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.toCol ? 'column' : 'row')};
  }
`;
