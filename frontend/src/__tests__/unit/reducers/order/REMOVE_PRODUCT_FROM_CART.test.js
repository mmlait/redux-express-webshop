import Order from '../../../../redux/reducers/order';
import * as OrderActionTypes from '../../../../redux/actionTypes/order';

let props = {
  index: 0,
  total: 0.00
}

let product = {
  productName: 'Headphones',
  amount: 1,
  subtotal: 5.00,
  unitPrice: 5.00,
  productId: 1234567890
}

describe('Order reducer', () => {
    const state = {
      orderList: [{ 'product': product }],
      totalAmount: 5.00,
    }
    it('should handle REMOVE_PRODUCT_FROM_CART as expected', () => {
      const reducer = Order(state, {
        type: OrderActionTypes.REMOVE_PRODUCT_FROM_CART,
        index: props.index,
        totalAmount: props.total
      });

      expect(reducer).toEqual({
        orderList: [],
        totalAmount: props.total
      });
    });
});
