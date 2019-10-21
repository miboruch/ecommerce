export const AUTHENTICATE = 'AUTHENTICATE';

const API_KEY = 'AIzaSyDwmRW7kgffAwvOCUYz1yMK3qBahH2HURU';

const initialState = {
  isLoggedIn: false,
  error: null,
  pending: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return authorizeUser(
        state,
        action.payload.email,
        action.payload.password,
        action.payload.type
      );
    /* refactor to object destructuring */
    default:
      return state;
  }
};

/* ACTION CREATORS */

const authorizeUser = (state, email, password) => {
  console.log('authorization started');
  const loginURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  const registerURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

  return {
    ...state
  };
};
