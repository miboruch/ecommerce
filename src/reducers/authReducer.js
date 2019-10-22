export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

const initialState = {
  error: null,
  token: null,
  userID: null,
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
    default:
      return state;
  }
};
