import Ui from '../../../../redux/reducers/ui';
import * as UiActionTypes from '../../../../redux/actionTypes/ui';

describe('Ui reducer', () => {
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
        customNotification: ""
      }
    it('should handle SHOW_PRODUCT_ADDED_NOTIFICATION as expected', () => {
        const reducer = Ui(initialState, {
            type: UiActionTypes.SHOW_PRODUCT_ADDED_NOTIFICATION,
            showProductAddedNotification: true
        });

        expect(reducer).toEqual({
            showRegisterForm: false,
            showMenuModal: false,
            showAddProductModal: false,
            showProductAddedNotification: true,
            showEditProductModal: false,
            showCartModal: false,
            showAddedToCartNotification: false,
            showPurchaseConfirmationModal: false,
            showPurchasedModal: false,
            showErrorNotification: false,
            showCustomNotificationModal: false,
            customNotification: ""
        });
    });
});
