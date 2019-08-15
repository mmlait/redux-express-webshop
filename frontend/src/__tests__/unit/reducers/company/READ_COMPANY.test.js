import Company from '../../../../redux/reducers/company';
import * as CompanyActionTypes from '../../../../redux/actionTypes/company';

let company = {
    companyName: 'The Company',
    companyBalance: 2100.60
}

describe('Company reducer', () => {
  const initialState = {
    company: {}
  }
  it('should handle READ_COMPANY as expected', () => {
    const reducer = Company(initialState, {
      type: CompanyActionTypes.READ_COMPANY,
      company: company
    });

    expect(reducer).toEqual({
      company: company
    });
  });
});