import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginUserAction } from '../../../redux/actions/user';
import * as UserActionTypes from '../../../redux/actionTypes/user';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

let user = {
  email: 'alex@testCustomer.com',
  firstName: 'Alex',
  lastName: 'Andersson',
  role: 0,
  isAdmin: false,
  balance: 10.40
}

describe('loginUserAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
      type: UserActionTypes.LOGIN_USER,
      user: user
    };
    await store.dispatch(loginUserAction(user));
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].user).toEqual(expectedAction.user);
  });
});