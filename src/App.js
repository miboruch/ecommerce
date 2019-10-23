import React from 'react';
import MainTemplate from './templates/MainTemplate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollTop from './components/ScrollTop/ScrollTop';
import LandingPage from './pages/LandingPage/LandingPage';
import Story from './pages/Story/Story';
import Products from './pages/Products/Products';
import SpecificProduct from './pages/SpecificProduct/SpecificProduct';
import Cart from './pages/Cart/Cart';
import AuthPage from './pages/AuthPage/AuthPage';
import Orders from './pages/Orders/Orders';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainTemplate>
          <ScrollTop>
            <Switch>
              <Route path={'/'} exact component={LandingPage} />
              <Route path={'/story'} component={Story} />
              <Route path={'/products'} component={Products} />
              <Route path={'/cart'} component={Cart} />
              <Route path={'/product/:id'} exact component={SpecificProduct} />
              <Route path={'/login'} component={AuthPage} />
              <Route path={'/register'} component={AuthPage} />
              <Route path={'/orders'} component={Orders} />
            </Switch>
          </ScrollTop>
        </MainTemplate>
      </Router>
    </Provider>
  );
}

export default App;
