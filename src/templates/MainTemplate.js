import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../assets/styles/theme';
import GlobalStyle from '../assets/styles/GlobalStyle';
import SEO from '../components/SEO/SEO';
import Header from '../components/molecules/Header/Header';
import Menu from '../components/templates/Menu/Menu';
import Footer from '../components/templates/Footer/Footer';

import MenuContextProvider from '../contexts/MenuContext';

const StyledWrapper = styled.div`
  width: 100%;
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MenuContextProvider>
          <Header />
          <Menu />
          {children}
          <Footer />
        </MenuContextProvider>
      </ThemeProvider>
    </StyledWrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainTemplate;
