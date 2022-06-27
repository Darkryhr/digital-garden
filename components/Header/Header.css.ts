import { motion } from 'framer-motion';
import styled from 'styled-components';
import { breakpoint } from '@styled/breakpoints.css';
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
  width: 100%;
  max-width: ${breakpoint.size.lg};
  margin: 0 auto;
  position: relative;
  z-index: 999;
  @media (${breakpoint.device.sm}) {
    padding: 1.5rem 1rem;
  }
`;

export const WrapperLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const WrapperRight = styled.div``;

export const LogoWrapper = styled(motion.div)`
  cursor: pointer;
  display: flex;
  color: '#fb8b24';
  max-width: 95px;
  margin-left: 3px;
`;

export const MenuStyles = styled(motion.div)<{ $mobile: boolean }>`
  ${props =>
    props.$mobile
      ? ''
      : `
display: flex;
  justify-content: flex-end;
  align-items: center;
`}

  @media (${breakpoint.device.sm}) {
    ${props => (props.$mobile ? '' : ' display: none;')}
  }
`;

export const MobileMenu = styled(motion.div)`
  display: flex;
  justify-content: flex-end;

  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  padding: 0.2rem 0.7rem 1.5rem 0;
  position: absolute;
  z-index: 999;
  right: 0;
  top: 40px;
  background: ${props => props.theme.colors.primary};
  margin-top: 1rem;
  min-width: 180px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  @media (${breakpoint.device.sm}) {
    top: 20px;
  }
`;

export const MobileWrapper = styled(motion.div)`
  margin-left: 1rem;
  display: none;
  position: relative;
  @media (${breakpoint.device.sm}) {
    display: flex;
  }
`;

export const LinkWrapper = styled(motion.div)<{
  $active: boolean;
  $currentTheme: string;
}>`
  line-height: 25px;
  margin: 0 0.3rem;
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  font-weight: 1.2rem;
  font-weight: ${props => (props.$active ? 700 : 500)};
  opacity: ${props => (props.$active ? 1 : 0.8)};

  text-transform: capitalize;
  justify-content: flex-end;
  &:last-child {
    margin-right: 0;
    padding-right: 0;
  }
  @media (${breakpoint.device.sm}) {
    margin-top: 1rem;
    &:last-child {
      margin: 0 1rem;
      margin-top: 1.1rem;
    }
  }
`;
