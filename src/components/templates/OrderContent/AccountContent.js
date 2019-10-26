import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchOrders } from '../../../actions/firebaseAction';
import { logoutUser } from '../../../actions/authAction';
import { Link } from 'react-router-dom';
import Spinner from '../../atoms/Spinner/Spinner';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 90%;
  margin: auto;
  height: 89vh;
  position: relative;
`;

const StyledInnerWrapper = styled.section`
  width: 100%;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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

const StyledButton = styled(Button)`
  margin-top: 5rem;
`;

const AccountContent = ({
  token,
  userID,
  isLoggedIn,
  loading,
  orders,
  email,
  createdDate,
  getOrders,
  logout,
  history,
  logoutLoading
}) => {
  useEffect(() => {
    getOrders(token, userID);
  }, [isLoggedIn]);

  const accountCreatedDate = new Date(createdDate).toDateString();

  return (
    <StyledWrapper>
      {isLoggedIn ? (
        <>
          {loading || logoutLoading ? (
            <Spinner />
          ) : (
            <StyledInnerWrapper>
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
              <StyledButton
                onClick={() => {
                  history.push('/');
                  logout();
                }}
              >
                log out
              </StyledButton>
            </StyledInnerWrapper>
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
  authReducer: { token, userID, isLoggedIn, email, createdDate, logoutLoading },
  firebaseReducer: { loading, orders }
}) => {
  return { token, userID, isLoggedIn, loading, orders, email, createdDate, logoutLoading };
};

const mapDispatchToProps = dispatch => {
  return {
    getOrders: (token, id) => dispatch(fetchOrders(token, id)),
    logout: () => dispatch(logoutUser())
  };
};

const AccountContentWithRouter = withRouter(AccountContent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountContentWithRouter);
