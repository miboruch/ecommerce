import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { animated } from 'react-spring';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../../actions/authAction';
import Spinner from '../../atoms/Spinner/Spinner';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import { createFadeIn } from '../../animations/animations';

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

const StyledBox = styled(animated.div)`
  width: 100%;
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

const StyledHeading = styled(animated.h1)`
  font-weight: normal;
`;

const StyledButton = styled(animated(Button))`
  margin-top: 2rem;
`;

const AccountContent = ({
  userID,
  loading,
  email,
  createdDate,
  logout,
  history,
  logoutLoading
}) => {
  const accountCreatedDate = new Date(createdDate).toDateString();

  const headingSlide = createFadeIn(1000, 700)();
  const contentSlide = createFadeIn(1000, 1200)();
  const buttonSlide = createFadeIn(1000, 1700)();

  return (
    <StyledWrapper>
      <>
        {loading || logoutLoading ? (
          <Spinner />
        ) : (
          <StyledInnerWrapper>
            <StyledHeading style={headingSlide}>Your account: </StyledHeading>
            <StyledBox style={contentSlide}>
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
            </StyledBox>
            <StyledButton
              style={buttonSlide}
              onClick={() => {
                logout(history);
              }}
            >
              log out
            </StyledButton>
          </StyledInnerWrapper>
        )}
      </>
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
    logout: history => dispatch(logoutUser(history))
  };
};

const AccountContentWithRouter = withRouter(AccountContent);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountContentWithRouter);
