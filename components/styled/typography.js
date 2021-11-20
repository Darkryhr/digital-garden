import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-weight: 700;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Heading2 = styled.h2`
  font-weight: 600;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Heading3 = styled.h3`
  font-weight: 600;
  padding: 10px 0;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  opacity: 0.8;
  padding-top: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  font-weight: 500;
  padding-top: 6px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled.p`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;
