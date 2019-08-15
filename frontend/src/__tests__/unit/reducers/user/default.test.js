import User from '../../../../redux/reducers/user';

describe('User reducer', () => {
  const initialState = {
    user: {},
    isLoggedIn: false
  }
  
  it('should return the initial state when an action type is not passed',  () => {
    const reducer = User(undefined, {});
    expect(reducer).toEqual(initialState);
  });
});