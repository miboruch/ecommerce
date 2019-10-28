export const ORDER_START = 'ORDER_START';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';

const initialState = {
  error: null,
  loading: false,
  order: [],
  success: false
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_START:
      return {
        ...state,
        loading: true,
        success: false,
        error: null
      };
    case ORDER_SUCCESS:
      return {
        ...state,
        order: action.payload,
        loading: false,
        success: true
      };
    case ORDER_FAILURE:
      return {
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
