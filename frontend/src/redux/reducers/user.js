import * as UserActionTypes from '../actionTypes/user';

const initialState = {
  user: {},
  isLoggedIn: false
}

export default function User(state=initialState, action) {

  switch(action.type) {

    case UserActionTypes.LOGIN_USER: {
      return {
        ...state,
        user: action.user,
        isLoggedIn: true
      };
    }

    case UserActionTypes.UPDATE_USER: {
      return {
        ...state,
        user: action.user,
        isLoggedIn: true
      };
    }

    case UserActionTypes.SIGN_OUT_USER: {
      return {
        ...state,
        user: {},
        isLoggedIn: false
      };
    }

    default:
      return state;

  }
}