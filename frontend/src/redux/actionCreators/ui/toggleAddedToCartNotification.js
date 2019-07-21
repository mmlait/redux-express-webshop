import { toggleAddedToCartNotificationAction } from '../../actions/ui';

export function toggleAddedToCartNotification() {
  return function(dispatch){
    dispatch(toggleAddedToCartNotificationAction())
    setTimeout(() => {
      dispatch(toggleAddedToCartNotificationAction())
    }, 3000);
  }
}