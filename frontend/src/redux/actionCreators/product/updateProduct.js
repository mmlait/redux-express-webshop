import axios from "axios";
import { readProducts } from '../../actionCreators/product/readProducts';
import { unMarkProductForUpdatingAction } from '../../actions/product';
import { toggleErrorNotificationAction } from '../../actions/ui';

export function updateProduct(product, productId) {
  return function(dispatch, getState){
    const state = getState();
    let authToken = state.User.user.token;

    let token = {
        headers: {'Authorization': "bearer " + authToken}
      };

    let updatedProduct = {
      productName: product.productName,
      price: product.price,
      quantity:product.quantity
    }

    axios.put(`http://127.0.0.1:2000/api/products/update?id=${productId}`, updatedProduct, token)
    .then( response =>{
      if(response) {
        dispatch(readProducts())
        dispatch(unMarkProductForUpdatingAction());
      }
    })
    .catch(function (error) {
      console.log(error);
      dispatch(toggleErrorNotificationAction());
    });
  }
}