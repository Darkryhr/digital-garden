import { motion } from 'framer-motion';
import styled from 'styled-components';
import { breakpoint } from '@components/styled/breakpoints';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  @media (${breakpoint.device.sm}) {
    padding: 2rem;
  }
`;

export const WrapperLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const WrapperRight = styled.div``;

export const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  color: '#fb8b24';
  max-width: 120px;
`;

export const MenuStyles = styled(motion.div)`
  ${props =>
    props.mobile
      ? ''
      : `
display: flex;
  justify-content: flex-end;
  align-items: center;
`}

  @media (${breakpoint.device.sm}) {
    ${props => (props.mobile ? '' : ' display: none;')}
  }
`;

export const MobileMenu = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  padding: 2rem;
  position: absolute;
  z-index: 999;
  right: 0;
  top: 40px;
  background: ${props => props.theme.colors.primary};
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
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
  margin: 0 1rem;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 18px;
  justify-content: flex-end;
  color:${props => (props.currentTheme === 'dark' ? '#f4f4f4' : '#000000')}
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
`;
