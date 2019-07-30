import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toggleCartModalAction } from '../../../redux/actions/ui';
import * as UiActionTypes from '../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('toggleCartModalAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: UiActionTypes.SHOW_CART_MODAL
    };
    await store.dispatch(toggleCartModalAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});