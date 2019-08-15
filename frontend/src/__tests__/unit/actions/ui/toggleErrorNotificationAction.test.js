import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toggleErrorNotificationAction } from '../../../../redux/actions/ui';
import * as UiActionTypes from '../../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('toggleErrorNotificationAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: UiActionTypes.SHOW_ERROR_NOTIFICATION
    };
    await store.dispatch(toggleErrorNotificationAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});