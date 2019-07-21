import * as OrderActionTypes from '../actionTypes/order';

export const clearCartAction = () => {
  return {
    type: OrderActionTypes.CLEAR_CART,
  };
}

export const addProductToOrderAction = (product, total) => {
  return {
    type: OrderActionTypes.ADD_PRODUCT_TO_ORDER,
    product: product,
    totalAmount: total
  };
}

export const updateQuantityOrderAction = (productId, newAmount, newSubtotal, newTotalAmount) => {
  return {
    type: OrderActionTypes.UPDATE_QUANTITY,
    productId: productId,
    quantity: newAmount,
    subtotal: newSubtotal,
    totalAmount: newTotalAmount
  };
}

export const removeProductFromCartAction = (index, newTotalAmount) => {
  return {
    type: OrderActionTypes.REMOVE_PRODUCT_FROM_CART,
    index,
    totalAmount: newTotalAmount
  };
}
