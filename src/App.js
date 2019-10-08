import React from 'react';
import MainTemplate from './templates/MainTemplate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop/ScrollTop';

import ProductsContextProvider from './contexts/ProductsContext';

import LandingPage from './pages/LandingPage/LandingPage';
import Story from './pages/Story/Story';
import Products from './pages/Products/Products';
import SpecificProduct from './pages/SpecificProduct/SpecificProduct';

function App() {
  return (
    <Router>
      <MainTemplate>
        <ProductsContextProvider>
          <ScrollTop>
            <Switch>
              <Route path={'/'} exact component={LandingPage} />
              <Route path={'/story'} component={Story} />
              <Route path={'/products'} component={Products} />
              <Route path={'/cart'} component={Products} />
              <Route path={'/product/:id'} component={SpecificProduct} />
            </Switch>
          </ScrollTop>
        </ProductsContextProvider>
      </MainTemplate>
    </Router>
  );
}

export default App;
