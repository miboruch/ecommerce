import React from 'react';
import MainTemplate from './templates/MainTemplate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop/ScrollTop';
import ProductsContextProvider from './contexts/ProductsContext';
import OrderContextProvider from './contexts/OrderContext';
import LandingPage from './pages/LandingPage/LandingPage';
import Story from './pages/Story/Story';
import Products from './pages/Products/Products';
import SpecificProduct from './pages/SpecificProduct/SpecificProduct';
import Cart from './pages/Cart/Cart';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  return (
    <Router>
      <MainTemplate>
        <ProductsContextProvider>
          <OrderContextProvider>
            <ScrollTop>
              <Switch>
                <Route path={'/'} exact component={LandingPage} />
                <Route path={'/story'} component={Story} />
                <Route path={'/products'} component={Products} />
                <Route path={'/cart'} component={Cart} />
                <Route path={'/product/:id'} component={SpecificProduct} />
                <Route path={'/login'} component={AuthPage} />
                <Route path={'/register'} component={AuthPage} />
              </Switch>
            </ScrollTop>
          </OrderContextProvider>
        </ProductsContextProvider>
      </MainTemplate>
    </Router>
  );
}

export default App;
