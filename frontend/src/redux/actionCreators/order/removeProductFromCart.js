import { removeProductFromCartAction } from '../../actions/order';

export function removeProductFromCart(index, productId) {
    return function(dispatch, getState){
        const state = getState();
        let productsInCart = state.Order.orderList;
        let currentTotal = state.Order.totalAmount;
        const product = productsInCart.find((item) => item.product.productId === productId)
        let newTotal = currentTotal - product.product.subtotal;
        dispatch(removeProductFromCartAction(index, newTotal))
    }
}