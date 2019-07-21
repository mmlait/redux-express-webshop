import axios from "axios";
import { readProductsAction } from '../../actions/product';
import { toggleErrorNotificationAction } from '../../actions/ui';

export function readProducts() {
  return function(dispatch, getState){
    const state = getState();
    let authToken = state.User.user.token;

    let token = {
        headers: {'Authorization': "bearer " + authToken}
    };
    axios.get("http://127.0.0.1:2000/api/products/readAll", token)
    .then(response=>{
      dispatch(readProductsAction(response.data));
    })
    .catch(function (error) {
      console.log(error);
      dispatch(toggleErrorNotificationAction());
    });
  }
}