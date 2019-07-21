import axios from "axios";
import { loginUserAction } from '../../actions/user';
import { readProducts } from '../../actionCreators/product/readProducts';
import { 
  setCustomNotificationAction,
  toggleCustomNotificationModalAction,
  toggleErrorNotificationAction 
} from '../../actions/ui';

export function createUser(user) {
  return function(dispatch){
    axios.post("http://127.0.0.1:2000/api/users/register", user)
    .then( response =>{
      let message = response.data.message;
      if(message) {
        if(message.includes("Email already exists")) {
          dispatch(setCustomNotificationAction("Email already exists. User could not be registered."));
          dispatch(toggleCustomNotificationModalAction());
        } else {
          dispatch(toggleErrorNotificationAction());
        }
      }
      else if(response) {
        dispatch(loginUserAction(response.data))
        dispatch(readProducts());
      }
    })
    .catch(function (error) {
      console.log(error);
      dispatch(toggleErrorNotificationAction());
    });
  }
}