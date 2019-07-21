import axios from "axios";
import { readProducts } from '../product/readProducts';
import { toggleProductAddedNotification } from '../../actionCreators/ui/toggleProductAddedNotification';
import {
  toggleErrorNotificationAction, 
  setCustomNotificationAction,
  toggleCustomNotificationModalAction 
} from '../../actions/ui';

export function addProduct(product) {
  return function(dispatch, getState){
    const state = getState();
    let authToken = state.User.user.token;

    let token = {
        headers: {'Authorization': "bearer " + authToken}
      };

    axios.post("http://127.0.0.1:2000/api/products/add", product, token)
    .then( response =>{
      let message = response.data.message;
      if(message) {
        if(message.includes("Name already exists")) {
          let errorMessage = "Product name already exists.";
          dispatch(setCustomNotificationAction(errorMessage));
          dispatch(toggleCustomNotificationModalAction());
        } else {
          dispatch(toggleErrorNotificationAction());
        }
      }
      else if(response) {
        dispatch(toggleProductAddedNotification());
        dispatch(readProducts());
      }
    })
    .catch(function (error) {
      console.log(error);
      dispatch(toggleErrorNotificationAction());
    });
  }
}