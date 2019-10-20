import { 
  searchSuggestionsAction,
  clearSearchInputAction
 } from '../../actions/product';
import { hideClearSearchInputBtnAction } from '../../actions/ui';

export const showSearchSuggestions = (q) => (dispatch, getState) => {
  const state = getState();
  let products = state.Product.productList;
  let searchSuggestions = [];
  let i;
  if(q === '' || q === ' ') {
    searchSuggestions = [];
    q = ''
    dispatch(searchSuggestionsAction(searchSuggestions, q));
    dispatch(clearSearchInputAction());
    dispatch(hideClearSearchInputBtnAction());
  } else {
    for (i = 0; i < products.length; i++) {
      if (products[i].productName.toLowerCase().includes(q.toLowerCase())) {
        searchSuggestions.push(products[i]);
      }
    }
    dispatch(searchSuggestionsAction(searchSuggestions, q));
  }
}