import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toggleCustomNotificationModalAction } from '../../../../redux/actions/ui';
import * as UiActionTypes from '../../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('toggleCustomNotificationModalAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: UiActionTypes.SHOW_CUSTOM_NOTIFICATION_MODAL
    };
    await store.dispatch(toggleCustomNotificationModalAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});