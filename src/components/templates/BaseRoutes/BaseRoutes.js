import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../../../pages/LandingPage/LandingPage';
import Story from '../../../pages/Story/Story';
import Products from '../../../pages/Products/Products';
import Cart from '../../../pages/Cart/Cart';
import SpecificProduct from '../../../pages/SpecificProduct/SpecificProduct';
import Account from '../../../pages/Account/Account';
import Contact from '../../../pages/Contact/Contact';

const BaseRoutes = ({ children }) => {
  return (
    <Switch>
      <Route path={'/'} exact component={LandingPage} />
      <Route path={'/story'} component={Story} />
      <Route path={'/products'} component={Products} />
      <Route path={'/cart'} component={Cart} />
      <Route path={'/product/:id'} exact component={SpecificProduct} />
      <Route path={'/account'} component={Account} />
      <Route path={'/contact'} component={Contact} />
      {children}
    </Switch>
  );
};

export default BaseRoutes;
