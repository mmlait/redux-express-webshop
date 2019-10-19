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
    productToBeUpdated: {
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
    productToBeUpdated: {}
  };
}

export const sortProductsAction = productList => {
  return {
    type: ProductActionTypes.SORT_PRODUCTS,
    productList: productList
  };
}

export const searchSuggestionsAction = searchSuggestions => {
  return {
    type: ProductActionTypes.SHOW_SEARCH_SUGGESTIONS,
    searchSuggestions: searchSuggestions
  };
}

export const searchProductsAction = searchResultList => {
  return {
    type: ProductActionTypes.SEARCH_PRODUCTS,
    searchResultList: searchResultList
  };
}