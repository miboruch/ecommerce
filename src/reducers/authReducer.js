export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

const initialState = {
  isLoggedIn: false,
  error: null,
  pending: false,
  result: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        pending: true
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        result: action.payload
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};
