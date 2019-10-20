import { searchProductsAction } from '../../actions/product';

export const searchProducts = (keyword) => (dispatch, getState) => {
  const state = getState();
  let products = state.Product.productList;
  let searchResults = [];
  let i;
  if(keyword === '' || keyword === ' ') {
    searchResults = [];
    keyword = '';
    dispatch(searchProductsAction(keyword, searchResults));
  } else {
      for (i = 0; i < products.length; i++) {
        if (products[i].productName.toLowerCase().includes(keyword.toLowerCase())) {
          searchResults.push(products[i]);
        }
      }
      dispatch(searchProductsAction(keyword, searchResults));
    }

}