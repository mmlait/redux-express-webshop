import * as ProductActionTypes from '../actionTypes/product';

export const readProductsAction = productList => {
  return {
    type: ProductActionTypes.READ_PRODUCTS,
    productList: productList
  };
}

export const markProductForUpdatingAction = (name, price, quantity, productId) => {
  return {
    type: ProductActionTypes.PRODUCT_WANTED_TO_UPDATE,
    product: {
      productName: name,
      unitPrice: price, 
      quantity: quantity, 
      id: productId
    }
  };
}

export const unMarkProductForUpdatingAction = () => {
  return {
    type: ProductActionTypes.PRODUCT_WANTED_TO_UPDATE,
    product: {}
  };
}
