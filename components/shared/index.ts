import styled from 'styled-components';
import { motion } from 'framer-motion';
import { breakpoint } from '@styled/breakpoints.css';

//* Button Styles
export const Button = styled(motion.button)<{ $filled?: boolean }>`
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: none;
  border-radius: 5px;
  padding: 0.6rem 1.2rem;

  ${props =>
    props.$filled
      ? `background: ${props.theme.colors.text}; color: ${props.theme.colors.primary};`
      : ''}
`;

export const StrokedButton = styled(Button)<{ $accented?: boolean }>`
  font-size: 0.89rem;
  font-weight: 600;
  border-radius: 24px;
  margin: 0.4rem;
  margin-right: 0.6rem;

  a {
    ${props => (props.$accented ? `color: black` : '')}
  }

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
  min-width: 50px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const GradientButton = styled(motion.button)`
  padding: 0.7rem 2rem;
  font-size: medium;
  font-weight: 500;
  margin-top: 1.5rem;
  background: ${props => props.theme.colors.gradient};
  border-radius: 24px;
  border: none;
  color: #fff;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  opacity: 0.6;
  background-color: ${({ theme }) => theme.colors.border};
  margin: 1.35em 0 1em 0;
`;

//* Wrappers
export const Container = styled.section`
  min-height: calc(100vh - 100px);
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 100%;
  max-width: ${breakpoint.size.md};
  @media (${breakpoint.device.sm}) {
    padding: 0;
  }
`;

export const Column = styled.section<{ $end?: boolean; $layout?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0.2rem;
  ${props => (props.$end ? 'align-items: flex-end' : '')};
  ${props => (props.$layout ? 'padding: 3rem 0' : '')};

  @media (${breakpoint.device.sm}) {
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  row-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(101px, 1fr));
  padding: 1rem 0;
  grid-template-rows: auto;
  margin: 1em auto;
  justify-content: center;
  justify-items: center;
  width: 100%;
  max-width: ${breakpoint.size.lg};
`;

export const SnippetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BlogLayout = styled.main`
  font-family: 'IBM Plex sans', Tahoma, Geneva, Verdana, sans-serif !important;
  position: relative;
`;

export const SnippetLayout = styled.main`
  font-family: 'IBM Plex sans', Tahoma, Geneva, Verdana, sans-serif !important;
`;

export const BreakpointWrapper = styled.div`
  max-width: ${breakpoint.size.sm};
  width: 100%;
  margin: 0 auto;
`;

//* Typography
export const Heading1 = styled(motion.h1)`
  margin: 0;
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
  padding: 0 0 1rem 0;
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
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const Subtitle = styled.p`
  opacity: 0.8;
  font-weight: 400;
  letter-spacing: 0.01rem;
  line-height: 1.5;
  font-size: 0.9rem;
  .bot {
    margin-bottom: 2rem;
  }
  @media (${breakpoint.device.sm}) {
    font-size: 0.85rem;
    padding: 0.5rem 0 0 0;
  }
`;

export const Lead = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 2px;
  line-height: 2;
  color: ${({ theme }) => theme.colors.accent};
  @media (${breakpoint.device.sm}) {
    font-size: 0.7rem;
  }
`;

export const Muted = styled.p`
  opacity: 0.8;
  font-weight: 500;
  font-size: 0.9rem;
  padding: 1rem 0 0 0;
`;
