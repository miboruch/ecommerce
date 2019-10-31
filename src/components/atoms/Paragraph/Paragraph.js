import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 2px;
  padding: 2rem;
  transition: opacity 0.5s ease, visibility 0.5s ease;

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xs};
    `};

  ${({ medium }) =>
    medium &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
    `};

  ${({ large }) =>
    large &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
    `}

  ${({ error }) =>
    error &&
    css`
      color: tomato;
    `}
`;

export default Paragraph;
