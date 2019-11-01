import React, { useEffect } from 'react';
import MainTemplate from './templates/MainTemplate';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticateCheck } from './actions/authAction';
import ScrollTop from './components/ScrollTop/ScrollTop';
import LandingPage from './pages/LandingPage/LandingPage';
import Story from './pages/Story/Story';
import Products from './pages/Products/Products';
import SpecificProduct from './pages/SpecificProduct/SpecificProduct';
import Cart from './pages/Cart/Cart';
import AuthPage from './pages/AuthPage/AuthPage';
import Account from './pages/Account/Account';
import OrderComplete from './pages/OrderComplete/OrderComplete';
import { fetchProducts } from './actions/firebaseAction';
import Loader from './components/atoms/Loader/Loader';
import Contact from './pages/Contact/Contact';

function App({ isLoggedIn, authenticationCheck, getProducts, loading }) {
  useEffect(() => {
    authenticationCheck();
    getProducts();
  }, []);

  const routes = isLoggedIn ? (
    <Switch>
      <Route path={'/'} exact component={LandingPage} />
      <Route path={'/story'} component={Story} />
      <Route path={'/products'} component={Products} />
      <Route path={'/cart'} component={Cart} />
      <Route path={'/product/:id'} exact component={SpecificProduct} />
      <Route path={'/account'} component={Account} />
      <Route path={'/order-data'} component={OrderComplete} />
      <Route path={'/contact'} component={Contact} />
      <Redirect from={'/login'} to={'/account'} />
      <Redirect from={'/register'} to={'/account'} />
    </Switch>
  ) : (
    <Switch>
      <Route path={'/'} exact component={LandingPage} />
      <Route path={'/story'} component={Story} />
      <Route path={'/products'} component={Products} />
      <Route path={'/cart'} component={Cart} />
      <Route path={'/product/:id'} exact component={SpecificProduct} />
      <Route path={'/login'} component={AuthPage} />
      <Route path={'/register'} component={AuthPage} />
      <Route path={'/account'} component={Account} />
      <Route path={'/contact'} component={Contact} />
      <Redirect from={'/order-data'} to={'/login'} />
    </Switch>
  );

  return (
    <Router>
      <MainTemplate>
        <>
          <Loader isLoading={loading} />
          <ScrollTop>{routes}</ScrollTop>
        </>
      </MainTemplate>
    </Router>
  );
}

const mapStateToProps = ({ authReducer: { isLoggedIn }, firebaseReducer: { loading } }) => {
  return { isLoggedIn, loading };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticationCheck: () => dispatch(authenticateCheck()),
    getProducts: () => dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
