import axios from "axios";
import { loginUserAction } from '../../actions/user';
import { readProducts } from '../../actionCreators/product/readProducts';
import { readCompanies } from '../../actionCreators/company/readCompanies';
import { 
  setCustomNotificationAction,
  toggleCustomNotificationModalAction
} from '../../actions/ui';

export function loginUser(user) {
  return function(dispatch){
    axios.post("http://127.0.0.1:2000/api/users/authenticate", user)
    .then( response =>{
      if(response) {
        dispatch(loginUserAction(response.data));
        dispatch(readProducts());
        dispatch(readCompanies());
      }
    })
    .catch(function (error) {
      console.log(error);
      dispatch(setCustomNotificationAction("Something went wrong. Check email and password."));
      dispatch(toggleCustomNotificationModalAction());
    });
  }
}