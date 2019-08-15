import Product from '../../../../redux/reducers/product';
import * as ProductActionTypes from '../../../../redux/actionTypes/product';

let product = {
    productName: 'Headphones',
    unitPrice: 19.99, 
    quantity: 3, 
    id: 1234567890
  }

describe('Product reducer', () => {
  const initialState = {
    productList: [],
    productToBeUpdated: {}
  }
  it('should handle PRODUCT_WANTED_TO_UPDATE as expected', () => {
    const reducer = Product(initialState, {
      type: ProductActionTypes.PRODUCT_WANTED_TO_UPDATE,
      productToBeUpdated: product
    });

    expect(reducer).toEqual({
        productList: [],
        productToBeUpdated: product
    });
  });
});