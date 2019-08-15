import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { togglePurchasedNotificationAction } from '../../../../redux/actions/ui';
import * as UiActionTypes from '../../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('togglePurchasedNotificationAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: UiActionTypes.SHOW_PURCHASED_NOTIFICATION
    };
    await store.dispatch(togglePurchasedNotificationAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});