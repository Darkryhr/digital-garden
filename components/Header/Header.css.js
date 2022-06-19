import { motion } from 'framer-motion';
import styled from 'styled-components';
import { breakpoint } from '@styled/breakpoints.css';
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 4rem;
  width: 100%;
  max-width: ${breakpoint.size.lg};
  margin: 0 auto;
  position: relative;
  z-index: 999;
  @media (${breakpoint.device.sm}) {
    padding: 1.4rem;
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

export const MenuStyles = styled(motion.div)`
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
  padding: 0.7rem 0.7rem 1.7rem 0;
  position: absolute;
  z-index: 999;
  right: 0;
  top: 40px;
  background: ${props => props.theme.colors.primary};
  margin-top: 1rem;
  min-width: 180px;
  border-radius: 5px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); */
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-right: 2px solid ${({ theme }) => theme.colors.accent};
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

export const LinkWrapper = styled(motion.div)`
  line-height: 25px;
  margin: 0 0.3rem;
  padding: 0.3rem 0.7rem;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  background-color: ${props =>
    props.$active ? props.theme.colors.accent : 'none'};

  text-transform: capitalize;
  font-size: 16px;
  justify-content: flex-end;
  color: ${props => (props.$currentTheme === 'dark' ? '#f4f4f4' : '#000000')};
  &:last-child {
    margin-right: 0;
  }
  @media (${breakpoint.device.sm}) {
    margin-top: 1rem;
    &:last-child {
      margin: 0 1rem;
      margin-top: 1.1rem;
    }
  }
  a {
    color: ${props => (props.$active ? '#000000' : props.theme.colors.text)};
  }
`;
