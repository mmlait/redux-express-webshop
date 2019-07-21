import axios from "axios";
import { toggleAddedToCartNotification } from '../../actionCreators/ui/toggleAddedToCartNotification';
import { 
    addProductToOrderAction,
    updateQuantityOrderAction
} from '../../actions/order';
import { 
    toggleErrorNotificationAction, 
    setCustomNotificationAction,
    toggleCustomNotificationModalAction 
} from '../../actions/ui';

let notEnoughProducts = "Not enough products in stock";

export function addProductToOrder(id) {
  return function(dispatch, getState){
    const state = getState();
    let productsInCart = state.Order.orderList;
    let total = state.Order.totalAmount;
    let authToken = state.User.user.token;

    let token = {
        headers: {'Authorization': "bearer " + authToken}
    };

    axios.get(`http://127.0.0.1:2000/api/products/read?id=${id}`, token)
      .then( response =>{
        let productsInStock = response.data.quantity;
        let newTotalAmount = total + response.data.price;

        // check that there are products in stock
        if(productsInStock > 0) {
          if(productsInCart.length === 0) {
            addProductToCart(id, token);
          } else {
            const x = productsInCart.find((item) => item.product.productId === id)
            // if product is already added in shopping cart, increase amount
            if (x) {
              let productAmountInCart = x.product.amount;
              let currentSubtotal = x.product.subtotal;

              if(productsInStock > productAmountInCart) {
                let newAmount = productAmountInCart + 1;
                let newSubtotal = x.product.unitPrice + currentSubtotal;
                dispatch(updateQuantityOrderAction(id, newAmount, newSubtotal, newTotalAmount))
              } else{
                dispatch(setCustomNotificationAction(notEnoughProducts));
                dispatch(toggleCustomNotificationModalAction());
              }
            }
            // else add new product to shopping cart
            else {
              addProductToCart(id, token);
            }
          }
        } else{
          dispatch(setCustomNotificationAction(notEnoughProducts));
          dispatch(toggleCustomNotificationModalAction());
        }
      })

    function addProductToCart(id, token) {
      axios.get(`http://127.0.0.1:2000/api/products/read?id=${id}`, token)
      .then( response =>{
        if(response) {
          let subtotal = response.data.price;
          let newTotalAmount = subtotal + total;

          let orderProduct = {
            productName: response.data.productName,
            amount: 1,
            subtotal: subtotal,
            unitPrice: response.data.price,
            productId: id
          }
          dispatch(addProductToOrderAction(orderProduct, newTotalAmount))
          dispatch(toggleAddedToCartNotification());
        }
      })
      .catch(function (error) {
        console.log(error);
        dispatch(toggleErrorNotificationAction());
      });
    }
  }
}