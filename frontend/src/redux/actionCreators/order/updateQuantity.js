import axios from "axios";
import { toggleErrorNotificationAction } from '../../actions/ui';
import { readProducts } from '../product/readProducts';

export function updateQuantity (productId, purchasedQuantity, token) {
  return function(dispatch){
  axios.get(`http://127.0.0.1:2000/api/products/read?id=${productId}`, token)
    .then( response =>{
      let currentAmount = response.data.quantity;
      let newAmount = currentAmount - purchasedQuantity;
      let updatedProduct = {...response.data, quantity: newAmount}

      axios.put(`http://127.0.0.1:2000/api/products/update?id=${productId}`, updatedProduct, token)
      .then( response =>{
        dispatch(readProducts());
      })
      .catch(function (error) {
        console.log(error);
        dispatch(toggleErrorNotificationAction());
      });
    })
    .catch(function (error) {
      console.log(error);
      dispatch(toggleErrorNotificationAction());
    });
  }
}