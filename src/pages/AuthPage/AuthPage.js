import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthContent from '../../components/templates/AuthContent/AuthContent';

const AuthPage = ({ location: { pathname } }) => {
  const types = ['login', 'register'];

  const [currentPage] = types.filter(page => pathname.includes(page));

  return <AuthContent type={currentPage} />;
};

export default withRouter(AuthPage);
