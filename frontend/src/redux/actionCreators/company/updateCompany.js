import axios from "axios";
import { updateCompanyAction } from '../../actions/company';
import { toggleErrorNotificationAction } from '../../actions/ui';

export function updateCompany(company) {
  return function(dispatch, getState){
    const state = getState();
    let authToken = state.User.user.token;
    let companyId = company.id;

    let token = {
        headers: {'Authorization': "bearer " + authToken}
      };

    axios.put(`http://127.0.0.1:2000/api/company/update?id=${companyId}`, company, token)
    .then( response =>{
      if(response) {
        dispatch(updateCompanyAction(response.data));
      }
    })
    .catch(function (error) {
      console.log(error);
      dispatch(toggleErrorNotificationAction());
    });
  }
}