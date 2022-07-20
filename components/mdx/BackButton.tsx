import styled from 'styled-components';
import Link from 'next/link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Button } from '@components/shared';
import { breakpoint } from '@styled/breakpoints.css';

export const BackButton = props => (
  <Link href='/posts' passHref>
    <StyledButton {...props}>
      <HiArrowNarrowLeft size={26} />
    </StyledButton>
  </Link>
);

const StyledButton = styled(Button)`
  position: absolute;
  padding: 0;
  top: 0;
  left: 0;
  svg {
    fill: ${({ theme }) => theme.colors.text};
  }
  @media (${breakpoint.device.sm}) {
    padding-left: 1rem;
  }
`;
