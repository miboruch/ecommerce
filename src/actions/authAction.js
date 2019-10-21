import axios from 'axios';
import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE } from '../reducers/authReducer';

const API_KEY = 'AIzaSyDwmRW7kgffAwvOCUYz1yMK3qBahH2HURU';

export const authStart = () => {
  return {
    type: AUTH_START
  };
};

export const authSuccess = data => {
  return {
    type: AUTH_SUCCESS,
    payload: data
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
    })
    .catch(error => {
      console.log(error);
      dispatch(authFailure(error));
    });
};
