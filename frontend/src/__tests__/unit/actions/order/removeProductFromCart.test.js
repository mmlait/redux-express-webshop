import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { removeProductFromCartAction } from '../../../../redux/actions/order';
import * as OrderActionTypes from '../../../../redux/actionTypes/order';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

let props = {
    index: 2,
    newTotalAmount: 30.99
}

describe('removeProductFromCartAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: OrderActionTypes.REMOVE_PRODUCT_FROM_CART,
        index: props.index,
        totalAmount: props.newTotalAmount
    };
    await store.dispatch(removeProductFromCartAction(props.index, props.newTotalAmount));
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].totalAmount).toEqual(expectedAction.totalAmount);
  });
});