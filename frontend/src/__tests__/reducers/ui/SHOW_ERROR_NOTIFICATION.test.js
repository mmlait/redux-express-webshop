import Ui from '../../../redux/reducers/ui';
import * as UiActionTypes from '../../../redux/actionTypes/ui';

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
    it('should handle SHOW_ERROR_NOTIFICATION as expected', () => {
        const reducer = Ui(initialState, {
            type: UiActionTypes.SHOW_ERROR_NOTIFICATION,
            showErrorNotification: true
        });

        expect(reducer).toEqual({
            showRegisterForm: false,
            showMenuModal: false,
            showAddProductModal: false,
            showProductAddedNotification: false,
            showEditProductModal: false,
            showCartModal: false,
            showAddedToCartNotification: false,
            showPurchaseConfirmationModal: false,
            showPurchasedModal: false,
            showErrorNotification: true,
            showCustomNotificationModal: false,
            customNotification: ""
        });
    });
});
