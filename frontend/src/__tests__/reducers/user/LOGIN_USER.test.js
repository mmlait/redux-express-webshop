import User from '../../../redux/reducers/user';
import * as UserActionTypes from '../../../redux/actionTypes/user';

let user = {
  email: 'anna@testEmployee.com',
  firstName: 'Anna',
  lastName: 'Andersson',
  role: 1,
  isAdmin: true,
  balance: 0
}

describe('User reducer', () => {
  const initialState = {
      user: {},
      isLoggedIn: false
  }
  it('should handle LOGIN_USER as expected', () => {
    const reducer = User(initialState, {
      type: UserActionTypes.LOGIN_USER,
      user: user,
      isLoggedIn: true
    });

    expect(reducer).toEqual({
      user: user,
      isLoggedIn: true
    });
  });
});