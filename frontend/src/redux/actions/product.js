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

export const searchSuggestionsAction = (searchSuggestions, searchInputValue) => {
  return {
    type: ProductActionTypes.SHOW_SEARCH_SUGGESTIONS,
    searchSuggestions: searchSuggestions,
    searchInputValue: searchInputValue
  };
}

export const searchProductsAction = (keyword, searchResultList) => {
  return {
    type: ProductActionTypes.SEARCH_PRODUCTS,
    searchInputValue: keyword,
    searchResultList: searchResultList
  };
}

export const clearSearchInputAction = () => {
  return {
    type: ProductActionTypes.CLEAR_SEARCH_INPUT_FIELD,
  };
}

export const clearSearchResultsAction = () => {
  return {
    type: ProductActionTypes.CLEAR_SEARCH_RESULTS
  };
}