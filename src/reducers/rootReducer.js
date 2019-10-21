import { combineReducers } from 'redux';
import { orderReducer } from './orderReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  orderReducer,
  authReducer
});
