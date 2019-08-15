import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { signOutUserAction } from '../../../../redux/actions/user';
import * as UserActionTypes from '../../../../redux/actionTypes/user';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('signOutUserAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = { 
      type: UserActionTypes.SIGN_OUT_USER 
    };
    await store.dispatch(signOutUserAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});
