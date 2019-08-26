import { sortProductsAction } from '../../actions/product';

export const sortProductsByCreatedDate = () => (dispatch, getState) => {
  const state = getState();
  let products = state.Product.productList;
  const sortedList = products.slice().sort((a,b) => {
      const date1 = new Date(a.createdDate);
      const date2 = new Date(b.createdDate);
      return date1 - date2
    })
  dispatch(sortProductsAction(sortedList));
}