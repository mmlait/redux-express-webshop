import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { markProductForUpdatingAction } from '../../../../redux/actions/product';
import * as ProductActionTypes from '../../../../redux/actionTypes/product';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

let name = 'Headphones';
let price = 59.99;
let quantity = 7;
let productId = 1234567890;

describe('markProductForUpdatingAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
      type: ProductActionTypes.PRODUCT_WANTED_TO_UPDATE,
      productToBeUpdated: {
        productName: name,
        unitPrice: price, 
        quantity: quantity, 
        id: productId
      }
    };
    await store.dispatch(markProductForUpdatingAction(name, price, quantity, productId));
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].product).toEqual(expectedAction.product);
  });
});