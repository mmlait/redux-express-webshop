import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toggleAddProductModalAction } from '../../../../redux/actions/ui';
import * as UiActionTypes from '../../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('toggleAddProductModalAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: UiActionTypes.SHOW_ADD_PRODUCT_MODAL
    };
    await store.dispatch(toggleAddProductModalAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});