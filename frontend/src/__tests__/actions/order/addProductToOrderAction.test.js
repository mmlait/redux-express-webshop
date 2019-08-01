import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addProductToOrderAction } from '../../../redux/actions/order';
import * as OrderActionTypes from '../../../redux/actionTypes/order';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

let props = {
    product: {
      productName: 'Headphones',
      amount: 1,
      subtotal: 5.25,
      unitPrice: 5.25,
      productId: 1234567890
    },
    total: 12.50
}

describe('addProductToOrderAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
      type: OrderActionTypes.ADD_PRODUCT_TO_ORDER,
      product: props.product,
      totalAmount: props.total
    };
    await store.dispatch(addProductToOrderAction(props.product, props.total));
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].totalAmount).toEqual(expectedAction.totalAmount);
  });
});