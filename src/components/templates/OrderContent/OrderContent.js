import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchOrders } from '../../../actions/firebaseAction';
import { Link } from 'react-router-dom';
import Spinner from '../../atoms/Spinner/Spinner';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 90%;
  margin: auto;
  height: 89vh;
  text-align: center;
`;

const StyledParagraph = styled(Paragraph)`
  padding: 0 0 1rem 0;
  margin: 0;
  text-align: left;
`;

const StyledHeadingParagraph = styled(StyledParagraph)`
  text-align: left;
  padding: 0;
`;

const StyledHeading = styled.h1`
  font-weight: normal;
`;

const OrderContent = ({
  token,
  userID,
  isLoggedIn,
  loading,
  orders,
  email,
  createdDate,
  getOrders
}) => {
  useEffect(() => {
    getOrders(token, userID);
  }, [isLoggedIn]);

  const fetchedOrders = [];
  orders.map(item => {
    fetchedOrders.push(item.order);
  });
  console.log(fetchedOrders);

  const accountCreatedDate = new Date(createdDate).toDateString();

  return (
    <StyledWrapper>
      {isLoggedIn ? (
        <>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <StyledHeading>Your account: </StyledHeading>
              <StyledHeadingParagraph>
                <strong>email:</strong>
              </StyledHeadingParagraph>
              <StyledParagraph>{email}</StyledParagraph>
              <StyledHeadingParagraph>
                <strong>your ID:</strong>
              </StyledHeadingParagraph>
              <StyledParagraph>{userID}</StyledParagraph>
              <StyledHeadingParagraph>
                <strong>created date:</strong>
              </StyledHeadingParagraph>
              <StyledParagraph>{accountCreatedDate}</StyledParagraph>
              <StyledHeading>Your orders: </StyledHeading>
              {/*{orders.map(item=>{*/}
              {/*  */}
              {/*})}*/}
            </>
          )}
        </>
      ) : (
        <>
          <Paragraph>You have to log in first to see this page</Paragraph>
          <Link to='/login'>
            <Button>LOG IN</Button>
          </Link>
        </>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({
  authReducer: { token, userID, isLoggedIn, email, createdDate },
  firebaseReducer: { loading, orders }
}) => {
  return { token, userID, isLoggedIn, loading, orders, email, createdDate };
};

const mapDispatchToProps = dispatch => {
  return {
    getOrders: (token, id) => dispatch(fetchOrders(token, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderContent);
