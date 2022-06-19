import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoint } from '@styled/breakpoints.css';

//* Button Styles
export const Button = styled(motion.button)`
  font-weight: 500;
  letter-spacing: 0.02rem;
  cursor: pointer;
  border: none;
  background: none;
  border-radius: 5px;
`;

export const StrokedButton = styled(Button)`
  padding: 0.6rem 1.2rem;
  font-weight: 400;
  font-size: 0.85rem;
  border-radius: 24px;
  margin: 0.4rem;
  margin-right: 0.6rem;
  ${props =>
    props.$accented
      ? `background: ${props.theme.colors.accent}; border:none;`
      : ''}
  ${props =>
    !props.$accented
      ? `outline: 2px solid ${props.theme.colors.secondary};`
      : ''}
`;

export const IconButton = styled(motion.button)`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
`;

export const ProjectButton = styled(motion.button)`
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;
  max-width: 80px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const GradientButton = styled(motion.button)`
  padding: 0.7rem 2rem;
  font-size: medium;
  font-weight: 500;
  background: ${props => props.theme.colors.gradient};
  border-radius: 24px;
  margin: 1.5rem 0 0.5rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

//* Wrappers
export const SpacedRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.6rem;
  flex-direction: column;
`;

export const ContentWrapper = styled(SpacedRow)`
  min-height: calc(100vh - 100px);
  max-height: 200vh;
  overflow: scroll;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 3rem 0;
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

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Box = styled.div`
  /* display: flex; */
  margin: 0 auto;
  max-width: ${breakpoint.size.sm};
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

//* Typography
export const Heading1 = styled(motion.h1)`
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: 2px;
  cursor: default;
  @media (${breakpoint.device.sm}) {
    font-size: 3rem;
  }
  @media (${breakpoint.device.xs}) {
    font-size: 2rem;
  }
`;

export const Heading2 = styled.h2`
  font-weight: 700;
  line-height: 1.16;
  font-size: 3rem;
  @media (${breakpoint.device.sm}) {
    font-size: 2rem;
  }
  @media (${breakpoint.device.xs}) {
    font-size: 1.8rem;
  }
`;

export const Heading3 = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.4;
  @media (${breakpoint.device.sm}) {
    font-size: 1.5rem;
  }
  @media (${breakpoint.device.xs}) {
    font-size: 1rem;
  }
`;

export const Heading4 = styled.h4`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const Subtitle = styled.p`
  opacity: 0.8;
  font-weight: 400;
  letter-spacing: 0.01rem;
  line-height: 2;
  @media (${breakpoint.device.sm}) {
    font-size: 0.7rem;
  }
`;

export const Lead = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.76rem;
  letter-spacing: 3px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.accent};
  @media (${breakpoint.device.sm}) {
    font-size: 0.65rem;
  }
`;

export const Muted = styled.p`
  opacity: 0.8;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 1rem 0 0 0;
`;
