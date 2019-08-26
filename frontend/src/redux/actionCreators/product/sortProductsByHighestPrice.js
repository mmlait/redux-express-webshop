import { sortProductsAction } from '../../actions/product';

export const sortProductsByHighestPrice = () => (dispatch, getState) => {
  const state = getState();
  let products = state.Product.productList;
  const sortedList = products.slice().sort((a,b) => {
      return b.price - a.price
    })
  dispatch(sortProductsAction(sortedList));
}