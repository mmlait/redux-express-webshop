import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toggleMenuModalAction } from '../../../redux/actions/ui';
import * as UiActionTypes from '../../../redux/actionTypes/ui';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe('toggleMenuModalAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
        type: UiActionTypes.SHOW_MENU_MODAL
    };
    await store.dispatch(toggleMenuModalAction());
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
  });
});