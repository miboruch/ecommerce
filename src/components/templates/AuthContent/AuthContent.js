import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { authenticateUser } from '../../../actions/authAction';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  width: 100%;
  height: 89vh;
  background: ${({ theme }) => theme.color.background};
  z-index: -1;
  display: flex;
  justify-content: center;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  padding-bottom: 2rem;
`;

const StyledForm = styled(Form)`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledInput = styled(Input)`
  margin-bottom: 2rem;
`;

const AuthContent = ({ pathname, authenticate }) => {
  const types = ['login', 'register'];

  const [currentPage] = types.filter(page => pathname.includes(page));
  const isCurrentLogin = currentPage === types[0];
  console.log(isCurrentLogin);
  return (
    <StyledWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={({ email, password }) => {
          console.log(email, password);
          authenticate(email, password, isCurrentLogin);
        }}
      >
        {({ handleChange, handleBlur, values }) => (
          <StyledForm>
            {isCurrentLogin ? (
              <StyledParagraph medium>Log in</StyledParagraph>
            ) : (
              <StyledParagraph medium>Sign in</StyledParagraph>
            )}
            <StyledInput
              type='email'
              name='email'
              placeholder='Username'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <StyledInput
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {isCurrentLogin ? (
              <>
                <Button type='submit'>log in</Button>
                <Link to='/register'>
                  <StyledParagraph small>or create an account</StyledParagraph>
                </Link>
              </>
            ) : (
              <>
                <Button type='submit'>create</Button>
                <Link to='/login'>
                  <StyledParagraph small>or log in to your account</StyledParagraph>
                </Link>
              </>
            )}
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (email, password, isLoginPage) =>
      dispatch(authenticateUser(email, password, isLoginPage))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthContent);
