import React from 'react';
import MainTemplate from './templates/MainTemplate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProductsContextProvider from './contexts/ProductsContext';

import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <MainTemplate>
      <ProductsContextProvider>
        <Router>
          <Switch>
            <Route path={'/'} component={LandingPage} />
          </Switch>
        </Router>
      </ProductsContextProvider>
    </MainTemplate>
  );
}

export default App;
