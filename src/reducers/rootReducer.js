import { combineReducers } from 'redux';
import { orderReducer } from './orderReducer';
import { authReducer } from './authReducer';
import { firebaseReducer } from './firebaseReducer';

export const rootReducer = combineReducers({
  orderReducer,
  authReducer,
  firebaseReducer
});
