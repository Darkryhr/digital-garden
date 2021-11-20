import styled from 'styled-components';

export const Divider = styled.div`
  display: block;
  height: 2px;
  background: ${({ theme }) => theme.colors.accent};
  width: 40px;
  border-radius: 50px;
  /* opacity: 0.4; */
  margin: 12px 0 10px 0;
`;
