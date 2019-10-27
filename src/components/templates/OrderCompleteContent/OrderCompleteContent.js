import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Input from '../../atoms/Input/Input';
import { createOrder } from '../../../actions/orderAction';
import { authSuccess } from '../../../actions/authAction';
import Spinner from '../../atoms/Spinner/Spinner';

const StyledWrapper = styled.div`
  width: 100%;
  height: 89vh;
  background: ${({ theme }) => theme.color.background};
  z-index: -1;
  display: flex;
  align-items: center;
`;

const StyledForm = styled(Form)`
  width: 90%;
  margin: auto;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.mq.standard} {
    justify-content: flex-start;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  padding: 1.5rem;
  text-align: left;
`;

const StyledErrorParagraph = styled(StyledParagraph)`
  color: tomato;
  text-align: left;
`;

const StyledInput = styled(Input)`
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button)`
  margin-top: 3rem;
`;

const UserDataSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short first name')
    .required('First name is required'),
  lastName: Yup.string()
    .min(2, 'Too short last name')
    .required('Last name is required'),
  city: Yup.string()
    .min(2, 'Too short city')
    .required('City is required'),
  address: Yup.string()
    .min(2, 'Too short address')
    .required('Address is required'),
  houseNumber: Yup.string()
    .matches(/^\d+[a-zA-Z]*$/, { message: 'Incorrect house number' })
    .required('House number is required')
});

const OrderCompleteContent = ({
  cart,
  totalPrice,
  token,
  createOrder,
  userID,
  success,
  loading
}) => {
  return (
    <StyledWrapper>
      <Formik
        initialValues={{ name: '', lastName: '', city: '', address: '', houseNumber: undefined }}
        validationSchema={UserDataSchema}
        onSubmit={({ name, lastName, city, address, houseNumber }) => {
          createOrder(token, {
            ...cart,
            totalPrice,
            userID,
            name,
            lastName,
            city,
            address,
            houseNumber
          });
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          ({ handleChange, handleBlur, values, errors }) => (
            <StyledForm>
              <StyledParagraph large>Fill up the data</StyledParagraph>
              {errors.name ? (
                <StyledErrorParagraph small>{errors.name}</StyledErrorParagraph>
              ) : (
                <StyledParagraph small>name</StyledParagraph>
              )}
              <StyledInput
                type='text'
                name='name'
                placeholder='First name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.lastName ? (
                <StyledErrorParagraph small>{errors.lastName}</StyledErrorParagraph>
              ) : (
                <StyledParagraph small>last name</StyledParagraph>
              )}
              <StyledInput
                type='text'
                name='lastName'
                placeholder='Last name'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address ? (
                <StyledErrorParagraph small>{errors.address}</StyledErrorParagraph>
              ) : (
                <StyledParagraph small>address</StyledParagraph>
              )}
              <StyledInput
                type='text'
                name='address'
                placeholder='Address'
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.houseNumber ? (
                <StyledErrorParagraph small>{errors.houseNumber}</StyledErrorParagraph>
              ) : (
                <StyledParagraph small>number</StyledParagraph>
              )}
              <StyledInput
                type='text'
                name='houseNumber'
                placeholder='House number'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.city ? (
                <StyledErrorParagraph small>{errors.city}</StyledErrorParagraph>
              ) : (
                <StyledParagraph small>city</StyledParagraph>
              )}
              <StyledInput
                type='text'
                name='city'
                placeholder='City'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <StyledButton type='submit'>submit</StyledButton>
              {success ? (
                <Link to='/'>
                  <StyledParagraph>Order confirmed, go back to main page &#10003;</StyledParagraph>
                </Link>
              ) : null}
            </StyledForm>
          )
        )}
      </Formik>
    </StyledWrapper>
  );
};

const mapStateToProps = ({
  cartReducer: { cart, totalPrice },
  authReducer: { token, userID },
  orderReducer: { success, loading }
}) => {
  return { cart, totalPrice, token, userID, success, loading };
};

const mapDispatchToProps = dispatch => {
  return {
    createOrder: (token, cart) => dispatch(createOrder(token, cart))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderCompleteContent);
