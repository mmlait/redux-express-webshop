import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateCompanyAction } from '../../../redux/actions/company';
import * as CompanyActionTypes from '../../../redux/actionTypes/company';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

let updatedCompany = {
  companyName: 'The Company',
  companyBalance: 2100.39,
}

describe('updateCompanyAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
      type: CompanyActionTypes.UPDATE_COMPANY,
      company: updatedCompany
    };
    await store.dispatch(updateCompanyAction(updatedCompany));
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].company).toEqual(expectedAction.company);
  });
});