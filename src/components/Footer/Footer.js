import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 25px;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  background: ${({ theme }) => theme.color.background};
  margin: 0;
  padding: 0;
  text-align: center;
  letter-spacing: 3px;
`;

const Footer = () => {
  return <StyledFooter>CREATED BY MICHALBORUCH 2019</StyledFooter>;
};

export default Footer;
