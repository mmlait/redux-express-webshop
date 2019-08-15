import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toggleProductAddedNotificationAction } from '../../../../redux/actions/ui';
import * as UiActionTypes from '../../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('toggleProductAddedNotificationAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: UiActionTypes.SHOW_PRODUCT_ADDED_NOTIFICATION
    };
    await store.dispatch(toggleProductAddedNotificationAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});