import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const Heading2 = styled.h2`
  font-weight: 600;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Heading3 = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  opacity: 0.8;
  font-weight: 300;
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 2.5;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`;
