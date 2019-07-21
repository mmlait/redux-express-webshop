import { toggleProductAddedNotificationAction } from '../../actions/ui';

export function toggleProductAddedNotification() {
  return function(dispatch){
    dispatch(toggleProductAddedNotificationAction())
    setTimeout(() => {
      dispatch(toggleProductAddedNotificationAction())
    }, 3000);
  }
}