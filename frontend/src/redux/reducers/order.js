import * as OrderActionTypes from '../actionTypes/order';

const initialState = {
  orderList: [],
  totalAmount: 0,
}

export default function Order(state=initialState, action) {

  switch(action.type) {

    case OrderActionTypes.CLEAR_CART: {
      return {
        ...state,
        orderList: [],
        totalAmount: 0
      };
    }

    case OrderActionTypes.ADD_PRODUCT_TO_ORDER: {
      const addProductToOrderList = [
        ...state.orderList,
        {
          product: action.product,
        }
      ];
      return {
        ...state,
        orderList: addProductToOrderList,
        totalAmount: action.totalAmount
      };
    }

    case OrderActionTypes.UPDATE_QUANTITY: {
      const updateOrderList = state.orderList.map((product) => {
        if(product.product.productId === action.productId){
          return {
            product: {
              ...product.product,
              amount: action.amount,
              subtotal: action.subtotal
            }
          }
        }
        return product;
      });
        return {
          ...state,
          orderList: updateOrderList,
          totalAmount: action.totalAmount
        };
      }

    case OrderActionTypes.REMOVE_PRODUCT_FROM_CART: {
      const removeProductList = [
        ...state.orderList.slice(0, action.index),
        ...state.orderList.slice(action.index + 1),
      ];
      return {
        ...state,
        orderList: removeProductList,
        totalAmount: action.totalAmount
      };
    }

    default:
      return state;

  }
}