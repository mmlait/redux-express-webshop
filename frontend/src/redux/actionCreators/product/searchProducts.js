import { searchProductsAction } from '../../actions/product';

export const searchProducts = (keyword) => (dispatch, getState) => {
  const state = getState();
  let products = state.Product.productList;
  const searchResults = [];
  let i;
  if(keyword.keyCode === 13) {
    for (i = 0; i < products.length; i++) {
      if (products[i].productName.includes(keyword.target.value)) {
        searchResults.push(products[i]);
      }
    }
  } else if (!keyword.keyCode) {
      for (i = 0; i < products.length; i++) {
        if (products[i].productName.includes(keyword)) {
          searchResults.push(products[i]);
        }
      }
  }

  dispatch(searchProductsAction(searchResults));
}