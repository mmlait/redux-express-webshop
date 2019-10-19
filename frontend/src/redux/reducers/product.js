import * as ProductActionTypes from '../actionTypes/product';

const initialState = {
  productList: [],
  searchSuggestions: [],
  searchResultList: [],
  productToBeUpdated: {}
}

export default function Product(state=initialState, action) {

  switch(action.type) {

    case ProductActionTypes.READ_PRODUCTS: {
      return {
        ...state,
        productList: action.productList
      };
    }

    case ProductActionTypes.PRODUCT_WANTED_TO_UPDATE: {
      return {
        ...state,
        productToBeUpdated: action.productToBeUpdated
      };
    }

    case ProductActionTypes.SORT_PRODUCTS: {
      return {
        ...state,
        productList: action.productList
      };
    }

    case ProductActionTypes.SHOW_SEARCH_SUGGESTIONS: {
      return {
        ...state,
        searchSuggestions: action.searchSuggestions
      };
    }

    case ProductActionTypes.SEARCH_PRODUCTS: {
      return {
        ...state,
        searchResultList: action.searchResultList
      };
    }

    default:
      return state;

  }
}