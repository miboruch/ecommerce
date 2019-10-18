import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthContent from '../../components/templates/AuthContent/AuthContent';

const AuthPage = ({ match: { path } }) => <AuthContent pathname={path} />;

export default withRouter(AuthPage);
