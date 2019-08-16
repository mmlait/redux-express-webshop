import Ui from '../../../../redux/reducers/ui';

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
    customNotification: "",
    showUserUpdatedNotification: false
  }
  
  it('should return the initial state when an action type is not passed',  () => {
    const reducer = Ui(undefined, {});
    expect(reducer).toEqual(initialState);
  });
});