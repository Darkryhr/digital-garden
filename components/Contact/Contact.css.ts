import { Column } from '@components/shared';
import { breakpoint } from '@styled/breakpoints.css';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CustomColumn = styled(Column)`
  @media (${breakpoint.device.sm}) {
    align-items: center;
  }
`;

export const Span = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  font-weight: 500;
  font-size: 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  margin: 0 1rem;
  @media (${breakpoint.device.sm}) {
    margin: 1rem 0 0 0;
  }
`;

export const OrEmail = styled.div`
  padding: 0;
  margin: 0;
  text-align: end;
  width: fit-content;
  max-width: 125px;
  @media (${breakpoint.device.sm}) {
    padding-top: 1rem;
    text-align: center;
    max-width: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 550px;
  padding: 2rem 0;
  /* min-width: 530px; */

  @media (${breakpoint.device.xs}) {
    padding: 0;
    max-width: none;
  }
`;

export const EmailLink = styled.a`
  padding-top: 0.2rem;
  opacity: 0.8;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.4rem;
  margin-bottom: 0.8rem;
`;

export const InputContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  margin-right: 1rem;
  flex-direction: column;
  padding: 0.7rem 0 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  transition: ease-in 200ms;
  outline: transparent solid 2px;
  outline-offset: 2px;
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  @media (${breakpoint.device.sm}) {
    width: 100%;
  }
  &:last-child {
    margin-right: 0;
  }

  &:focus-within {
    z-index: 1;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.colors.accent} 0px 0px 0px 1px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.secondary}
      inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const Input = styled(motion.input)`
  outline: none;
  border: none;
  background: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.96rem;
  text-overflow: ellipsis;
`;

export const Shout = styled.h4`
  letter-spacing: 0.03rem;
  font-size: 1.2rem;
  font-weight: 700;
  padding-bottom: 2rem;
  text-align: start;
`;

export const AreaContainer = styled.div`
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.7rem 0 0.5rem 1rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.secondary};

  transition: ease-in 200ms;
  outline: transparent solid 2px;
  outline-offset: 2px;
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:focus-within {
    z-index: 1;
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.colors.accent} 0px 0px 0px 1px;
  }
`;

export const TextArea = styled.textarea`
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`;

export const Submit = styled(motion.button)`
  background: none;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  margin: 0.7rem 0;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 125px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  justify-content: center;
  outline: none;
  cursor: pointer;
  &:disabled {
    cursor: default;
    filter: brightness(70%);
    background: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    min-width: 20px;
    margin-right: 5px;
  }
  @media (${breakpoint.device.sm}) {
    max-width: none;

    width: 100%;
  }
`;

export const SubmitWrapper = styled.div`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (${breakpoint.device.sm}) {
    flex-direction: column;
    justify-content: center;
  }
`;
