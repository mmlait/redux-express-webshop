import axios from "axios";
import { readProducts } from '../../actionCreators/product/readProducts';
import { toggleErrorNotificationAction } from '../../actions/ui';

export function deleteProduct(id) {
  return function(dispatch, getState){
    const state = getState();
    let authToken = state.User.user.token;

    let token = {
        headers: {'Authorization': "bearer " + authToken}
      };

    axios.delete(`http://127.0.0.1:2000/api/products/remove?id=${id}`, token)
    .then( response =>{
      if(response) {
        dispatch(readProducts())
      }
    })
    .catch(function (error) {
      console.log(error);
      dispatch(toggleErrorNotificationAction());
    });
  }
}