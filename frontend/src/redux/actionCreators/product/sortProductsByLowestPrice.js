import { sortProductsAction } from '../../actions/product';

export const sortProductsByLowestPrice = () => (dispatch, getState) => {
  const state = getState();
  let products = state.Product.productList;
  const sortedList = products.slice().sort((a,b) => {
      return a.price - b.price
    })
  dispatch(sortProductsAction(sortedList));
}