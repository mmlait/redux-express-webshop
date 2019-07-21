import { togglePurchasedNotificationAction } from '../../actions/ui';

export function togglePurchasedNotification() {
  return function(dispatch){
    dispatch(togglePurchasedNotificationAction())
    setTimeout(() => {
      dispatch(togglePurchasedNotificationAction())
    }, 4000);
  }
}