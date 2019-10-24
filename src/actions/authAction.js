import axios from 'axios';
import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../reducers/authReducer';

const API_KEY = 'AIzaSyDwmRW7kgffAwvOCUYz1yMK3qBahH2HURU';

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = (response, email) => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      token: response.idToken,
      userID: response.localId,
      email: email
    }
  };
};

export const authFailure = error => {
  return {
    type: AUTH_FAILURE,
    payload: {
      error
    }
  };
};

export const authLogout = () => {
  return {
    type: AUTH_LOGOUT
  };
};

const authTimeout = expireTime => dispatch => {
  return setTimeout(() => {
    dispatch(authLogout());
  }, expireTime * 1000);
};

/* Action creators */

export const authenticateUser = (email, password, isLoginPage, history) => dispatch => {
  /* isLoginPage -> allows me to select which URL should I choose */
  /* history -> after success we have to redirect user to main page so we use history */
  const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  const registerURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

  dispatch(authStart());
  return axios
    .post(isLoginPage ? loginURL : registerURL, {
      email,
      password,
      returnSecureToken: true
    })
    .then(response => {
      dispatch(authSuccess(response.data, email));
      dispatch(authTimeout(response.data.expiresIn));
      history.push('/');
    })
    .catch(error => {
      console.log(error);
      dispatch(authFailure(error));
    });
};
