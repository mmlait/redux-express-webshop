import * as UiActionTypes from '../actionTypes/ui';

const initialState = {
  showRegisterForm: false,
  showMenuModal: false,
  showAddProductModal: false,
  showProductAddedNotification: false,
  showEditProductModal: false,
  showCartModal: false,
  showAddedToCartNotification: false,
  showPurchaseConfirmationModal: false,
  showPurchasedModal: false,
  showErrorNotification: false,
  showCustomNotificationModal: false,
  customNotification: "",
  showUserUpdatedNotification: false,
  showClearSearchInputBtn: false
}

export default function Ui(state=initialState, action) {

  switch(action.type) {
    
    case UiActionTypes.TOGGLE_LOGIN_AND_REGISTER_FORMS:
      return {
        ...state,
        showRegisterForm: !state.showRegisterForm
      }

    case UiActionTypes.SHOW_MENU_MODAL:
      return {
        ...state,
        showMenuModal: !state.showMenuModal
      }

    case UiActionTypes.SHOW_ADD_PRODUCT_MODAL:
      return {
        ...state,
        showAddProductModal: !state.showAddProductModal
      }

    case UiActionTypes.SHOW_PRODUCT_ADDED_NOTIFICATION:
      return {
        ...state,
        showProductAddedNotification: !state.showProductAddedNotification
      }
    
    case UiActionTypes.SHOW_EDIT_PRODUCT_MODAL:
      return {
        ...state,
        showEditProductModal: !state.showEditProductModal
      }

    case UiActionTypes.SHOW_CART_MODAL:
      return {
        ...state,
        showCartModal: !state.showCartModal
      }

    case UiActionTypes.SHOW_ADDED_TO_CART_NOTIFICATION:
      return {
        ...state,
        showAddedToCartNotification: !state.showAddedToCartNotification
      }

    case UiActionTypes.SHOW_PURCHASE_CONFIRMATION_MODAL:
      return {
        ...state,
        showPurchaseConfirmationModal: !state.showPurchaseConfirmationModal
      }

    case UiActionTypes.SHOW_PURCHASED_NOTIFICATION:
      return {
        ...state,
        showPurchasedModal: !state.showPurchasedModal
      }

    case UiActionTypes.SHOW_ERROR_NOTIFICATION:
      return {
        ...state,
        showErrorNotification: !state.showErrorNotification
      }

    case UiActionTypes.SHOW_CUSTOM_NOTIFICATION_MODAL:
      return {
        ...state,
        showCustomNotificationModal: !state.showCustomNotificationModal
      }

    case UiActionTypes.SET_CUSTOM_NOTIFICATION:
      return {
        ...state,
        customNotification: action.customNotification
      }

    case UiActionTypes.SHOW_USER_UPDATED_NOTIFICATION:
      return {
        ...state,
        showUserUpdatedNotification: !state.showUserUpdatedNotification
      }

    case UiActionTypes.SHOW_CLEAR_SEARCH_INPUT_BTN:
      return {
        ...state,
        showClearSearchInputBtn: true
      }

    case UiActionTypes.HIDE_CLEAR_SEARCH_INPUT_BTN:
      return {
        ...state,
        showClearSearchInputBtn: false
      }

    default:
      return state;
  }
}