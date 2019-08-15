import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateUserAction } from '../../../../redux/actions/user';
import * as UserActionTypes from '../../../../redux/actionTypes/user';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

let updatedUser = {
  email: 'alex@testCustomer.com',
  firstName: 'Alex',
  lastName: 'Andersson',
  role: 0,
  isAdmin: false,
  balance: 5.40
}

describe('updateUserAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
      type: UserActionTypes.UPDATE_USER,
      user: updatedUser
    };
    await store.dispatch(updateUserAction(updatedUser));
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].user).toEqual(expectedAction.user);
  });
});