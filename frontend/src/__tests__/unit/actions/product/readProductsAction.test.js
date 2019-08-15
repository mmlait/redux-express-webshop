import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { readProductsAction } from '../../../../redux/actions/product';
import * as ProductActionTypes from '../../../../redux/actionTypes/product';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

let productList = [{
  productName: 'Headphones',
  price: 49.99,
  quantity: 7
}]

describe('readProductsAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
      type: ProductActionTypes.READ_PRODUCTS,
      productList: productList
    };
    await store.dispatch(readProductsAction(productList));
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].productList).toEqual(expectedAction.productList);
  });
});