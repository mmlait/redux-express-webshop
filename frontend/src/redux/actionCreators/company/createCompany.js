import axios from "axios";

export function createCompany(company) {
  return function(getState){
    const state = getState();
    let authToken = state.User.user.token;

    let token = {
        headers: {'Authorization': "bearer " + authToken}
      };

    axios.post("http://127.0.0.1:2000/api/company/register", company, token)
    .catch(function (error) {
      console.log(error);
    });
  }
}