export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

const initialState = {
  error: null,
  token: null,
  userID: null,
  email: null,
  createdDate: null,
  loading: false,
  isLoggedIn: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        token: action.payload.token,
        userID: action.payload.userID,
        email: action.payload.email,
        createdDate: action.payload.createdDate,
        loading: false,
        isLoggedIn: true
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        isLoggedIn: false
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userID: null,
        email: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
};
