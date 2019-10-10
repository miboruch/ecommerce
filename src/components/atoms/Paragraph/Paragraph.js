import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-size: ${({ theme }) => theme.fontSize.s};
  letter-spacing: 2px;
  padding: 2rem;
`;

export default Paragraph;
