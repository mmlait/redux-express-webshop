import * as ProductActionTypes from '../actionTypes/product';

const initialState = {
  productList: [],
  searchSuggestions: [],
  searchInputValue: "",
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
        searchSuggestions: action.searchSuggestions,
        searchInputValue: action.searchInputValue
      };
    }

    case ProductActionTypes.SEARCH_PRODUCTS: {
      return {
        ...state,
        searchInputValue: action.searchInputValue,
        searchResultList: action.searchResultList,
        searchSuggestions: []
      };
    }

    case ProductActionTypes.CLEAR_SEARCH_RESULTS: {
      return {
        ...state,
        searchSuggestions: [],
        searchInputValue: "",
        searchResultList: [],
        productToBeUpdated: {}
      };
    }

    default:
      return state;

  }
}