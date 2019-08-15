import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { readCompanyAction } from '../../../../redux/actions/company';
import * as CompanyActionTypes from '../../../../redux/actionTypes/company';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

let company = {
  companyName: 'The Company',
  companyBalance: 2030.39,
}

describe('readCompanyAction', () => {
  it('should dispatch the correct action', async () => {
    const store = mockStore({});
    const expectedAction = {
      type: CompanyActionTypes.READ_COMPANY,
      company: company
    };
    await store.dispatch(readCompanyAction(company));
    const action = store.getActions();
    expect(action[0].type).toEqual(expectedAction.type);
    expect(action[0].company).toEqual(expectedAction.company);
  });
});