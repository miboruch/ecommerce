import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { authReducer } from './authReducer';
import { firebaseReducer } from './firebaseReducer';
import { orderReducer } from './orderReducer';

export const rootReducer = combineReducers({
  cartReducer,
  authReducer,
  firebaseReducer,
  orderReducer
});
