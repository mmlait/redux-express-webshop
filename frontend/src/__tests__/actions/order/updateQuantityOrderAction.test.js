import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateQuantityOrderAction } from '../../../redux/actions/order';
import * as OrderActionTypes from '../../../redux/actionTypes/order';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

let props = {
    productId: 1234567890,
    newAmount: 3,
    newSubtotal: 24.50,
    newTotalAmount: 86.20
}

describe('updateQuantityOrderAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: OrderActionTypes.UPDATE_QUANTITY,
        productId: props.productId,
        amount: props.newAmount,
        subtotal: props.newSubtotal,
        totalAmount: props.newTotalAmount
    };
    await store.dispatch(updateQuantityOrderAction(props.productId, props.newAmount, props.newSubtotal, props.newTotalAmount));
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].productId).toEqual(expectedAction.productId);
    expect(action[0].amount).toEqual(expectedAction.amount);
    expect(action[0].subtotal).toEqual(expectedAction.subtotal);
    expect(action[0].totalAmount).toEqual(expectedAction.totalAmount);
  });
});