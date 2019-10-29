import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
  userID,
  isLoggedIn,
  loading,
  email,
  createdDate,
  logout,
  history,
  logoutLoading
}) => {
  const accountCreatedDate = new Date(createdDate).toDateString();

  useEffect(() => {
    console.log(`logout state changed to: ${logoutLoading}`);
  }, [logoutLoading]);

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
        <StyledInnerWrapper>
          <Paragraph>You have to log in first to see this page</Paragraph>
          <Link to='/login'>
            <Button>LOG IN</Button>
          </Link>
        </StyledInnerWrapper>
      )}
    </StyledWrapper>
  );
};

const mapStateToProps = ({
  authReducer: { userID, isLoggedIn, email, createdDate, logoutLoading },
  firebaseReducer: { loading }
}) => {
  return { userID, isLoggedIn, loading, email, createdDate, logoutLoading };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

const AccountContentWithRouter = withRouter(AccountContent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountContentWithRouter);
