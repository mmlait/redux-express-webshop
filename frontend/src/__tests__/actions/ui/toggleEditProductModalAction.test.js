import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toggleEditProductModalAction } from '../../../redux/actions/ui';
import * as UiActionTypes from '../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('toggleEditProductModalAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: UiActionTypes.SHOW_EDIT_PRODUCT_MODAL
    };
    await store.dispatch(toggleEditProductModalAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});