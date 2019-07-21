import axios from "axios";
import { readCompanyAction } from '../../actions/company';
import { toggleErrorNotificationAction } from '../../actions/ui';

export function readCompanies() {
  return function(dispatch, getState){
    const state = getState();
    let authToken = state.User.user.token;

    let token = {
        headers: {'Authorization': "bearer " + authToken}
      };

    axios.get("http://127.0.0.1:2000/api/company/readAll", token)
    .then(response=>{
      if(response) {
        dispatch(readCompanyAction(response.data[0]));
      }
    })
    .catch(function (error) {
      console.log(error);
      dispatch(toggleErrorNotificationAction());
    });
  }
}