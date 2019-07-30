import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { togglePurchaseConfirmationModalAction } from '../../../redux/actions/ui';
import * as UiActionTypes from '../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('togglePurchaseConfirmationModalAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: UiActionTypes.SHOW_PURCHASE_CONFIRMATION_MODAL
    };
    await store.dispatch(togglePurchaseConfirmationModalAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});