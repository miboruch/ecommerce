import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { authenticateUser } from '../../../actions/authAction';
import Spinner from '../../atoms/Spinner/Spinner';

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
  padding: 1.5rem;
`;

const StyledErrorParagraph = styled(StyledParagraph)`
  color: tomato;
  text-align: center;
`;

const StyledForm = styled(Form)`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const StyledInput = styled(Input)`
  margin-bottom: 2rem;
`;

const UserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password is too short - 8 chars minimum')
    .required('Password is required')
});

const AuthContent = ({ pathname, authenticate, loading }) => {
  const types = ['login', 'register'];

  const [currentPage] = types.filter(page => pathname.includes(page));
  const isCurrentLogin = currentPage === types[0];
  console.log(isCurrentLogin);
  return (
    <StyledWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={UserSchema}
        onSubmit={({ email, password }) => {
          console.log(email, password);
          authenticate(email, password, isCurrentLogin);
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          ({ handleChange, handleBlur, values, errors }) => (
            <StyledForm>
              {isCurrentLogin ? (
                <StyledParagraph medium>Log in</StyledParagraph>
              ) : (
                <StyledParagraph medium>Sign up</StyledParagraph>
              )}
              {errors.email ? (
                <StyledErrorParagraph small>{errors.email}</StyledErrorParagraph>
              ) : (
                <StyledParagraph small>email</StyledParagraph>
              )}
              <StyledInput
                type='email'
                name='email'
                placeholder='Username'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.password ? (
                <StyledErrorParagraph small>{errors.password}</StyledErrorParagraph>
              ) : (
                <StyledParagraph small>password</StyledParagraph>
              )}
              <StyledInput
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChange}
                onBlur={handleBlur}
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
          )
        )}
      </Formik>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ authReducer: { loading } }) => {
  return { loading };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticate: (email, password, isLoginPage) =>
      dispatch(authenticateUser(email, password, isLoginPage))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContent);
