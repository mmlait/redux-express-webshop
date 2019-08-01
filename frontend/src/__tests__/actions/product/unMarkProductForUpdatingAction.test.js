import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { unMarkProductForUpdatingAction } from '../../../redux/actions/product';
import * as ProductActionTypes from '../../../redux/actionTypes/product';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('unMarkProductForUpdatingAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
      type: ProductActionTypes.PRODUCT_WANTED_TO_UPDATE,
      productToBeUpdated: {}
    };
    await store.dispatch(unMarkProductForUpdatingAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].product).toEqual(expectedAction.product);
  });
});