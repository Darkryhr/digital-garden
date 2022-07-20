import { Button, Container, BreakpointWrapper } from '@components/shared';
import Link from 'next/link';
import { BiHomeAlt } from 'react-icons/bi';
import styled from 'styled-components';

export default function Custom404() {
  return (
    <BreakpointWrapper>
      <CustomContainer>
        <Message>Page Not Found</Message>
        <Link href='/'>
          <a>
            <HomeButton
              whileHover={{
                translateY: '-5px',
              }}
            >
              <BiHomeAlt size={22} />
              <span>Go back home</span>
            </HomeButton>
          </a>
        </Link>
      </CustomContainer>
    </BreakpointWrapper>
  );
}

const Message = styled.h1`
  text-align: center;
  &::before {
    content: '404';
    display: block;
    font-size: 9rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }
  font-weight: 600;
  color: ${({ theme }) => `${theme.colors.text}90`};
`;

const HomeButton = styled(Button)`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.colors.text};
  span {
    margin-top: 2px;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.primary};
  }
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

const CustomContainer = styled(Container)`
  align-items: center;
  justify-content: center;
`;
