import Product from '../../../redux/reducers/product';
import * as ProductActionTypes from '../../../redux/actionTypes/product';

let list = [
    {
        productName: 'Headphones',
        unitPrice: 9.99,
        quantity: 2,
        id: 1234567890
    },
    {
        productName: 'Headphones 2',
        unitPrice: 19.99,
        quantity: 2,
        id: 2345678901
    }
]

describe('Product reducer', () => {
  const initialState = {
    productList: [],
    productToBeUpdated: {}
  }
  it('should handle READ_PRODUCTS as expected', () => {
    const reducer = Product(initialState, {
      type: ProductActionTypes.READ_PRODUCTS,
      productList: list
    });

    expect(reducer).toEqual({
        productList: list,
        productToBeUpdated: {}
    });
  });
});