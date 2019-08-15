import Order from '../../../../redux/reducers/order';
import * as OrderActionTypes from '../../../../redux/actionTypes/order';

let props = {
    product: {
      productName: 'Headphones',
      amount: 2,
      subtotal: 10.00,
      unitPrice: 5.00,
      productId: 1234567890
    },
    total: 10.00
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
    it('should handle UPDATE_QUANTITY as expected', () => {
        const reducer = Order(state, {
            type: OrderActionTypes.UPDATE_QUANTITY,
            productId: props.product.productId,
            amount: props.product.amount,
            subtotal: props.product.subtotal,
            totalAmount: props.total
        });

        expect(reducer).toEqual({
            orderList: [{ 'product': props.product }],
            totalAmount: props.total
        });
    });
});
