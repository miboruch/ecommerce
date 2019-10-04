import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import GlobalStyle from '../assets/styles/GlobalStyle';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header/Header';

const StyledWrapper = styled.div`
  width: 100%;
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <>{children}</>
      </ThemeProvider>
    </StyledWrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default MainTemplate;
