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
    it('should handle SHOW_PURCHASE_CONFIRMATION_MODAL as expected', () => {
        const reducer = Ui(initialState, {
            type: UiActionTypes.SHOW_PURCHASE_CONFIRMATION_MODAL,
            showPurchaseConfirmationModal: true
        });

        expect(reducer).toEqual({
            showRegisterForm: false,
            showMenuModal: false,
            showAddProductModal: false,
            showProductAddedNotification: false,
            showEditProductModal: false,
            showCartModal: false,
            showAddedToCartNotification: false,
            showPurchaseConfirmationModal: true,
            showPurchasedModal: false,
            showErrorNotification: false,
            showCustomNotificationModal: false,
            customNotification: ""
        });
    });
});
