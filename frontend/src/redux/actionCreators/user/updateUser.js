import axios from "axios";
import { toggleUserUpdatedNotification } from '../../actionCreators/ui/toggleUserUpdatedNotification';
import { updateUserAction } from '../../actions/user';
import { toggleErrorNotificationAction } from '../../actions/ui';

export function updateUser(user) {
  return function(dispatch, getState){
    const state = getState();
    let authToken = state.User.user.token;
    let userId = state.User.user._id;

    let token = {
        headers: {'Authorization': "bearer " + authToken}
    };

    axios.put(`http://127.0.0.1:2000/api/users/update?id=${userId}`, user, token)
    .then( response =>{
      if(response) {
        let updatedUser = {...response.data, token: authToken};
        dispatch(toggleUserUpdatedNotification());
        dispatch(updateUserAction(updatedUser));
      }
    })
    .catch(function (error) {
      console.log(error);
      dispatch(toggleErrorNotificationAction());
    });
  }
}