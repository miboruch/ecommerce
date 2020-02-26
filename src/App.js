import React, { useEffect } from 'react';
import MainTemplate from './templates/MainTemplate';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticateCheck } from './actions/authAction';
import ScrollTop from './components/ScrollTop/ScrollTop';
import AuthPage from './pages/AuthPage/AuthPage';
import OrderComplete from './pages/OrderComplete/OrderComplete';
import { fetchProducts } from './actions/firebaseAction';
import Loader from './components/atoms/Loader/Loader';
import BaseRoutes from './components/templates/BaseRoutes/BaseRoutes';

function App({ isLoggedIn, authenticationCheck, getProducts, loading }) {
  useEffect(() => {
    authenticationCheck();
    getProducts();
  }, []);

  const routes = isLoggedIn ? (
    <BaseRoutes>
      <Route path={'/order-data'} component={OrderComplete} />
      <Redirect from={'/login'} to={'/account'} />
      <Redirect from={'/register'} to={'/account'} />
    </BaseRoutes>
  ) : (
    <BaseRoutes>
      <Route path={'/login'} component={AuthPage} />
      <Route path={'/register'} component={AuthPage} />
      <Redirect from={'/order-data'} to={'/login'} />
    </BaseRoutes>
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
