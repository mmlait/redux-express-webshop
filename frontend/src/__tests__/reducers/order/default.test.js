import Order from '../../../redux/reducers/order';

describe('Order reducer', () => {
  const initialState = {
    orderList: [],
    totalAmount: 0,
  }
  
  it('should return the initial state when an action type is not passed',  () => {
    const reducer = Order(undefined, {});
    expect(reducer).toEqual(initialState);
  });
});