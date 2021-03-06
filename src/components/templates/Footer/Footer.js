import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  background: ${({ theme }) => theme.color.background};
  margin: 0;
  padding: 0;
  letter-spacing: 3px;
`;

const Footer = () => {
  return <StyledFooter>created by michalboruch 2019</StyledFooter>;
};

export default Footer;
