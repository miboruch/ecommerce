import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { animated } from 'react-spring';
import { createFadeIn } from '../../animations/animations';
import { connect } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Input from '../../atoms/Input/Input';
import { createOrder } from '../../../actions/orderAction';
import Spinner from '../../atoms/Spinner/Spinner';

const StyledWrapper = styled.div`
  width: 100%;
  height: 89vh;
  background: ${({ theme }) => theme.color.background};
  z-index: -1;
  display: flex;
  align-items: center;
`;

const StyledForm = styled(animated(Form))`
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

const StyledSuccessParagraph = styled(StyledParagraph)`
  text-align: center;
`;

const StyledInput = styled(Input)`
  margin-bottom: 1rem;
`;

const StyledButton = styled(animated(Button))`
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

export const errorCheck = (errorType, fieldText) =>
  errorType ? (
    <StyledParagraph error small>
      {errorType}
    </StyledParagraph>
  ) : (
    <StyledParagraph small>{fieldText}</StyledParagraph>
  );

const OrderCompleteContent = ({
  cart,
  totalPrice,
  token,
  createOrder,
  userID,
  success,
  loading
}) => {
  const fadeIn = createFadeIn(2000, 900)();
  const buttonFadeIn = createFadeIn(1500, 1900)();

  return (
    <StyledWrapper>
      <Formik
        initialValues={{ name: '', lastName: '', city: '', address: '', houseNumber: undefined }}
        validationSchema={UserDataSchema}
        onSubmit={({ name, lastName, city, address, houseNumber }) => {
          const orderDate = new Date();
          createOrder(token, {
            ...cart,
            totalPrice,
            userID,
            name,
            lastName,
            city,
            address,
            houseNumber,
            orderDate
          });
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          ({ handleChange, handleBlur, values, errors }) => (
            <StyledForm style={fadeIn}>
              <StyledParagraph large>Fill up the data</StyledParagraph>
              {errorCheck(errors.name, 'name')}
              <StyledInput
                type='text'
                name='name'
                placeholder='First name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errorCheck(errors.lastName, 'last name')}
              <StyledInput
                type='text'
                name='lastName'
                placeholder='Last name'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errorCheck(errors.address, 'address')}
              <StyledInput
                type='text'
                name='address'
                placeholder='Address'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errorCheck(errors.houseNumber, 'house number')}
              <StyledInput
                type='text'
                name='houseNumber'
                placeholder='House number'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errorCheck(errors.city, 'city')}
              <StyledInput
                type='text'
                name='city'
                placeholder='City'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <StyledButton type='submit' style={buttonFadeIn}>
                submit
              </StyledButton>
              {success ? (
                <Link to='/'>
                  <StyledSuccessParagraph>
                    Order confirmed, go back to main page &#10003;
                  </StyledSuccessParagraph>
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
