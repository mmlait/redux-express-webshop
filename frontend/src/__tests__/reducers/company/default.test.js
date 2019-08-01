import Company from '../../../redux/reducers/company';

describe('Company reducer', () => {
  const initialState = {
    company: {}
  }
  
  it('should return the initial state when an action type is not passed',  () => {
    const reducer = Company(undefined, {});
    expect(reducer).toEqual(initialState);
  });
});