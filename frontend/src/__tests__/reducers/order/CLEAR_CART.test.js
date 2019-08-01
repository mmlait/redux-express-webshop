import Order from '../../../redux/reducers/order';
import * as OrderActionTypes from '../../../redux/actionTypes/order';

describe('Order reducer', () => {
    const initialState = {
        orderList: [],
        totalAmount: 0,
    }
    it('should handle CLEAR_CART as expected', () => {
        const reducer = Order(initialState, {
            type: OrderActionTypes.CLEAR_CART,
            orderList: [],
            totalAmount: 0
        });

        expect(reducer).toEqual({
            orderList: [],
            totalAmount: 0
        });
    });
});
