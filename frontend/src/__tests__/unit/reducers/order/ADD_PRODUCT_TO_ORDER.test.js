import Order from '../../../../redux/reducers/order';
import * as OrderActionTypes from '../../../../redux/actionTypes/order';

let props = {
    product: {
      productName: 'Headphones',
      amount: 1,
      subtotal: 5.25,
      unitPrice: 5.25,
      productId: 1234567890
    },
    total: 5.25
}

describe('Order reducer', () => {
    const initialState = {
        orderList: [],
        totalAmount: 0,
    }
    it('should handle ADD_PRODUCT_TO_ORDER as expected', () => {
        const reducer = Order(initialState, {
            type: OrderActionTypes.ADD_PRODUCT_TO_ORDER,
            product: props.product,
            totalAmount: props.total
        });

        expect(reducer).toEqual({
            orderList: [{ 'product': props.product }],
            totalAmount: props.total
        });
    });
});
