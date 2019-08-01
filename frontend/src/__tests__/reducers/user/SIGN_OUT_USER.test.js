import User from '../../../redux/reducers/user';
import * as UserActionTypes from '../../../redux/actionTypes/user';

describe('User reducer', () => {
  const initialState = {
      user: {},
      isLoggedIn: false
  }
  it('should handle SIGN_OUT_USER as expected', () => {
    const reducer = User(initialState, {
      type: UserActionTypes.SIGN_OUT_USER,
      user: {},
      isLoggedIn: false
    });

    expect(reducer).toEqual({
      user: {},
      isLoggedIn: false
    });
  });
});