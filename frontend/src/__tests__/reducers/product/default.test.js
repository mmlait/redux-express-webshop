import Product from '../../../redux/reducers/product';

describe('Product reducer', () => {
  const initialState = {
    productList: [],
    productToBeUpdated: {}
  }
  
  it('should return the initial state when an action type is not passed',  () => {
    const reducer = Product(undefined, {});
    expect(reducer).toEqual(initialState);
  });
});