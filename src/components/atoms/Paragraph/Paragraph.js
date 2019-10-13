import React from 'react';
import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 2px;
  padding: 2rem;

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
`;

export default Paragraph;
