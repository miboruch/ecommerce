import React from 'react';
import MainTemplate from './templates/MainTemplate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollTop from './components/ScrollTop/ScrollTop';
import ProductsContextProvider from './contexts/ProductsContext';
import LandingPage from './pages/LandingPage/LandingPage';
import Story from './pages/Story/Story';
import Products from './pages/Products/Products';
import SpecificProduct from './pages/SpecificProduct/SpecificProduct';
import Cart from './pages/Cart/Cart';
import AuthPage from './pages/AuthPage/AuthPage';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainTemplate>
          <ProductsContextProvider>
            <ScrollTop>
              <Switch>
                <Route path={'/'} exact component={LandingPage} />
                <Route path={'/story'} component={Story} />
                <Route path={'/products'} component={Products} />
                <Route path={'/cart'} component={Cart} />
                <Route path={'/product/:id'} exact component={SpecificProduct} />
                <Route path={'/login'} component={AuthPage} />
                <Route path={'/register'} component={AuthPage} />
              </Switch>
            </ScrollTop>
          </ProductsContextProvider>
        </MainTemplate>
      </Router>
    </Provider>
  );
}

export default App;
