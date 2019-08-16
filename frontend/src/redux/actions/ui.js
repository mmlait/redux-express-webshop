import * as UiActionTypes from '../actionTypes/ui';

export const toggleLoginAndRegisterFormsAction = () => {
  return {
    type: UiActionTypes.TOGGLE_LOGIN_AND_REGISTER_FORMS
  };
}

export const toggleMenuModalAction = () => {
  return {
    type: UiActionTypes.SHOW_MENU_MODAL
  };
}

export const toggleAddProductModalAction = () => {
  return {
    type: UiActionTypes.SHOW_ADD_PRODUCT_MODAL
  };
}

export const toggleProductAddedNotificationAction = () => {
  return {
    type: UiActionTypes.SHOW_PRODUCT_ADDED_NOTIFICATION
  };
}

export const toggleEditProductModalAction = () => {
  return {
    type: UiActionTypes.SHOW_EDIT_PRODUCT_MODAL
  };
}

export const toggleCartModalAction = () => {
  return {
    type: UiActionTypes.SHOW_CART_MODAL
  };
}

export const toggleAddedToCartNotificationAction = () => {
  return {
    type: UiActionTypes.SHOW_ADDED_TO_CART_NOTIFICATION
  };
}

export const togglePurchaseConfirmationModalAction = () => {
  return {
    type: UiActionTypes.SHOW_PURCHASE_CONFIRMATION_MODAL
  };
}

export const togglePurchasedNotificationAction = () => {
  return {
    type: UiActionTypes.SHOW_PURCHASED_NOTIFICATION
  };
}

export const toggleErrorNotificationAction = () => {
  return {
    type: UiActionTypes.SHOW_ERROR_NOTIFICATION
  };
}

export const toggleCustomNotificationModalAction = () => {
  return {
    type: UiActionTypes.SHOW_CUSTOM_NOTIFICATION_MODAL
  };
}

export const setCustomNotificationAction = (notification) => {
  return {
    type: UiActionTypes.SET_CUSTOM_NOTIFICATION,
    customNotification: notification
  };
}

export const toggleUserUpdatedNotificationAction = () => {
  return {
    type: UiActionTypes.SHOW_USER_UPDATED_NOTIFICATION
  };
}