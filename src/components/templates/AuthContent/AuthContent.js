import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Paragraph from '../../atoms/Paragraph/Paragraph';

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

const AuthContent = ({ type }) => {
  const [isCurrentLogin] = useState(type === 'login');

  return (
    <StyledWrapper>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={({ username, password }) => {
          console.log(username, password);
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
              type='text'
              name='username'
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
              <Button type='submit'>log in</Button>
            ) : (
              <Button type='submit'>create</Button>
            )}
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};

export default AuthContent;
