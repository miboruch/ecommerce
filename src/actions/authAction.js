import { AUTHENTICATE } from '../reducers/authReducer';

export const authenticate = (email, password, type) => {
  return {
    type: AUTHENTICATE,
    payload: {
      email,
      password,
      type
    }
  };
};
