import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setCustomNotificationAction } from '../../../redux/actions/ui';
import * as UiActionTypes from '../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

let notification = 'Test notification';

describe('setCustomNotificationAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: UiActionTypes.SET_CUSTOM_NOTIFICATION,
        customNotification: notification
    };
    await store.dispatch(setCustomNotificationAction(notification));
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].notification).toEqual(expectedAction.notification);
  });
});