import axios from 'axios';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT,
  AUTH_LOGOUT_START
} from '../reducers/authReducer';

const API_KEY = 'AIzaSyDwmRW7kgffAwvOCUYz1yMK3qBahH2HURU';

const authStart = () => {
  return {
    type: AUTH_START
  };
};

const authSuccess = (idToken, localId, email, createdDate) => {
  return {
    type: AUTH_SUCCESS,
    payload: {
      token: idToken,
      userID: localId,
      email,
      createdDate
    }
  };
};

const authFailure = error => {
  return {
    type: AUTH_FAILURE,
    payload: {
      error
    }
  };
};

const authLogoutStart = () => {
  return {
    type: AUTH_LOGOUT_START
  };
};

const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expire');
  return {
    type: AUTH_LOGOUT
  };
};

const authTimeout = expireTime => dispatch => {
  return setTimeout(() => {
    dispatch(authLogout());
  }, expireTime * 1000);
};

const getUserData = idToken => async () => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
    {
      idToken
    }
  );
  return response.data.users[0];
};

/* Action creators */

//login, register
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
    .then(async response => {
      const userData = await dispatch(getUserData(response.data.idToken));
      const createdDate = new Date(Number.parseInt(userData.createdAt));

      dispatch(authSuccess(response.data.idToken, userData.localId, userData.email, createdDate));
      dispatch(authTimeout(response.data.expiresIn));
      history.push('/');
      const expireDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
      localStorage.setItem('token', response.data.idToken);
      localStorage.setItem('expire', expireDate);
    })
    .catch(error => {
      dispatch(authFailure(error));
    });
};

//check if token is saved, and expire time is not expired yet
export const authenticateCheck = () => async dispatch => {
  const token = localStorage.getItem('token');
  if (token) {
    const expirationDate = new Date(localStorage.getItem('expire'));
    if (expirationDate <= new Date()) {
      dispatch(authLogout());
    } else {
      const userData = await dispatch(getUserData(token));
      const createdDate = new Date(Number.parseInt(userData.createdAt));

      dispatch(authSuccess(token, userData.localId, userData.email, createdDate));
      dispatch(authTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    }
  } else {
    dispatch(authLogout());
  }
};

export const logoutUser = history => dispatch => {
  dispatch(authLogoutStart());
  dispatch(authLogout());
  history.push('/');
};
