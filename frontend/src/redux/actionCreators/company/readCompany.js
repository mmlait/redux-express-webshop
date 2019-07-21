import axios from "axios";
import { toggleErrorNotificationAction } from '../../actions/ui';

export function readCompany(companyId) {
  return function(dispatch, getState){
    const state = getState();
    let authToken = state.User.user.token;

    let token = {
        headers: {'Authorization': "bearer " + authToken}
      };

    axios.get(`http://127.0.0.1:2000/api/company/read?id=${companyId}`, token)
    .catch(function (error) {
      console.log(error);
      dispatch(toggleErrorNotificationAction());
    });
  }
}