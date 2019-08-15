import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { clearCartAction } from '../../../../redux/actions/order';
import * as OrderActionTypes from '../../../../redux/actionTypes/order';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('clearCartAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: OrderActionTypes.CLEAR_CART
    };
    await store.dispatch(clearCartAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});