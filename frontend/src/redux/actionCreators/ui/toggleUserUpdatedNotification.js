import { toggleUserUpdatedNotificationAction } from '../../actions/ui';

export function toggleUserUpdatedNotification() {
  return function(dispatch){
    dispatch(toggleUserUpdatedNotificationAction())
    setTimeout(() => {
      dispatch(toggleUserUpdatedNotificationAction())
    }, 3000);
  }
}