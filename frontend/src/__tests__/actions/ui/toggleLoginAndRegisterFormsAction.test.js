import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toggleLoginAndRegisterFormsAction } from '../../../redux/actions/ui';
import * as UiActionTypes from '../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('toggleLoginAndRegisterFormsAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
      type: UiActionTypes.TOGGLE_LOGIN_AND_REGISTER_FORMS
    };
    await store.dispatch(toggleLoginAndRegisterFormsAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});