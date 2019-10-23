import axios from 'axios';
import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../reducers/authReducer';

const API_KEY = 'AIzaSyDwmRW7kgffAwvOCUYz1yMK3qBahH2HURU';

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = ({ data }) => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      token: data.idToken,
      userID: data.localId
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

export const authenticateUser = (email, password, isLoginPage) => dispatch => {
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
      console.log(response);
      dispatch(authSuccess(response));
      dispatch(authTimeout(response.data.expiresIn));
    })
    .catch(error => {
      console.log(error);
      dispatch(authFailure(error));
    });
};
