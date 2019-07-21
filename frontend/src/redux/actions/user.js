import * as UserActionTypes from '../actionTypes/user';

export const loginUserAction = user => {
  return {
    type: UserActionTypes.LOGIN_USER,
    user: user
  };
}

export const updateUserAction = (user) => {
  return {
    type: UserActionTypes.UPDATE_USER,
    user: user
  };
}

export const signOutUserAction = () => {
  return {
    type: UserActionTypes.SIGN_OUT_USER,
  };
}