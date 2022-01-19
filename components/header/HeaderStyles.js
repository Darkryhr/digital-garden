import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  @media (max-width: 700px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 550px) {
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
  ${(props) =>
    props.mobile
      ? ''
      : `
display: flex;
  justify-content: flex-end;
  align-items: center;
`}

  @media (max-width: 1050px) {
    ${(props) => (props.mobile ? '' : ' display: none;')}
  }
`;

export const LinkWrapper = styled(motion.button)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-transform: capitalize;
  margin: 0 1rem;
  background: none;
  cursor: pointer;
  @media (max-width: 1050px) {
    margin-top: 1rem;
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
  background: ${(props) => props.theme.colors.primary};
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  @media (max-width: 550px) {
    top: 20px;
  }
`;

export const MobileWrapper = styled.div`
  margin-left: 1rem;
  display: none;
  position: relative;
  @media (max-width: 1050px) {
    display: flex;
  }
`;

export const LinkStyled = styled(motion.button)`
  background: none;
  cursor: pointer;
`;
